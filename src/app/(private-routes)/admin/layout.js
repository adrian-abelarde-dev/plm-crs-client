import AuthProvider from '@/components/component/auth';
import Providers from '@/components/component/providers';

import { Sidebar } from '@/components/layouts/sidebar';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function PrivateRouteRootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                {/* AuthProvider added for private routes */}
                <AuthProvider accessType="admin">
                    <Providers>
                        <Sidebar />{children}</Providers>
                </AuthProvider>
            </body>
        </html>
    );
}
