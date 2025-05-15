'use client';

import KBar from '@/components/kbar';
import AppSidebar from '@/components/layout/app-sidebar';
import Header from '@/components/layout/header';
import { SidebarInset, useSidebar } from '@/components/ui/sidebar';

export default function WrapperLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const { open, setOpen } = useSidebar();

  return (
    <KBar>
      <div className='relative'>
        {open && (
          <div
            className='fixed inset-0 z-40 bg-black/50'
            onClick={() => setOpen(false)}
          />
        )}
        <div className='fixed inset-y-0 z-50 h-full'>
          <AppSidebar />
        </div>
        <SidebarInset>
          <Header />
          <main>{children}</main>
        </SidebarInset>
      </div>
    </KBar>
  );
}
