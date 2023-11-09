import AuthProvider from '@/components/component/auth';
import Providers from '@/components/component/providers';
import { getServerSession } from 'next-auth/next';
import { Inter } from 'next/font/google';

import { authOptions } from './api/auth/[...nextauth]/route';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'PLM - CRS | Portal',
  description:
    'PLM - CRS is a computerized registration system for the Pamantasan ng Lungsod ng Maynila. Developed by batch 2023 - 2024 BSCS 4 - 1',
};

export default async function PrivateRouteRootLayoutPortal({ children }) {
  const session = await getServerSession(authOptions);
  return (
    <html lang='en'>
      <body className={inter.className}>
        {/* AuthProvider added for private routes */}
        <AuthProvider accessLevel='private'>
          <Providers session={session}>{children}</Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
