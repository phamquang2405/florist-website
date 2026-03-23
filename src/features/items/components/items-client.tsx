'use client';

import { useState } from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FormMessage } from '@/components/ui/form-message';
import { ItemForm } from '@/features/items/components/item-form';
import { ItemList } from '@/features/items/components/item-list';
import { apiClient } from '@/lib/api/api-client';
import { logger } from '@/lib/logger';
import { type InventoryItem } from '@/types/item';
import { type ItemInput } from '@/features/items/schemas/item-schema';

export function ItemsClient({ initialItems }: { initialItems: InventoryItem[] }) {
  const [items, setItems] = useState<InventoryItem[]>(initialItems);
  const [editingItem, setEditingItem] = useState<InventoryItem | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function fetchItems() {
    setError(null);

    try {
      const response = await apiClient.get<InventoryItem[]>('/api/items', {
        cache: 'no-store'
      });
      setItems(response);
    } catch (requestError) {
      logger.error('Failed to load items', requestError);
      setError('Unable to load inventory items right now.');
    }
  }

  async function handleCreate(values: ItemInput) {
    setError(null);
    setIsSaving(true);

    try {
      await apiClient.post('/api/items', values);
      await fetchItems();
    } catch (requestError) {
      logger.error('Failed to create item', requestError);
      setError('Unable to create the arrangement right now.');
    } finally {
      setIsSaving(false);
    }
  }

  async function handleUpdate(values: ItemInput) {
    if (!editingItem) {
      return;
    }

    setError(null);
    setIsSaving(true);

    try {
      await apiClient.patch(`/api/items/${editingItem.id}`, values);
      setEditingItem(null);
      await fetchItems();
    } catch (requestError) {
      logger.error('Failed to update item', requestError);
      setError('Unable to update the arrangement right now.');
    } finally {
      setIsSaving(false);
    }
  }

  async function handleDelete(id: string) {
    setError(null);
    setDeletingId(id);

    try {
      await apiClient.delete(`/api/items/${id}`);
      await fetchItems();
    } catch (requestError) {
      logger.error('Failed to delete item', requestError);
      setError('Unable to delete the arrangement right now.');
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <section className="grid gap-6 lg:grid-cols-[360px_1fr]">
      <Card>
        <CardHeader>
          <CardTitle>{editingItem ? 'Edit arrangement' : 'Create arrangement'}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ItemForm
            initialValues={editingItem ?? undefined}
            onSubmit={editingItem ? handleUpdate : handleCreate}
            isLoading={isSaving}
            submitLabel={editingItem ? 'Save changes' : 'Create item'}
          />
          {editingItem ? (
            <button
              type="button"
              onClick={() => setEditingItem(null)}
              className="text-sm font-medium text-muted-foreground underline-offset-4 hover:underline"
            >
              Cancel editing
            </button>
          ) : null}
          <FormMessage>{error}</FormMessage>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Inventory</CardTitle>
        </CardHeader>
        <CardContent>
          {items.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              No arrangements yet. Create your first one from the form.
            </p>
          ) : (
            <ItemList
              items={items}
              onEdit={setEditingItem}
              onDelete={handleDelete}
              deletingId={deletingId}
            />
          )}
        </CardContent>
      </Card>
    </section>
  );
}
