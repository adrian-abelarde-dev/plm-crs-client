import NextAuth from 'next-auth';
import AzureADProvider from 'next-auth/providers/azure-ad';

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
      // IMPORTANT: Add the token to the session as a property
      // ! request token from backend
      session.idToken = token.idToken;

      // add api call that will lookup if the user matches the access that it needs
      session.role = [
        'admin',
        'faculty',
        'student-grad',
        'college-grad',
        'student', // for undergrad students
        'college', // for undergrad colleges
      ];

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
