'use client'
import { signIn } from 'next-auth/react'
import { FcGoogle } from "react-icons/fc";


export default function SignInButton() {
  return (
    <button className='border rounded-3xl border-white/30 p-1 w-21 justify-center flex items-center' onClick={() => signIn('google', {redirectTo: '/'})}>
      Sign in <FcGoogle className='ml-1'/>
    </button>
  )
}