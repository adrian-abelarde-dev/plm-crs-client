'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

const AuthProvider = ({ children, accessType }) => {
    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === 'unauthenticated') {
            redirect('/');
        }
    }, [status]);

    if (status === 'authenticated') {
        return children;
    }
};

export default AuthProvider;
