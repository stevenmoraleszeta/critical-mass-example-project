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

  const { value: savedOrder, setValue: setSavedOrder } = useLocalStorage<string[]>(
    storageKey || '', 
    {
      sync: !!storageKey, 
    }
  );

  const initialItemsIds = useMemo(
    () => initialItems.map((item) => item.id).join(','),
    [initialItems]
  );

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

  const [items, setItems] = useState<T[]>(() => {
    if (typeof window === 'undefined') {
      return initialItems;
    }
    
    if (storageKey && enabled) {
      try {
        const saved = window.localStorage.getItem(storageKey);
        if (saved) {
          const savedOrder = JSON.parse(saved) as string[];
          if (Array.isArray(savedOrder) && savedOrder.length > 0) {
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

  const hasInitializedRef = useRef(false);
  const previousInitialItemsIdsRef = useRef<string>('');
  const lastSavedOrderRef = useRef<string | null>(null);

  useEffect(() => {
    if (!storageKey || !enabled) {
      return;
    }

    const currentItemsIds = initialItems.map((item) => item.id).join(',');
    const savedOrderString = savedOrder ? savedOrder.join(',') : null;
    
    if (currentItemsIds !== previousInitialItemsIdsRef.current) {
      previousInitialItemsIdsRef.current = currentItemsIds;
      hasInitializedRef.current = false;
      lastSavedOrderRef.current = null;
    }

    if (savedOrderString === lastSavedOrderRef.current && hasInitializedRef.current) {
      return;
    }

    lastSavedOrderRef.current = savedOrderString;

    if (!savedOrder || savedOrder.length === 0) {
      setItems(initialItems);
      hasInitializedRef.current = true;
      return;
    }

    const orderedItems = getOrderedItems(savedOrder, initialItems);
    setItems(orderedItems);
    hasInitializedRef.current = true;
  }, [storageKey, enabled, savedOrder, initialItems, getOrderedItems]);

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
    const dropItem = newItems[dropIndex];
    
    newItems[draggedIndex] = dropItem;
    newItems[dropIndex] = draggedItem;
    
    setItems(newItems);
    setDraggedIndex(null);
    setDragOverIndex(null);
    
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
    
    if (storageKey) {
      setSavedOrder(null);
    }
    
    hasInitializedRef.current = false;
    previousInitialItemsIdsRef.current = initialItemsIds;
    setItems(initialItems);
    setShowToast(false);
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

