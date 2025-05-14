import { Card } from './ui/card';
import { ColorSelector } from './colorSelector';
import CepSearchInput from './cep-search-input';
import { SizeSelector } from './sizeSelector';
import Rating from './rating';
import { DiscountBadge } from './discountBadge';
import { Product } from '@/constants/data';

type InfoProps = {
  product: Product;
};

export function ProductInfo({ product }: InfoProps) {
  return (
    <div className='flex flex-1'>
      <Card className='h-full w-full p-6 lg:p-10'>
        <h1 className='text-3xl font-bold tracking-tight'>{product.name}</h1>
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
        <hr className='my-2 border-t border-gray-200' />
        <ColorSelector colors={product.colors} />
        <hr className='my-2 border-t border-gray-200' />
        <SizeSelector sizes={product.sizes} />
        <hr className='my-2 border-t border-gray-200' />
        <CepSearchInput />
      </Card>
    </div>
  );
}
