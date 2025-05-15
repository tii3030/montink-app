import { CheckIcon, TruckIcon, ShieldCheckIcon, Undo2Icon } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Card } from './ui/card';
import CepSearchInput from './cep-search-input';

export function ProductCheckout() {
  return (
    <div className='flex min-w-[362px] flex-1'>
      <Card className='h-full w-full p-6 lg:p-10'>
        {/* Entrega */}
        <CepSearchInput />
        <div>
          <div className='mb-1 flex items-center gap-2 text-green-600'>
            <TruckIcon className='h-5 w-5' />
            <p className='font-medium'>Chegará grátis sexta-feira</p>
          </div>
        </div>

        {/* Vendedor */}
        <div className='mb-4'>
          <div className='mb-1 flex items-center gap-2'>
            <Badge variant='outline' className='text-xs'>
              Montink
            </Badge>
            <span className='text-xs text-gray-500'>+500mil vendas</span>
          </div>
        </div>

        {/* Botões */}
        <div className='mb-6 flex flex-col gap-2'>
          <Button className='h-12 bg-blue-600 hover:bg-blue-700'>
            Comprar agora
          </Button>
          <Button variant='outline' className='h-12'>
            Adicionar ao carrinho
          </Button>
        </div>

        <Separator className='my-4' />

        {/* Benefícios */}
        <div className='space-y-3'>
          <div className='flex items-start gap-3'>
            <Undo2Icon className='mt-0.5 h-5 w-5 flex-shrink-0 text-gray-500' />
            <div>
              <p className='font-medium'>Devolução grátis.</p>
              <p className='text-sm text-gray-600'>
                Você tem 30 dias a partir da data de recebimento.
              </p>
            </div>
          </div>

          <div className='flex items-start gap-3'>
            <ShieldCheckIcon className='mt-0.5 h-5 w-5 flex-shrink-0 text-gray-500' />
            <div>
              <p className='font-medium'>Compra Garantida</p>
              <p className='text-sm text-gray-600'>
                Receba o produto que está esperando ou devolvemos o dinheiro.
              </p>
            </div>
          </div>

          <div className='flex items-start gap-3'>
            <CheckIcon className='mt-0.5 h-5 w-5 flex-shrink-0 text-gray-500' />
            <div>
              <p className='font-medium'>12 meses de garantia de fábrica.</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
