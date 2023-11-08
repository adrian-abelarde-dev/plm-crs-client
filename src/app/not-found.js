import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <main className='h-screen w-full'>
      <Container className='w-full h-full flex flex-col justify-center items-center relative'>
        <Image
          src='/plm-logo.png'
          alt='404'
          width={0}
          height={0}
          sizes='100vw'
          className='h-auto w-10 rounded-t-lg mb-6'
        />
        <h1 className='text-lg font-semibold mb-4'>
          Oops! Looks like you&apos;re lost!
        </h1>
        <p className='text-sm text-zinc-400 w-[500px] text-center mb-10'>
          It seems like the page you&apos;re looking for doesn&apos;t exist.
          Head back to the home page and we&apos;ll get you back on track.
        </p>
        <Button variant='link'>
          <Link href='/login'>Go to Log In</Link>
        </Button>
        <h1 className='-z-10 fixed -bottom-56 text-[400px] opacity-5 font-black transition-all duration-300 ease-in-out'>
          404
        </h1>
      </Container>
    </main>
  );
}
