// ! Mantine Imports
import AuthProvider from '@/components/component/auth';
import { Inter } from 'next/font/google';

import Providers from '../../../components/component/providers';
import '../../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
