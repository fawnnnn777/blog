'use client'

import { useSession } from 'next-auth/react'

export default function adminPage() {
  const { data: session, status } = useSession()

  if (status === 'loading') return <p>Loading...</p>
  if (!session) return <p>Not signed in</p>

  return <p>Signed in as {session.user.name}</p>
}
