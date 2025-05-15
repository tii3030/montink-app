import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function PageContainer({
  children,
  scrollable = true
}: {
  children: React.ReactNode;
  scrollable?: boolean;
}) {
  return (
    <>
      {scrollable ? (
        <ScrollArea className='h-[calc(100dvh-52px)] w-full overflow-x-hidden'>
          <div className='flex w-full max-w-[100vw] flex-1 px-10 md:px-20 lg:px-36'>
            {children}
          </div>
        </ScrollArea>
      ) : (
        <div className='flex w-full max-w-[100vw] flex-1'>{children}</div>
      )}
    </>
  );
}
