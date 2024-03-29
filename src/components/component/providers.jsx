'use client';

import { Toaster } from '@/components/ui/toaster';
import { SessionProvider } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function Providers({ children, session }) {
  const [isDomLoaded, setIsDomLoaded] = useState(false);

  // for UI hydration bug
  useEffect(() => {
    setIsDomLoaded(true);
  }, []);

  return (
    <SessionProvider session={session}>
      {children}
      {isDomLoaded && <Toaster />}
    </SessionProvider>
  );
}
