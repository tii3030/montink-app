'use client';

import PageContainer from '@/components/layout/page-container';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { IconAlertCircle } from '@tabler/icons-react';

export default function OverviewError() {
  return (
    <PageContainer>
      <Alert variant='destructive'>
        <IconAlertCircle className='h-4 w-4' />
        <AlertTitle>Produto não encontrado</AlertTitle>
        <AlertDescription>Ops... não encontramos esse :(</AlertDescription>
      </Alert>
    </PageContainer>
  );
}
