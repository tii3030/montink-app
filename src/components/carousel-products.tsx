'use client';

import { useRouter } from 'next/navigation';
import { DiscountBadge } from '@/components/discountBadge';
import { MOCK_PRODUCTS } from '@/constants/mock-products';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from './ui/card';
import { Product } from '@/constants/data';
import { v4 as uuidv4 } from 'uuid';

export default function CarouselProducts() {
  const router = useRouter();

  return (
    <div className='*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs md:grid-cols-2 lg:grid-cols-4'>
      {MOCK_PRODUCTS.map((item: Product, index: number) => (
        <Card
          key={uuidv4()}
          className='@container/card cursor-pointer'
          onClick={() => router.push(`/products/overview/${item.id}`)}
        >
          <CardHeader>
            <CardTitle className='text-4xl font-semibold tabular-nums @[250px]/card:text-3xl'>
              {item.name}
            </CardTitle>
            <CardDescription>{item.description}</CardDescription>
            <CardAction>
              <DiscountBadge
                currentPrice={item.price}
                oldPrice={item.old_price}
              />
            </CardAction>
          </CardHeader>
          <CardContent></CardContent>
          <CardFooter className='flex-col items-start gap-1.5 text-sm'></CardFooter>
        </Card>
      ))}
    </div>
  );
}
