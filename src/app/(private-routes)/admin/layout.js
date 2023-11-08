import AuthProvider from '@/components/component/auth';
import Providers from '@/components/component/providers';
import { Sidebar } from '@/components/layouts/sidebar';
import { adminSidebarLinks } from '@/lib/constants/links-data';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function PrivateRouteRootLayoutAdmin({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {/* AuthProvider added for private routes */}
        <Providers>
          <AuthProvider accessType='admin' accessLevel='private'>
            <Sidebar sidebarLinks={adminSidebarLinks} />
            {children}
          </AuthProvider>
        </Providers>
      </body>
    </html>
  );
}
