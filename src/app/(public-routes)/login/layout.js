// ! Mantine Imports
import AuthProvider from '@/components/component/auth';
import { Inter } from 'next/font/google';

import Providers from '../../../components/component/providers';
import '../../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'PLM - CRS | Log In',
  description:
    'PLM - CRS is a computerized registration system for the Pamantasan ng Lungsod ng Maynila. Developed by batch 2023 - 2024 BSCS 4 - 1',
};

export default function PublicRouteRootLayoutLogin({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <AuthProvider accessLevel='public'>{children}</AuthProvider>
        </Providers>
      </body>
    </html>
  );
}
