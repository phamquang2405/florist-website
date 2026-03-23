import { PencilLine, Trash2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { InventoryItem } from '@/types/item';

export function ItemList({
  items,
  onEdit,
  onDelete,
  deletingId
}: {
  items: InventoryItem[];
  onEdit: (item: InventoryItem) => void;
  onDelete: (id: string) => void;
  deletingId?: string | null;
}) {
  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <Card key={item.id} className="bg-white/75">
          <CardHeader className="flex flex-row items-start justify-between gap-4">
            <div>
              <CardTitle className="text-2xl">{item.name}</CardTitle>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" onClick={() => onEdit(item)}>
                <PencilLine className="size-4" />
                Edit
              </Button>
              <Button
                variant="danger"
                onClick={() => onDelete(item.id)}
                isLoading={deletingId === item.id}
              >
                <Trash2 className="size-4" />
                Delete
              </Button>
            </div>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span>${item.price.toFixed(2)}</span>
            <span>{item.stock} in stock</span>
            <span>Updated {new Date(item.updatedAt).toLocaleDateString()}</span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

