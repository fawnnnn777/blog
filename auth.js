import NextAuth from "next-auth"
import NeonAdapter from "@auth/neon-adapter"
import { Pool } from "@neondatabase/serverless"
import Google from 'next-auth/providers/google' 

 
export const { handlers, auth, signIn, signOut } = NextAuth(() => {
  // Create a `Pool` inside the request handler.
  const db = new Pool({ connectionString: process.env.DATABASE_URL })
  return {
    adapter: NeonAdapter(db),
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
        })
    ],
    callbacks: {
        async session({ session, user }) {
            // Check if profile exists
            const result = await db.query(
              `SELECT role FROM profile WHERE userId = $1`,
              [user.id]
            )
        
            // If it doesn't exist, create it
            if (!result.rowCount) {
              await db.query(
                `INSERT INTO profile (userId, role) VALUES ($1, $2)`,
                [user.id, 'user']
              )
              session.user.role = 'user'
            } else {
              session.user.role = result.rows[0].role
            }
        
            return session
          }
      }
  }
})