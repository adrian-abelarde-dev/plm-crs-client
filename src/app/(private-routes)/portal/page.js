'use client';

import Loader from '@/components/component/loader';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LogOut } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

const Portal = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <Loader />;
  }

  console.log({ session });

  return (
    <Container className='py-10'>
      {session && (
        <div>
          <section className='flex w-full gap-2 justify-between'>
            <h1 className='text-2xl'>Portal</h1>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button
                  className='relative flex gap-2 px-2 w-fit h-fit p-4 text-left'
                  variant='outline'
                >
                  <span class='absolute rounded-full h-3 w-3 bg-green-500 animate-ping -top-1 -right-1'></span>
                  <span class='absolute rounded-full h-3 w-3 bg-green-500 -top-1 -right-1'></span>
                  <Image
                    src={session?.user?.image}
                    alt='profile picture'
                    className='rounded-full hidden sm:block'
                    width={40}
                    height={40}
                  />
                  <div className='w-fit'>
                    <p className='break-all'>{session?.user?.name}</p>
                    <p className='break-all text-zinc-400 font-light'>
                      {session?.user?.email}
                    </p>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='w-56'>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className='cursor-pointer flex justify-between gap-2 items-center'
                  onClick={() => signOut()}
                >
                  Sign Out <LogOut className='w-4 h-4 text-zinc-400' />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </section>

          {/* Displaying of available user access */}
          <h1 className='mb-4 text-lg'>Roles</h1>
          <p className='text-zinc-400 text-sm w-[300px] mb-10'>
            These are the roles that you have access to. Click on the role to go
            to the page.
          </p>
          <div className='flex flex-wrap gap-2 max-w-[400px]'>
            {session?.role.map((role) => {
              return (
                <Button className='w-50 h-50' key={role} variant='outline'>
                  <Link href={role}>
                    {/* Replace '-' in role to ' ', then make it sentence case*/}
                    {role
                      .replace('-', ' ')
                      .replace(/\w\S*/g, (w) =>
                        w.replace(/^\w/, (c) => c.toUpperCase()),
                      )}
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>
      )}
    </Container>
  );
};

export default Portal;
