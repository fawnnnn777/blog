'use client'
import { signOut } from "next-auth/react"
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoReturnUpBack } from "react-icons/io5";


export default function MenuButton(){

    const [menu, setMenu] = useState(false)

    return (
        <div>
        <div className="flex justify-between">
<RxHamburgerMenu size={24} onClick={()=>setMenu(!menu)}/>
</div>
<div className={`
  fixed top-0 left-0 h-full w-4/5 bg-black text-white z-50
  transform transition-transform duration-300 ease-in-out
  ${menu ? 'translate-x-0' : '-translate-x-full'}
`}>

    <IoReturnUpBack  onClick={() => setMenu(false)} size={36} className="absolute right-3 m-1 cursor-pointer" />
    <button className="absolute bg-white text-black rounded-3xl p-2 bottom-5 right-3" onClick={()=>signOut()}>Sign Out</button>
    {menu && (
        <div
          className="fixed w-screen inset-0 bg-transparent z-40"
          onClick={() => setMenu(false)}
        />
      )}
</div>
</div>
    )
}