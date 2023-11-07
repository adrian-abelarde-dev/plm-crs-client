'use client';

import { Loader2 } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { redirect, usePathname } from 'next/navigation';
import { useEffect } from 'react';

const AuthProvider = ({ children, accessType, accessLevel }) => {
    const pathname = usePathname();

    const { data: session, status } = useSession();
    // ? status can be 'loading', 'authenticated' or 'unauthenticated'
    console.log(pathname.includes('/login'));
    useEffect(() => {
        if (status === 'authenticated') {
            if (accessLevel === 'public' && session?.role.length > 1) {
                redirect('/portal');
            }

            if (session?.role.length === 1 && accessLevel === 'public') {
                redirect(`/${session?.role[0]}`);
            }

            if (
                accessLevel === 'private' &&
                !session?.role.includes(accessType) &&
                !pathname.includes('portal')
            ) {
                redirect('/portal');
            }
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
};

export default AuthProvider;
