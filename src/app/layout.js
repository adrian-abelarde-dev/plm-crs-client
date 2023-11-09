import Providers from '@/components/component/providers';
import { getServerSession } from 'next-auth/next';
import { Inter } from 'next/font/google';

import { authOptions } from './api/auth/[...nextauth]/route';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'PLM - CRS',
  description:
    'PLM - CRS is a computerized registration system for the Pamantasan ng Lungsod ng Maynila. Developed by batch 2023 - 2024 BSCS 4 - 1',
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers session={session}>{children}</Providers>
      </body>
    </html>
  );
}
