import { cookies } from 'next/headers';
import { SidebarProvider } from '@/components/ui/sidebar';
import WrapperLayout from './wrapper-layout';

export default async function OverviewLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const defaultOpen =
    (await cookieStore).get('sidebar_state')?.value === 'true';

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <WrapperLayout>{children}</WrapperLayout>
    </SidebarProvider>
  );
}
