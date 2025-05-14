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
import { ProductCheckout } from '@/components/side-action-product';
import { ProductInfo } from '@/components/info-product';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: ProductPageProps) {
  const { id } = await params;
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
    <PageContainer scrollable>
      <div className='relative flex w-full flex-col space-y-2 overflow-hidden lg:mx-10 lg:flex-1'>
        <div className='flex flex-1 flex-col space-y-2 lg:max-h-[785px] lg:flex-row lg:space-y-0 lg:space-x-2'>
          {/* IMAGES CONTAINER E MAIN IMAGE */}
          <ImageScroller images={images} />

          {/* PRODUCT INFO CONTAINER */}
          <ProductInfo product={product} />

          {/* ADD TO CART CONTAINER */}
          <ProductCheckout />
        </div>

        {/* CAROUSEL MORE PRODUCTS */}
        <div className='flex flex-1'>
          <CarouselProducts />
        </div>
      </div>
    </PageContainer>
  );
}
