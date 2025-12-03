import { useState, useEffect, useCallback } from 'react';

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
  const [items, setItems] = useState<T[]>(initialItems);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (!enabled || !storageKey || typeof window === 'undefined') {
      setItems(initialItems);
      return;
    }

    const savedOrder = localStorage.getItem(storageKey);
    if (!savedOrder) {
      setItems(initialItems);
      return;
    }

    try {
      const order = JSON.parse(savedOrder) as string[];
      const orderedItems = order
        .map((id) => initialItems.find((item) => item.id === id))
        .filter((item): item is T => item !== undefined);
      
      const existingIds = new Set(order);
      const newItems = initialItems.filter((item) => !existingIds.has(item.id));
      
      const finalItems = [...orderedItems, ...newItems];
      setItems(finalItems);
    } catch {
      setItems(initialItems);
    }
  }, [enabled, storageKey, initialItems]);

  useEffect(() => {
    if (!enabled || !storageKey || typeof window === 'undefined' || items.length === 0) {
      return;
    }

    try {
      const order = items.map((item) => item.id);
      localStorage.setItem(storageKey, JSON.stringify(order));
    } catch {
      // Silently fail if localStorage is unavailable
    }
  }, [items, enabled, storageKey]);

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
    
    if (typeof window !== 'undefined' && storageKey) {
      try {
        localStorage.removeItem(storageKey);
        setItems(initialItems);
        setShowToast(false);
      } catch {
        setItems(initialItems);
        setShowToast(false);
      }
    } else {
      setItems(initialItems);
      setShowToast(false);
    }
  }, [enabled, storageKey, initialItems]);

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

