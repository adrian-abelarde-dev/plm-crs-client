'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

const AuthProvider = ({ children, accessType }) => {
    const { data: session, status } = useSession();

    useEffect(() => {
        if (
            status === 'unauthenticated' ||
            !session?.role.includes(accessType)
        ) {
            redirect('/portal');
        }
    }, [status, accessType, session]);

    if (status === 'authenticated' && session?.role.includes(accessType)) {
        return children;
    }
};

export default AuthProvider;
