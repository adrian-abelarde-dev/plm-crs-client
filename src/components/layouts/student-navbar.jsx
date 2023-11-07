'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import PLMLogo from '../../assets/plm-logo.png';
import { linksStudents } from '../../lib/constants/links-data';

import NotificationBell from "./notification-bell";

const StudentNavbar = () => {
    const currentPage = usePathname();

    return (
        <>
            <div className='flex h-16 w-screen place-items-center justify-between pt-[2.25rem]'>
                <div className='pl-[2.25rem]'>
                    {/* 50px = 3.125rem */}
                    <Image
                        src={PLMLogo}
                        width={50}
                        height={50}
                        alt='PLM Logo'
                    />
                </div>

                {/* loop over linksStudents */}
                <div className='flex justify-between '>
                    {linksStudents.map((link, index) => {
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
        <div className="pr-[2.25rem]">
          <NotificationBell />
        </div>
      </div>
    </>
  );
};

export default StudentNavbar;
