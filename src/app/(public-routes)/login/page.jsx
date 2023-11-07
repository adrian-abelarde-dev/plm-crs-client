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
        <>
            {/* if user is already logged in */}
            {session ? (
                <>
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
                </>
            ) : (
                <>
                    <MicrosoftButton
                        microsoftSignIn={() => {
                            console.log('logging in?');
                            signIn();
                        }}
                    />
                </>
            )}
        </>
    );
}
