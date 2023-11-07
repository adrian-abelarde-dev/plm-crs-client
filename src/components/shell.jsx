'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

// ? HeaderNavbar is a prop that will be passed to Shell to defined the header
const Shell = ({ HeaderNavbar }) => {
    const { data: session, status } = useSession();

    // ? Handle role based routing later.125
    // ? For now, redirect to student page if unauthenticated
    // ? For checking user role, use `session.user.role` --> displays "student" or "faculty", etc.
    useEffect(() => {
        if (status === 'unauthenticated') {
            redirect('/student');
        }
    }, [status]);

    if (status === 'authenticated') {
        return HeaderNavbar;
    }
};

export default Shell;
