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
  This is the menu
  <IoReturnUpBack onClick={() => setMenu(false)} size={32} className="right-0 m-1 cursor-pointer" />
    <button onClick={()=>signOut()}>Sign Out</button>
</div>
</div>
    )
}