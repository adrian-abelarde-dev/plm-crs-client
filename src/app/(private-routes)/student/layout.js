import AuthProvider from '@/components/component/auth';
import Providers from '@/components/component/providers';
import StudentNavbar from '@/components/layouts/student-navbar';
import { linksStudents } from '@/lib/constants/links-data';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function PrivateRouteRootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                {/* AuthProvider added for private routes */}
                <AuthProvider accessType='student'>
                    <Providers>
                        <StudentNavbar linksStudents={linksStudents} />
                        {children}
                    </Providers>
                </AuthProvider>
            </body>
        </html>
    );
}
