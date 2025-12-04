import { useState, useEffect, useCallback } from 'react';
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

  const { value: savedOrder, setValue: setSavedOrder } = useLocalStorage<string[]>(storageKey || '', {
    defaultValue: null,
    sync: enabled && !!storageKey,
  });

  const [items, setItems] = useState<T[]>(initialItems);

  useEffect(() => {
    if (!enabled || !storageKey || !savedOrder) {
      setItems(initialItems);
      return;
    }

    try {
      const orderedItems = savedOrder
        .map((id) => initialItems.find((item) => item.id === id))
        .filter((item): item is T => item !== undefined);
      
      const existingIds = new Set(savedOrder);
      const newItems = initialItems.filter((item) => !existingIds.has(item.id));
      
      const finalItems = [...orderedItems, ...newItems];
      setItems(finalItems);
    } catch {
      setItems(initialItems);
    }
  }, [enabled, storageKey, savedOrder, initialItems]);

  useEffect(() => {
    if (!enabled || !storageKey || items.length === 0) {
      return;
    }

    const order = items.map((item) => item.id);
    setSavedOrder(order);
  }, [items, enabled, storageKey, setSavedOrder]);

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
    
    if (storageKey) {
      setShowToast(true);
    }
  }, [enabled, draggedIndex, items, storageKey]);

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
    setItems(initialItems);
    setShowToast(false);
  }, [enabled, storageKey, initialItems, setSavedOrder]);

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

