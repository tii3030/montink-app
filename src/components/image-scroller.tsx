'use client';

import { useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import {
  IconChevronLeft,
  IconChevronRight,
  IconChevronUp,
  IconChevronDown
} from '@tabler/icons-react';
import { cn } from '@/lib/utils';

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

export default function ImageScroller({ images }: { images: UnsplashImage[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<UnsplashImage>(images[0]);

  const scroll = (offset: number, isHorizontal: boolean) => {
    if (!scrollRef.current) return;
    if (isHorizontal) {
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    } else {
      scrollRef.current.scrollBy({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <div className='flex flex-2 flex-col lg:flex-row lg:space-x-1'>
      {/* CAROUSEL IMAGES */}
      <div className='relative order-2 flex flex-1 lg:order-1'>
        {/* Botões MOBILE — esquerda e direita */}
        <div className='absolute inset-y-0 left-4 z-10 flex items-center px-1 lg:hidden'>
          <button
            onClick={() => scroll(-200, true)}
            className='rounded-full border p-1 shadow'
          >
            <IconChevronLeft size={24} />
          </button>
        </div>
        <div className='absolute inset-y-0 right-4 z-10 flex items-center px-1 lg:hidden'>
          <button
            onClick={() => scroll(200, true)}
            className='rounded-full border p-1 shadow'
          >
            <IconChevronRight size={24} />
          </button>
        </div>

        {/* Botões DESKTOP — cima e baixo */}
        <div className='absolute top-5 right-1/2 z-10 hidden translate-x-1/2 flex-col items-center lg:flex'>
          <button
            onClick={() => scroll(-200, false)}
            className='rounded-full border p-1 shadow'
          >
            <IconChevronUp size={20} />
          </button>
        </div>
        <div className='absolute right-1/2 bottom-5 z-10 hidden translate-x-1/2 flex-col items-center lg:flex'>
          <button
            onClick={() => scroll(200, false)}
            className='rounded-full border p-1 shadow'
          >
            <IconChevronDown size={20} />
          </button>
        </div>

        <div
          ref={scrollRef}
          className='scrollbar-none flex flex-1 flex-row flex-nowrap space-x-2 overflow-y-auto rounded-xl pr-1 lg:flex-col lg:space-y-2 lg:space-x-0'
        >
          {images.map((img: UnsplashImage) => (
            <Card
              key={uuidv4()}
              onClick={() => setSelectedImage(img)}
              className={cn(
                'relative aspect-square max-h-full min-h-36 max-w-full min-w-36 flex-1 cursor-pointer overflow-hidden',
                selectedImage.urls.regular === img.urls.regular && 'shadow-2xs'
              )}
            >
              <Image
                key={uuidv4()}
                fill
                src={img.urls.regular}
                alt={img.alt_description || 'Product Image'}
                className='object-cover'
              />
            </Card>
          ))}
        </div>
      </div>

      {/* MAIN IMAGE */}
      <div className='order-1 mb-2 flex flex-2 lg:order-2 lg:mb-0'>
        <Card className='relative h-full min-h-96 w-full overflow-hidden'>
          <Image
            fill
            src={selectedImage.urls.regular}
            alt={selectedImage.alt_description || 'Product Image'}
            className='object-cover'
          />
        </Card>
      </div>
    </div>
  );
}
