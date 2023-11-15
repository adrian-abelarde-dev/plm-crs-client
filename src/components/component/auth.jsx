'use client';

import { Loader2 } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';
import { redirect, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useIdleTimer } from 'react-idle-timer';

function AuthProvider({ children, accessType, accessLevel }) {
  const pathname = usePathname();
  const { data: session, status } = useSession();

  useIdleTimer({
    onIdle: onUserIdle,
    timeout: 30 * 60 * 1000, // 30 minutes in milliseconds
    throttle: 500,
  });

  function onUserIdle() {
    signOut();
  }

  // ? status can be 'loading', 'authenticated' or 'unauthenticated'
  useEffect(() => {
    // ? Authenticated
    if (status === 'authenticated') {
      // ? Redirect to portal if user is already logged in and has multiple roles
      if (pathname.includes('/login') && session?.role.length > 1) {
        redirect('/portal');
      }

      // ? Redirect to role page if user is already logged in and has only one role
      if (session?.role.length === 1 && pathname.includes('/login')) {
        redirect(`/${session?.role[0]}`);
      }

      // ? Redirect to portal if user accessing a route that is not allowed for their role
      if (
        accessLevel === 'private' &&
        !session?.role.includes(accessType) &&
        !pathname.includes('portal')
      ) {
        redirect('/portal');
      }

      // ? Unauthenticated
    } else if (status === 'unauthenticated' && accessLevel === 'private') {
      redirect('/login');
    }
  }, [status, accessLevel, accessType, pathname, session?.role]);

  if (status === 'loading') {
    return (
      <main className='w-full h-screen flex justify-center items-center'>
        <Loader2 className='w-10 h-10 animate-spin' />
      </main>
    );
  }

  return children;
}

export default AuthProvider;
