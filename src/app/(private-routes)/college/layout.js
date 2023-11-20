import AuthProvider from '@/components/component/auth';
import Providers from '@/components/component/providers';
import { Sidebar } from '@/components/layouts/sidebar';
import { collegeLinks } from '@/lib/constants/links-data';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'PLM - CRS | College',
  description:
    'PLM - CRS is a computerized registration system for the Pamantasan ng Lungsod ng Maynila. Developed by batch 2023 - 2024 BSCS 4 - 1',
};

export default function PrivateRouteRootLayoutAdmin({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {/* AuthProvider added for private routes */}
        <Providers>
          <AuthProvider accessType='college' accessLevel='private'>
            <section className='w-full relative'>
              {/* Sidebar is floating but fixed */}
              <section className='fixed left-0 z-50'>
                <Sidebar sidebarLinks={collegeLinks} accessType='College' />
              </section>

              {/* Adds margin left based on sidebar width */}
              <div className='flex-grow ml-[48px] md:ml-52'>{children}</div>
            </section>
          </AuthProvider>
        </Providers>
      </body>
    </html>
  );
}
