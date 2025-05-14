import { Card } from './ui/card';
import { ColorSelector } from './colorSelector';
import CepSearchInput from './cep-search-input';
import { SizeSelector } from './sizeSelector';
import Rating from './rating';
import { DiscountBadge } from './discountBadge';
import { Product } from '@/constants/data';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

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
        <span className='mb-0 text-sm text-green-600'>Estoque disponível</span>
        {/* <span className='text-sm text-red-600 mt-0'>Estoque indisponível</span> */}

        <hr className='my-2 border-t border-gray-200' />
        <ColorSelector colors={product.colors} />
        <hr className='my-2 border-t border-gray-200' />
        <SizeSelector sizes={product.sizes} />
        <hr className='my-2 border-t border-gray-200' />
        {/* Quantidade */}
        <div className='mb-4'>
          <p className='text-sm text-gray-600'>
            Você pode comprar até{' '}
            <span className='font-medium'>2 unidades.</span>
          </p>
          <label className='text-sm font-medium'>Selecione a quantidade:</label>
          <Select>
            <SelectTrigger className='mt-3 rounded border p-2'>
              <SelectValue placeholder='Selecione...' />
            </SelectTrigger>

            <SelectContent className='rounded border bg-white shadow-lg'>
              <SelectItem value='op1' className='p-2 hover:bg-gray-100'>
                1
              </SelectItem>
              <SelectItem value='op2' className='p-2 hover:bg-gray-100'>
                2
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>
    </div>
  );
}
