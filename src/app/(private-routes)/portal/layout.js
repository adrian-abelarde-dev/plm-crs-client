import AuthProvider from '@/components/component/auth';
import Providers from '@/components/component/providers';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function PrivateRouteRootLayoutPortal({ children }) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                {/* AuthProvider added for private routes */}
                <AuthProvider accessLevel="private">
                    <Providers>{children}</Providers>
                </AuthProvider>
            </body>
        </html>
    );
}
