import { ItemInput } from '@/features/items/schemas/item-schema';
import { InventoryItem } from '@/types/item';

const initialItems: InventoryItem[] = [
  {
    id: 'rose-cloud',
    name: 'Rose Cloud Bouquet',
    description: 'Soft pink roses with eucalyptus designed for premium delivery windows.',
    price: 89,
    stock: 14,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'citrus-garden',
    name: 'Citrus Garden Basket',
    description: 'Bright ranunculus and snapdragons arranged for storefront pickup.',
    price: 72,
    stock: 9,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

type MutableStore = {
  items: InventoryItem[];
};

const globalStore = globalThis as typeof globalThis & {
  __inventoryStore?: MutableStore;
};

const store = globalStore.__inventoryStore ?? { items: initialItems };

if (!globalStore.__inventoryStore) {
  globalStore.__inventoryStore = store;
}

export const itemService = {
  list() {
    return [...store.items].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
  },
  getById(id: string) {
    return store.items.find((item) => item.id === id) ?? null;
  },
  create(input: ItemInput) {
    const timestamp = new Date().toISOString();
    const item: InventoryItem = {
      id: crypto.randomUUID(),
      ...input,
      createdAt: timestamp,
      updatedAt: timestamp
    };

    store.items.unshift(item);
    return item;
  },
  update(id: string, input: Partial<ItemInput>) {
    const itemIndex = store.items.findIndex((item) => item.id === id);

    if (itemIndex === -1) {
      return null;
    }

    const currentItem = store.items[itemIndex];
    const nextItem: InventoryItem = {
      ...currentItem,
      ...input,
      updatedAt: new Date().toISOString()
    };

    store.items[itemIndex] = nextItem;
    return nextItem;
  },
  remove(id: string) {
    const itemIndex = store.items.findIndex((item) => item.id === id);

    if (itemIndex === -1) {
      return false;
    }

    store.items.splice(itemIndex, 1);
    return true;
  }
};

