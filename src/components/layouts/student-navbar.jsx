'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { redirect, usePathname } from 'next/navigation';
import React from 'react';

import PLMLogo from '../../assets/plm-logo.png';
import NotificationBell from './notification-bell';

const StudentNavbar = ({ linksStudents }) => {
  const currentPage = usePathname();
  // session
  const { data: session, status } = useSession();

  return (
    <>
      <div className='flex h-16 w-screen place-items-center justify-between pt-[2.25rem]'>
        <div className='pl-[2.25rem]'>
          {/* 50px = 3.125rem */}
          <Image src={PLMLogo} width={50} height={50} alt='PLM Logo' />
        </div>

        {/* loop over linksStudents */}
        <div className='flex justify-between '>
          {linksStudents.map((link, index) => {
            // if link has sublinks, return dropdown
            if (link.subLinks) {
              return (
                <DropdownMenu key={index}>
                  <DropdownMenuTrigger
                    className={cn(
                      'mx-2 rounded-full px-5 py-2 text-black outline outline-1 outline-transparent transition-all duration-200 ease-in-out hover:outline-zinc-200 flex flex-row justify-between',
                      currentPage.includes(link.path) &&
                        'bg-yellow-400 font-bold hover:bg-yellow-500 hover:outline-transparent',
                    )}
                  >
                    {link.label}
                    <ChevronDown className='h-4 w-4 text-zinc-600 mt-1 ml-2' />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {link.subLinks.map((subLink, index) => {
                      return <SubLinksContent subLink={subLink} key={index} />;
                    })}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            }

            // else return link
            return (
              <Link
                key={index}
                // added conditional for active link
                className={cn(
                  'mx-2 rounded-full px-5 py-2 text-black outline outline-1 outline-transparent transition-all duration-200 ease-in-out hover:outline-zinc-200',
                  currentPage.includes(link.path) &&
                    'bg-yellow-400 font-bold hover:bg-yellow-500 hover:outline-transparent',
                )}
                href={link.path}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Create popup for bell */}
        <div className='pr-[2.25rem]'>
          <NotificationBell />
        </div>
      </div>
    </>
  );
};

const SubLinksContent = ({ subLink, key }) => {
  if (subLink.label === 'Sign out') {
    return (
      <DropdownMenuItem key={key} className='cursor-pointer'>
        <a
          onClick={() => {
            signOut();
            redirect('/login');
          }}
        >
          {subLink.label}
        </a>
      </DropdownMenuItem>
    );
  }

  if (subLink.label === 'Change Password') {
    return (
      <DropdownMenuItem key={key}>
        <Link href={subLink.path} target='_blank'>
          {subLink.label}
        </Link>
      </DropdownMenuItem>
    );
  }

  // return normal sublink with path, in case sublinks has other links
  return (
    <DropdownMenuItem key={key}>
      <Link href={subLink.path}>{subLink.label}</Link>
    </DropdownMenuItem>
  );
};

export default StudentNavbar;
