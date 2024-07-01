import { SvelteKitAuth } from "@auth/sveltekit"
import GitHub from "@auth/sveltekit/providers/github"

import PostgresAdapter from "@auth/pg-adapter"
import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "user",
  password: "password",
  database: "db",
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

export const { handle, signIn, signOut } = SvelteKitAuth({
  adapter: PostgresAdapter(pool),
  providers: [GitHub],
  trustHost: true,
  callbacks: {
    session({ session, user }) {
      session.user.id = user.id
      return session
    }
  }
}) 