import NextAuth from 'next-auth'
import Email from 'next-auth/providers/email'

export default NextAuth({
  providers: [
    Email({
      server: process.env.EMAIL_SERVER, // SMTP server details
      from: process.env.EMAIL_FROM,    // Email address used to send the sign-in email
    }),
  ],
  callbacks: {
    async signIn(params) {
      console.log(params)
      // Add email validation or additional logic here
      return Promise.resolve(true)
    },
    async session(params) {
      console.log(params)
      // Add email-related data to the session
      return params.session
    },
  },
})
