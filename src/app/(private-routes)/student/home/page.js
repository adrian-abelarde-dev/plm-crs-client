'use client';

import { signOut } from 'next-auth/react';
import { redirect } from 'next/navigation';

function StudentHomePage() {
  return (
    <div>
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
}

export default StudentHomePage;
