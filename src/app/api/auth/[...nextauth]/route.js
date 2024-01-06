import NextAuth from 'next-auth';
import AzureADProvider from 'next-auth/providers/azure-ad';

import { getUserRoles } from './get-user-roles';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET,
      tenantId: process.env.AZURE_AD_TENANT_ID,
      authorization: {
        params: { scope: 'openid profile user.Read email' },
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 6, // 6 hours
  },
  callbacks: {
    async jwt({ token, account }) {
      // IMPORTANT: Persist the access_token to the token right after sign in
      if (account) {
        token.idToken = account.id_token;
      }
      return token;
    },

    async session({ session, token }) {
      try {
        // Use await to wait for the asynchronous operation to complete
        session.idToken = token.idToken;

        // Use await to wait for the asynchronous getUserRoles function
        const data = await getUserRoles({ plmEmail: session.user.email });

        if (data) {
          // Use map directly on the array and store it in roles
          const roles = data.userTypes.map((userType) => {
            // Convert to lowercase
            userType = userType.toLowerCase();

            // Apply specific transformations
            switch (userType) {
              case 'chairpersongrad':
                userType = 'college-grad';
                break;
              case 'chairpersonundergrad':
                userType = 'college';
                break;
              case 'studentgrad':
                userType = 'student-grad';
                break;
            }

            return userType;
          });

          session.role = roles;
          console.log(roles);
        } else {
          console.error('Error fetching user roles');
        }

        return session;
      } catch (error) {
        console.error('session error:', error);
        return session; // or throw the error if you want to propagate it
      }
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
