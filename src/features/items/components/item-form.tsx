'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { FormMessage } from '@/components/ui/form-message';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  itemInputSchema,
  type ItemInput
} from '@/features/items/schemas/item-schema';

export function ItemForm({
  initialValues,
  onSubmit,
  isLoading,
  submitLabel
}: {
  initialValues?: Partial<ItemInput>;
  onSubmit: (values: ItemInput) => Promise<void>;
  isLoading?: boolean;
  submitLabel: string;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful }
  } = useForm<ItemInput>({
    resolver: zodResolver(itemInputSchema),
    defaultValues: {
      name: initialValues?.name ?? '',
      description: initialValues?.description ?? '',
      price: initialValues?.price ?? 65,
      stock: initialValues?.stock ?? 12
    }
  });

  useEffect(() => {
    if (!initialValues && isSubmitSuccessful) {
      reset({
        name: '',
        description: '',
        price: 65,
        stock: 12
      });
    }
  }, [initialValues, isSubmitSuccessful, reset]);

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Label htmlFor="name">Arrangement name</Label>
        <Input id="name" placeholder="Garden bloom bundle" {...register('name')} />
        <FormMessage>{errors.name?.message}</FormMessage>
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          placeholder="Seasonal stems curated for same-day delivery."
          {...register('description')}
        />
        <FormMessage>{errors.description?.message}</FormMessage>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="price">Price</Label>
          <Input id="price" type="number" step="0.01" {...register('price', { valueAsNumber: true })} />
          <FormMessage>{errors.price?.message}</FormMessage>
        </div>
        <div>
          <Label htmlFor="stock">Stock</Label>
          <Input id="stock" type="number" {...register('stock', { valueAsNumber: true })} />
          <FormMessage>{errors.stock?.message}</FormMessage>
        </div>
      </div>
      <Button type="submit" isLoading={isLoading}>
        {submitLabel}
      </Button>
    </form>
  );
}

