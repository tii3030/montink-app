import PageContainer from '@/components/layout/page-container';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardFooter
} from '@/components/ui/card';
import { IconTrendingDown, IconTrendingUp } from '@tabler/icons-react';
import React from 'react';
import Image from 'next/image';

export default function OverViewLayout({
  sales,
  pie_stats,
  bar_stats,
  area_stats
}: {
  sales: React.ReactNode;
  pie_stats: React.ReactNode;
  bar_stats: React.ReactNode;
  area_stats: React.ReactNode;
}) {
  return (
    <PageContainer>
      <div className='flex flex-1 flex-row space-x-2'>
        <div className='flex flex-1 flex-row'>
          <div className='flex flex-1 flex-col space-x-2'>
            <Card>
              <h1 className='text-3xl font-bold tracking-tight'>
                One Life Graphic T-shirt
              </h1>
            </Card>
            <Card>
              <h1 className='text-3xl font-bold tracking-tight'>
                One Life Graphic T-shirt
              </h1>
            </Card>
            <Card>
              <h1 className='text-3xl font-bold tracking-tight'>
                One Life Graphic T-shirt
              </h1>
            </Card>
          </div>
          <div className='flex-2'>
            <Card>
              <Image
                src={'https://github.com/tii3030/montink-app/image_1.png'}
                alt={'Image product'}
                fill
                className='rounded-lg'
              />
            </Card>
          </div>
        </div>

        <div className='flex-1'>
          <Card className='p-6'>
            <h1 className='text-3xl font-bold tracking-tight'>
              One Life Graphic T-shirt
            </h1>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
}
