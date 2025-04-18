import Link from "next/link";
import { FaSquareInstagram } from "react-icons/fa6";
import { ImMan } from "react-icons/im";
import { auth } from "@/auth";
import Menu from "./MenuButton";
import MenuButton from "./MenuButton";


export default async function NavBar(){
    
    const session = await auth()

    return (
        <div className="w-screen left-0 sm:w-full border-b p-2 border-black/20 flex justify-between items-center h-[70px]">
            <div className="flex justify-between">
            <MenuButton></MenuButton>
            </div>
            <div className="flex items-center"><Link href='/' className="m-1 text-2xl text-textColor">Basic Being Basic</Link> <ImMan className="m-1" size={32} /></div>
            <div>
            {!session?.user?  <Link href="/SignIn" className="box-border rounded-3xl p-2 m-1 border border-black/20 font-bold text-sm
            hover:cursor-pointer hover:text-[#F1EFEC] hover:bg-[#123458] transition duration-300 text-center
            ">Sign In</Link> : <h1 className="font-bold text-sm p-2">Hi {session.user.name.split(" ")[0]}</h1> }    
               
            </div>
        </div>
    )
}