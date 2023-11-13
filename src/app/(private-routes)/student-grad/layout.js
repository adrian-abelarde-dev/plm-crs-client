import AuthProvider from '@/components/component/auth';
import Providers from '@/components/component/providers';
import StudentNavbar from '@/components/layouts/student-navbar';
import { linksGradStudents } from '@/lib/constants/links-data';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'PLM - CRS | Grad Student',
  description:
    'PLM - CRS is a computerized registration system for the Pamantasan ng Lungsod ng Maynila. Developed by batch 2023 - 2024 BSCS 4 - 1',
};

export default function PrivateRouteRootLayoutStudent({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {/* AuthProvider added for private routes */}
        <Providers>
          <AuthProvider accessType='student-grad' accessLevel='private'>
            <StudentNavbar linksStudents={linksGradStudents} />

            <div className='2xl:flex 2xl:justify-center 2xl:w-full'>
              {children}
            </div>
          </AuthProvider>
        </Providers>
      </body>
    </html>
  );
}
