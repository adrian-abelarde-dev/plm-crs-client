import AuthProvider from '@/components/component/auth';
import Providers from '@/components/component/providers';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'PLM - CRS | Portal',
  description:
    'PLM - CRS is a computerized registration system for the Pamantasan ng Lungsod ng Maynila. Developed by batch 2023 - 2024 BSCS 4 - 1',
};

export default function PrivateRouteRootLayoutPortal({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {/* AuthProvider added for private routes */}
        <AuthProvider accessLevel='private'>
          <Providers>{children}</Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
