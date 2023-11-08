'use client';

import { MicrosoftButton } from '@/components/component/microsoft-button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { signIn } from 'next-auth/react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='w-full h-screen relative'>
      <Container className='relative h-screen flex justify-center items-center'>
        <Card className='shadow-2xl w-full max-w-sm'>
          <CardHeader>
            <section className='flex flex-col gap-2 items-center text-center'>
              <Image
                src='/plm-logo.png'
                alt='Pamantasan ng Lungsod ng Maynila'
                width='0'
                height='0'
                sizes='100vw'
                className='h-auto w-10 rounded-t-lg mb-2'
              />
              <section className='w-full flex flex-col items-center'>
                <CardTitle className='max-w-2xl'>
                  Pamantasan ng Lungsod ng Maynila
                </CardTitle>
                <CardDescription className='text-zinc-400'>
                  University of the City of Manila
                </CardDescription>
              </section>
            </section>
          </CardHeader>
          <CardContent>
            <h1 className='text-sm text-center mb-2 text-zinc-400'>
              Log in using Single Sign-On (SSO)
            </h1>
            <MicrosoftButton
              className='w-full'
              microsoftSignIn={() => {
                signIn();
              }}
            />
          </CardContent>
          <CardFooter className='w-full flex justify-center'>
            <p className='text-sm text-center w-80 text-zinc-400'>
              For more inquiries or concerns, please email{' '}
              <a className='underline' href='mailto:ithelp@plm.edu.ph'>
                ithelp@plm.edu.ph
              </a>
            </p>
          </CardFooter>
        </Card>

        <h1 className='absolute bottom-0 text-sm mb-2 text-zinc-200'>
          All Rights Reserved 2023 ©
        </h1>
      </Container>
      <Image
        fill
        className='-z-10 blur-sm opacity-50 brightness-50 object-cover'
        src='/plm-building.jpg'
        alt='Pamantasan ng Lungsod ng Maynila'
      />
    </main>
  );
}
