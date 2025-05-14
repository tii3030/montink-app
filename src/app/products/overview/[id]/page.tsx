import PageContainer from '@/components/layout/page-container';
import { Card } from '@/components/ui/card';
import React from 'react';
import Rating from '@/components/rating';
import { ColorSelector } from '@/components/colorSelector';
import { SizeSelector } from '@/components/sizeSelector';
import { DiscountBadge } from '@/components/discountBadge';
import { MOCK_PRODUCTS } from '@/constants/mock-products';
import OverviewError from './error';
import CepSearchInput from '@/components/cep-search-input';
import ImageScroller from '@/components/image-scroller';
import CarouselProducts from '@/components/carousel-products';

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const productId = parseInt(id, 10);
  const product = MOCK_PRODUCTS.find((prod) => prod.id === productId);

  if (!product) {
    return <OverviewError />;
  }

  async function getImagesFromUnsplash(query: string) {
    const accessKey = process.env.UNSPLASH_ACCESS_KEY;
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=${query}&per_page=6`,
      {
        headers: {
          Authorization: `Client-ID ${accessKey}`
        },
        next: { revalidate: 3600 } // CACHE 1H
      }
    );

    const data = await res.json();
    return data.results;
  }

  const images = await getImagesFromUnsplash(product.query);

  return (
    <PageContainer>
      <div className='relative flex flex-1 flex-col space-y-2'>
        <div className='flex flex-1 flex-col space-y-2 lg:flex-row lg:space-y-0 lg:space-x-2'>
          {/* IMAGES CONTAINER E MAIN IMAGE */}
          <ImageScroller images={images} />

          {/* PRODUCT INFO CONTAINER */}
          <div className='flex flex-1'>
            <Card className='h-full w-full p-6'>
              <h1 className='text-3xl font-bold tracking-tight'>
                {product.name}
              </h1>
              <Rating value={4} />
              <div className='flex flex-row items-center space-x-3'>
                <span className='text-2xl font-bold tracking-tight'>
                  R${product.price}
                </span>
                <span className='font-bol text-muted-foreground text-2xl tracking-tight line-through'>
                  R${product.old_price}
                </span>
                <DiscountBadge
                  currentPrice={product.price}
                  oldPrice={product.old_price}
                />
              </div>
              <div>
                <p>{product.description}.</p>
              </div>
              <hr className='my-4 border-t border-gray-200' />
              <ColorSelector colors={product.colors} />
              <hr className='my-4 border-t border-gray-200' />
              <SizeSelector sizes={product.sizes} />
              <hr className='my-4 border-t border-gray-200' />
              <CepSearchInput />
            </Card>
          </div>
        </div>

        {/* CAROUSEL MORE PRODUCTS */}
        <CarouselProducts />
      </div>
    </PageContainer>
  );
}
