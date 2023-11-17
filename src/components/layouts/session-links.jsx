import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { CaretSortIcon } from '@radix-ui/react-icons';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { Button } from '../ui/button';

export function SessionLinks() {
  // session
  const { data: session, status } = useSession();
  const currentPage = usePathname();

  if (status === 'authenticated') {
    // minus 1 since you are already logged in as one role
    if (session.role.length - 1 <= 2) {
      return (
        <>
          {session?.role.map((role, index) => {
            if (!currentPage.includes(role)) {
              // check if path is not the same as access role, to remove role on display
              return (
                <DropdownMenuItem key={index} asChild>
                  <Link href={role}>
                    {/* Displays 'Login as {role}' */}
                    Login as{' '}
                    {role
                      .replace('-', ' ')
                      .replace(/\w\S*/g, (w) =>
                        w.replace(/^\w/, (c) => c.toUpperCase()),
                      )}
                  </Link>
                </DropdownMenuItem>
              );
            }
          })}
        </>
      );
    } else {
      // displays collapsible portal if user has more than 3 roles
      return (
        <Collapsible>
          <CollapsibleTrigger className='w-full' asChild>
            <Button
              variant='ghost'
              className='p-0 m-0 w-full flex flex-row justify-between px-2'
            >
              Portal
              <CaretSortIcon />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            {session?.role.map((role, index) => {
              if (!currentPage.includes(role)) {
                // check if path is not the same as access role, to remove role on display
                return (
                  <DropdownMenuItem key={index}>
                    <Link href={role}>
                      {/* Displays 'Login as {role}' */}
                      Login as{' '}
                      {role
                        .replace('-', ' ')
                        .replace(/\w\S*/g, (w) =>
                          w.replace(/^\w/, (c) => c.toUpperCase()),
                        )}
                    </Link>
                  </DropdownMenuItem>
                );
              }
            })}
          </CollapsibleContent>
        </Collapsible>
      );
    }
  }

  return null;
}
