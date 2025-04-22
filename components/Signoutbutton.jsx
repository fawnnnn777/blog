'use client'

import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <button
      className="absolute bg-white text-black rounded-3xl p-2 bottom-5 right-3 z-50"
      onClick={() =>   
       signOut({ callbackUrl: '/' })}
    >
      Sign Out
    </button>
  );
}
