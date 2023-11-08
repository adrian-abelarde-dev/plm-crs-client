'use client';

import Loader from '@/components/component/loader';
import { Button } from '@/components/ui/button';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

const Portal = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <Loader />;
  }

  return (
    <main>
      Portal
      {session && (
        <div>
          <Image
            src={session?.user?.image}
            alt='profile picture'
            width={40}
            height={40}
          />
          <p>Signed in as {session?.user?.email}</p>
          <Button onClick={() => signOut()}>Sign out</Button>
          {/* Displaying of available user access */}
          <div className='flex flex-col'>
            {session?.role.map((role, index) => {
              return (
                <Link key={index} href={role}>
                  {role}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </main>
  );
};

export default Portal;
