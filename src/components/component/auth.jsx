'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

import Loader from './loader';

const AuthProvider = ({ children, accessType }) => {
    const { data: session, status } = useSession();
    // ? status can be 'loading', 'authenticated' or 'unauthenticated'

    useEffect(() => {
        if (status === 'unauthenticated') {
            // Proceeds to login
            redirect('/');
        } else if (
            !session?.role.includes(accessType) &&
            // ? on page load, status is 'loading' and session is null
            status !== 'loading'
        ) {
            redirect('/portal');
        }
    }, [status, accessType, session]);

    if (status === 'loading') {
        return <Loader />;
    }

    if (status === 'authenticated' && session?.role.includes(accessType)) {
        return children;
    }
};

export default AuthProvider;
