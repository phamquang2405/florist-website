import { NextResponse } from 'next/server';

import { itemInputSchema } from '@/features/items/schemas/item-schema';
import { auth } from '@/lib/auth/auth';
import { logger } from '@/lib/logger';
import { itemService } from '@/lib/services/item.service';

export async function GET() {
  const session = await auth();

  if (!session) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const items = itemService.list();
  return NextResponse.json(items, {
    headers: {
      'Cache-Control': 'no-store'
    }
  });
}

export async function POST(request: Request) {
  const session = await auth();

  if (!session) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const json = await request.json();
    const payload = itemInputSchema.parse(json);
    const item = itemService.create(payload);

    logger.info('Created item', { id: item.id, email: session.user?.email });

    return NextResponse.json(item, { status: 201 });
  } catch (error) {
    logger.error('Failed to create item', error);

    return NextResponse.json(
      {
        message: 'Invalid request payload'
      },
      { status: 400 }
    );
  }
}

