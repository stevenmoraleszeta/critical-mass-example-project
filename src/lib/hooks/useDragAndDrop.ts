import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { useLocalStorage } from './useLocalStorage';

export interface DragAndDropItem {
  id: string;
}

export interface UseDragAndDropOptions<T extends DragAndDropItem> {
  items: T[];
  enabled?: boolean;
  storageKey?: string;
  onOrderChange?: (newOrder: T[]) => void;
}

export interface DragAndDropState<T extends DragAndDropItem> {
  items: T[];
  draggedIndex: number | null;
  dragOverIndex: number | null;
  showToast: boolean;
}

export interface DragAndDropHandlers {
  onDragStart: (index: number) => void;
  onDragOver: (e: React.DragEvent, index: number) => void;
  onDragLeave: () => void;
  onDrop: (e: React.DragEvent, dropIndex: number) => void;
  onDragEnd: () => void;
  onReset: () => void;
  dismissToast: () => void;
}

export interface UseDragAndDropReturn<T extends DragAndDropItem> {
  items: T[];
  draggedIndex: number | null;
  dragOverIndex: number | null;
  showToast: boolean;
  handlers: DragAndDropHandlers;
}

export function useDragAndDrop<T extends DragAndDropItem>({
  items: initialItems,
  enabled = false,
  storageKey,
  onOrderChange,
}: UseDragAndDropOptions<T>): UseDragAndDropReturn<T> {
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
  const [showToast, setShowToast] = useState(false);

  // Always enable sync if we have a storageKey, even if enabled is false initially
  // This ensures we can read the saved order
  const { value: savedOrder, setValue: setSavedOrder } = useLocalStorage<string[]>(
    storageKey || '', 
    {
      sync: !!storageKey, // Always sync if we have a key
    }
  );

  const initialItemsIds = useMemo(
    () => initialItems.map((item) => item.id).join(','),
    [initialItems]
  );

  // Helper function to order items based on saved order
  const getOrderedItems = useCallback((order: string[] | null, items: T[]): T[] => {
    if (!order || order.length === 0) {
      return items;
    }

    const orderedItems = order
      .map((id) => items.find((item) => item.id === id))
      .filter((item): item is T => item !== undefined);
    
    const existingIds = new Set(order);
    const newItems = items.filter((item) => !existingIds.has(item.id));
    
    return [...orderedItems, ...newItems];
  }, []);

  // Initialize items state - on client, try to load from localStorage
  const [items, setItems] = useState<T[]>(() => {
    // On server, always use initial items
    if (typeof window === 'undefined') {
      return initialItems;
    }
    
    // On client, if we have storage key and enabled, try to load saved order
    if (storageKey && enabled) {
      try {
        const saved = window.localStorage.getItem(storageKey);
        if (saved) {
          const savedOrder = JSON.parse(saved) as string[];
          if (Array.isArray(savedOrder) && savedOrder.length > 0) {
            // Apply the same ordering logic inline to avoid dependency issues
            const orderedItems = savedOrder
              .map((id) => initialItems.find((item) => item.id === id))
              .filter((item): item is T => item !== undefined);
            
            const existingIds = new Set(savedOrder);
            const newItems = initialItems.filter((item) => !existingIds.has(item.id));
            
            return [...orderedItems, ...newItems];
          }
        }
      } catch (error) {
        console.warn('Error loading saved order from localStorage:', error);
      }
    }
    
    return initialItems;
  });

  const [isMounted, setIsMounted] = useState(false);
  const isInitializingRef = useRef(false);
  const skipSaveRef = useRef(false);
  const previousInitialItemsIdsRef = useRef<string>('');

  // Mark component as mounted after initial render to prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Sync with savedOrder from useLocalStorage after mount
  useEffect(() => {
    if (!isMounted || !storageKey || !enabled) {
      return;
    }

    // If no saved order, ensure we're using initial items
    if (!savedOrder || savedOrder.length === 0) {
      const currentItemsOrder = items.map((item) => item.id).join(',');
      const initialItemsOrder = initialItems.map((item) => item.id).join(',');
      
      // Only update if current order is different from initial
      if (currentItemsOrder !== initialItemsOrder) {
        isInitializingRef.current = true;
        skipSaveRef.current = true;
        previousInitialItemsIdsRef.current = initialItemsIds;
        
        setItems(initialItems);
        
        setTimeout(() => {
          isInitializingRef.current = false;
          skipSaveRef.current = false;
        }, 0);
      } else if (initialItemsIds !== previousInitialItemsIdsRef.current) {
        previousInitialItemsIdsRef.current = initialItemsIds;
      }
      return;
    }

    // Apply the saved order
    const orderedItems = getOrderedItems(savedOrder, initialItems);
    const orderedItemsOrder = orderedItems.map((item) => item.id).join(',');
    const currentItemsOrder = items.map((item) => item.id).join(',');

    // Only update if the order is different
    if (orderedItemsOrder !== currentItemsOrder) {
      isInitializingRef.current = true;
      skipSaveRef.current = true;
      previousInitialItemsIdsRef.current = initialItemsIds;
      
      setItems(orderedItems);
      
      setTimeout(() => {
        isInitializingRef.current = false;
        skipSaveRef.current = false;
      }, 0);
    }
  }, [isMounted, enabled, storageKey, savedOrder, initialItems, initialItemsIds, getOrderedItems, items]);

  // Save order to localStorage, but only if not initializing and order actually changed
  // Note: This effect is a fallback. Primary saving happens in handleDrop
  useEffect(() => {
    if (!isMounted || !enabled || !storageKey || items.length === 0 || isInitializingRef.current || skipSaveRef.current) {
      return;
    }

    const order = items.map((item) => item.id);
    const orderString = order.join(',');
    const currentSavedOrder = savedOrder || [];
    const currentSavedOrderString = currentSavedOrder.join(',');

    // Only update if order actually changed
    // This handles cases where items change outside of drag and drop
    if (orderString !== currentSavedOrderString) {
      setSavedOrder(order);
    }
  }, [isMounted, items, enabled, storageKey, setSavedOrder, savedOrder]);

  useEffect(() => {
    if (onOrderChange) {
      onOrderChange(items);
    }
  }, [items, onOrderChange]);

  const handleDragStart = useCallback((index: number) => {
    if (!enabled) return;
    setDraggedIndex(index);
  }, [enabled]);

  const handleDragOver = useCallback((e: React.DragEvent, index: number) => {
    if (!enabled) return;
    e.preventDefault();
    setDragOverIndex(index);
  }, [enabled]);

  const handleDragLeave = useCallback(() => {
    if (!enabled) return;
    setDragOverIndex(null);
  }, [enabled]);

  const handleDrop = useCallback((e: React.DragEvent, dropIndex: number) => {
    if (!enabled) return;
    e.preventDefault();
    
    if (draggedIndex === null || draggedIndex === dropIndex) {
      setDraggedIndex(null);
      setDragOverIndex(null);
      return;
    }

    const newItems = [...items];
    const draggedItem = newItems[draggedIndex];
    
    newItems.splice(draggedIndex, 1);
    newItems.splice(dropIndex, 0, draggedItem);
    
    setItems(newItems);
    setDraggedIndex(null);
    setDragOverIndex(null);
    
    // Save order immediately after drop
    if (storageKey && enabled) {
      const order = newItems.map((item) => item.id);
      setSavedOrder(order);
      setShowToast(true);
    }
  }, [enabled, draggedIndex, items, storageKey, setSavedOrder]);

  const handleDragEnd = useCallback(() => {
    if (!enabled) return;
    setDraggedIndex(null);
    setDragOverIndex(null);
  }, [enabled]);

  const handleReset = useCallback(() => {
    if (!enabled) return;
    
    // Clear saved order from localStorage
    if (storageKey) {
      setSavedOrder(null);
    }
    
    // Reset items to initial order immediately
    isInitializingRef.current = true;
    skipSaveRef.current = true;
    previousInitialItemsIdsRef.current = initialItemsIds;
    
    setItems(initialItems);
    setShowToast(false);
    
    // Allow saving again after a brief delay
    setTimeout(() => {
      isInitializingRef.current = false;
      skipSaveRef.current = false;
    }, 0);
  }, [enabled, storageKey, initialItems, initialItemsIds, setSavedOrder]);

  const dismissToast = useCallback(() => {
    setShowToast(false);
  }, []);

  const handlers: DragAndDropHandlers = {
    onDragStart: handleDragStart,
    onDragOver: handleDragOver,
    onDragLeave: handleDragLeave,
    onDrop: handleDrop,
    onDragEnd: handleDragEnd,
    onReset: handleReset,
    dismissToast,
  };

  return {
    items,
    draggedIndex,
    dragOverIndex,
    showToast,
    handlers,
  };
}

