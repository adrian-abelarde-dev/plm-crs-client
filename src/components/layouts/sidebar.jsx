'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
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
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { SessionLinks } from './student-navbar';

function SidebarButton({ icon, text, onClick, path, className, subContent }) {
  const pathname = usePathname();

  return (
    <>
      {subContent ? (
        <>
          <Collapsible className='w-full'>
            <CollapsibleTrigger className='w-full justify-center'>
              <CustomLinks
                pathname={pathname}
                path={path}
                className={className}
                onClick={onClick}
                icon={icon}
                text={text}
              />
            </CollapsibleTrigger>
            <CollapsibleContent className='flex flex-row justify-center'>
              <Separator className='h-100 w-[0.20rem] mt-1 ml-6 max-md:hidden' />
              <div className='w-full'>
                {subContent.map((content, index) => {
                  return (
                    <Link
                      className='flex w-100 justify-center'
                      key={index}
                      href={content.path}
                    >
                      <CustomLinks
                        pathname={pathname}
                        path={content.path}
                        className={'ml-[1.26rem] my-1 max-md:ml-0'}
                        onClick={onClick}
                        icon={content.icon}
                        text={content.text}
                        activeState={true}
                      />
                    </Link>
                  );
                })}
              </div>
            </CollapsibleContent>
          </Collapsible>
        </>
      ) : (
        <>
          <CustomLinks
            pathname={pathname}
            path={path}
            className={className}
            onClick={onClick}
            icon={icon}
            text={text}
            activeState={true}
          />
        </>
      )}
    </>
  );
}

export function CustomLinks({
  pathname,
  path,
  className,
  onClick,
  icon,
  text,
  activeState = false, // defines if the button has active state or not --> default is false
}) {
  return (
    <Button
      className={cn(
        `flex h-fit justify-center rounded-sm px-2 py-2 text-left md:w-full md:justify-start md:px-4 md:py-2 hover:bg-zinc-100`,
        pathname.includes(path) &&
          activeState &&
          'bg-yellow-400 hover:bg-yellow-500',
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

export function Sidebar({ sidebarLinks, accessType }) {
  // session data to dynamically display name
  const { data: session } = useSession();

  function formatName(fullName) {
    // Split the full name into parts
    const parts = fullName.split(', ');

    // Handle names without middle initials
    if (parts.length === 1) {
      return capitalizeFirstLetter(parts[0]);
    }

    // Extract the first name, middle initial, and last name
    const [lastName, firstAndMiddle] = parts;
    const [firstName, middleInitial] = firstAndMiddle.split(' ');

    // Build the formatted name without the middle initial
    const formattedName = `${capitalizeFirstLetter(firstName)} ${
      middleInitial ? capitalizeFirstLetter(middleInitial) : ''
    } ${capitalizeFirstLetter(lastName)}`;

    return formattedName.trim();
  }

  // Helper function to capitalize the first letter of a word
  function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

  const sidebarButtonsContent = sidebarLinks.map((button, index) => {
    return (
      <Link
        className='flex w-full justify-center'
        key={index}
        href={button.subContent ? '' : button.path}
      >
        <SidebarButton
          icon={button.icon}
          text={button.text}
          path={button.path}
          subContent={button.subContent}
        />
      </Link>
    );
  });

  return (
    <aside className='h-screen w-fit outline outline-1 outline-gray-200 md:w-52'>
      <Container className='flex h-full flex-col justify-between px-2 py-10 gap-10 md:px-4'>
        <div className='flex flex-col gap-6'>
          {/* Made Image have responsive width */}
          <Image
            src='/plm-logo.png'
            alt='PLM Logo'
            width={0}
            height={0}
            sizes='100vw'
            className='h-auto w-8 md:w-12'
          />
          <Separator />
          <div className='flex flex-col gap-1'>{sidebarButtonsContent}</div>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Card className='hidden md:block rounded-md text-left'>
              <CardHeader className='p-4'>
                <CardTitle>{formatName(session.user.name)}</CardTitle>
                <CardDescription className='p-0 m-0 leading-3'>
                  {accessType}
                </CardDescription>
              </CardHeader>
            </Card>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <SessionLinks /> {/* Portal */}
            <DropdownMenuItem
              className='flex justify-between items-center cursor-pointer text-red-500'
              onClick={() => {
                signOut();
              }}
            >
              Sign Out <LogOut className='h-4 w-4 text-red-500' />
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
