'use client';

import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { DiscountBadge } from '@/components/discountBadge';
import { MOCK_PRODUCTS } from '@/constants/mock-products';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from './ui/card';
import { Product } from '@/types/products';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import Image from 'next/image';

type UnsplashImage = {
  id: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  alt_description: string | null;
};

export default function CarouselProducts({
  images
}: {
  images: UnsplashImage[];
}) {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount =
        direction === 'left' ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className='relative w-full'>
      {/* Controles de navegação */}
      <div className='absolute top-1/2 -left-4 z-10 hidden -translate-y-1/2 md:block'>
        <Button
          variant='outline'
          size='icon'
          onClick={() => scroll('left')}
          className='bg-background/50 rounded-full backdrop-blur-sm'
        >
          <ChevronLeft className='h-4 w-4' />
        </Button>
      </div>

      <div className='absolute top-1/2 -right-4 z-10 hidden -translate-y-1/2 md:block'>
        <Button
          variant='outline'
          size='icon'
          onClick={() => scroll('right')}
          className='bg-background/50 rounded-full backdrop-blur-sm'
        >
          <ChevronRight className='h-4 w-4' />
        </Button>
      </div>

      {/* Carrossel */}
      <div
        ref={scrollRef}
        className='scrollbar-none flex w-full snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth py-4'
      >
        {MOCK_PRODUCTS.map((item: Product, index: number) => (
          <div
            key={item.id}
            className='flex min-w-[300px] snap-start snap-always md:min-w-[350px]'
          >
            <Card
              className='flex h-full w-full cursor-pointer flex-col overflow-hidden pt-0 transition-all hover:shadow-lg'
              onClick={() => router.push(`/products/overview/${item.id}`)}
            >
              <div className='bg-muted relative aspect-video w-full'>
                <Image
                  fill
                  src={images[0].urls.regular}
                  alt={images[0].alt_description || 'Product Image'}
                  className='object-cover'
                />
              </div>
              <CardHeader>
                <CardTitle className='line-clamp-1 text-lg font-semibold'>
                  {item.name}
                </CardTitle>
                <CardDescription className='line-clamp-2'>
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardContent className='flex-1'>
                <div className='flex items-end justify-between'>
                  <div className='space-y-1'>
                    <p className='text-2xl font-bold'>R${item.price}</p>
                    {item.old_price && (
                      <p className='text-muted-foreground text-sm line-through'>
                        R${item.old_price}
                      </p>
                    )}
                  </div>
                  <CardAction>
                    <DiscountBadge
                      currentPrice={item.price}
                      oldPrice={item.old_price}
                    />
                  </CardAction>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
