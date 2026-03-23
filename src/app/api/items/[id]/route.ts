import { NextResponse } from 'next/server';

import { itemInputSchema } from '@/features/items/schemas/item-schema';
import { auth } from '@/lib/auth/auth';
import { logger } from '@/lib/logger';
import { itemService } from '@/lib/services/item.service';

type RouteContext = {
  params: {
    id: string;
  };
};

export async function GET(_: Request, { params }: RouteContext) {
  const session = await auth();

  if (!session) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const item = itemService.getById(params.id);

  if (!item) {
    return NextResponse.json({ message: 'Item not found' }, { status: 404 });
  }

  return NextResponse.json(item);
}

export async function PATCH(request: Request, { params }: RouteContext) {
  const session = await auth();

  if (!session) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const json = await request.json();
    const payload = itemInputSchema.partial().parse(json);
    const item = itemService.update(params.id, payload);

    if (!item) {
      return NextResponse.json({ message: 'Item not found' }, { status: 404 });
    }

    logger.info('Updated item', { id: params.id, email: session.user?.email });

    return NextResponse.json(item);
  } catch (error) {
    logger.error('Failed to update item', error);

    return NextResponse.json(
      {
        message: 'Invalid request payload'
      },
      { status: 400 }
    );
  }
}

export async function DELETE(_: Request, { params }: RouteContext) {
  const session = await auth();

  if (!session) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const removed = itemService.remove(params.id);

  if (!removed) {
    return NextResponse.json({ message: 'Item not found' }, { status: 404 });
  }

  logger.warn('Deleted item', { id: params.id, email: session.user?.email });

  return new NextResponse(null, { status: 204 });
}

