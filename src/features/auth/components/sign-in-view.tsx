import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { SignIn as ClerkSignInForm } from '@clerk/nextjs';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { IconStar } from '@tabler/icons-react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.'
};

export default function SignInViewPage({ stars }: { stars: number }) {
  return (
    <div className='relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
      <Link
        href='/examples/authentication'
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute top-4 right-4 hidden md:top-8 md:right-8'
        )}
      >
        Login
      </Link>
      <div className="relative hidden h-full w-full flex-col bg-[url('/assets/bg-img.png')] bg-contain bg-center p-10 text-white lg:flex dark:border-r">
        <div className='absolute inset-0 bg-black/50' />
        <div className='relative z-20 flex items-center text-lg font-medium'>
          <Image
            width={200}
            height={200}
            src={'/assets/logo-white.png'}
            alt={'Logo'}
            className='object-cover'
          />
        </div>
        <div className='relative z-20 mt-auto'>
          <blockquote className='space-y-2'>
            <p className='text-lg'>
              &ldquo;Este é um template desenvolvido por mim para iniciar
              projetos ReactJs + NextJs.&rdquo;
            </p>
            <footer className='text-sm'>&ldquo;Tiago Pereira&rdquo;</footer>
          </blockquote>
        </div>
      </div>
      <div className='flex h-full items-center justify-center p-4 lg:p-8'>
        <div className='flex w-full max-w-md flex-col items-center justify-center space-y-6'>
          {/* github link  */}
          <Link
            className={cn('group inline-flex hover:text-yellow-200')}
            target='_blank'
            href={'https://github.com/tii3030/montink-app'}
          >
            <div className='flex items-center'>
              <GitHubLogoIcon className='size-4' />
              <span className='ml-1 inline'>Avaliações no GitHub</span>{' '}
            </div>
            <div className='ml-2 flex items-center gap-1 text-sm md:flex'>
              <IconStar
                className='size-4 text-gray-500 transition-all duration-300 group-hover:text-yellow-300'
                fill='currentColor'
              />
              <span className='font-display font-medium'>{stars}</span>
            </div>
          </Link>
          <ClerkSignInForm />

          <p className='text-muted-foreground px-8 text-center text-sm'>
            Ao clicar em continuar, você concorda com nossos{' '}
            <Link
              href='/terms'
              className='hover:text-primary underline underline-offset-4'
            >
              Termos de Serviços
            </Link>{' '}
            e{' '}
            <Link
              href='/privacy'
              className='hover:text-primary underline underline-offset-4'
            >
              Políticas de Privacidade.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
