'use client';

import { MicrosoftButton } from '@/components/component/microsoft-button';
import { Button } from '@/components/ui/button';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const { data: session, status } = useSession();

  console.log(session?.role);

  return (
    <MicrosoftButton
      microsoftSignIn={() => {
        console.log('logging in?');
        signIn();
      }}
    />
  );
}
