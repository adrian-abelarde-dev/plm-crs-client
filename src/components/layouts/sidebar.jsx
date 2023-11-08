'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function SidebarButton({ icon, text, onClick, path, className }) {
  const pathname = usePathname();

  return (
    <Button
      className={cn(
        `flex h-fit justify-center rounded-sm px-2 py-2 text-left md:w-full md:justify-start md:px-4 md:py-2 hover:bg-zinc-100`,
        pathname.includes(path) && 'bg-yellow-400 hover:bg-yellow-500',
        className,
      )}
      variant='ghost'
      onClick={onClick}
    >
      {icon ? (
        <div
          className={cn(
            'flex w-full items-center justify-center md:justify-start',
            pathname.includes(path) ? 'text-zinc-950' : 'text-zinc-500',
          )}
        >
          {icon} <span className='hidden font-normal md:inline'>{text}</span>
        </div>
      ) : (
        text
      )}
    </Button>
  );
}

export function Sidebar({ sidebarLinks }) {
  const sidebarButtonsContent = sidebarLinks.map((button, index) => (
    <Link className='flex w-full justify-center' key={index} href={button.path}>
      <SidebarButton icon={button.icon} text={button.text} path={button.path} />
    </Link>
  ));

  return (
    <aside className='h-screen w-fit outline outline-1 outline-gray-200 md:w-52'>
      <Container className='flex h-full flex-col justify-between px-2 py-10 gap-10 md:px-4'>
        <div className='flex flex-col gap-6'>
          <Image src='/plm-logo.png' width={50} height={50} alt='PLM Logo' />
          <Separator />
          <div className='flex flex-col gap-1'>{sidebarButtonsContent}</div>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Card className='hidden md:block rounded-md text-left'>
              <CardHeader className='p-4'>
                <CardTitle>Emmanuel Leyco</CardTitle>
                <CardDescription className='p-0 m-0 leading-3'>
                  Admin
                </CardDescription>
              </CardHeader>
            </Card>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className='flex justify-between items-center'
              onClick={() => {
                signOut();
              }}
            >
              Sign Out <LogOut className='h-4 w-4 text-zinc-400' />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <SidebarButton
          className='md:hidden'
          icon={<LogOut className='h-4 w-4' />}
          text='Log Out'
          onClick={() => {
            signOut();
          }}
        />
      </Container>
    </aside>
  );
}
