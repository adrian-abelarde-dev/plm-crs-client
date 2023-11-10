'use client';

import { Toaster } from '@/components/ui/toaster';
import { SessionProvider } from 'next-auth/react';
import { useEffect, useState } from 'react';

const Providers = ({ children }) => {
  const [isDomLoaded, setIsDomLoaded] = useState(false);

  // for UI hydration bug
  useEffect(() => {
    setIsDomLoaded(true);
  }, []);

  return (
    <SessionProvider>
      {children}
      {isDomLoaded && <Toaster />}
    </SessionProvider>
  );
};

export default Providers;
