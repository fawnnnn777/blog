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
        async signIn({user}){
            const profileExists = await db.query(
                `SELECT 1 FROM profile WHERE userId = $1 LIMIT 1`,
                [user.id]
            )
            if(!profileExists.rowCount){
                await db.query (
                    `INSERT INTO profile (userId, role) VALUES ($1, $2)`,
                    [user.id, 'user']
                )
            }
            return true
        },
        async session({session, user}){
            const profile = await db.query(`SELECT role FROM profile WHERE userId = $1`,
                [user.id]
            )
            session.user.role = profile.rows[0]?.role
            return session;
        }
    }
  }
})