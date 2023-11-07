'use client';

import StudentNavbar from '@/components/layouts/student-navbar';
import Shell from '@/components/shell';
import { signOut } from 'next-auth/react';
import { redirect } from 'next/navigation';
import React from 'react';

const StudentHomePage = () => {
    return (
        <div>
            <Shell HeaderNavbar={<StudentNavbar />} accessType={"student"} />
            {/* remove this on the final layout of student home */}

            <button
                onClick={() => {
                    signOut();
                    redirect('/student');
                }}
                // update later when creating the layout
                className='mt-96'
            >
                Sign out
            </button>
        </div>
    );
};

export default StudentHomePage;
