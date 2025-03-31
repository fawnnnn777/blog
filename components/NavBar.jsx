import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaSquareInstagram } from "react-icons/fa6";
import { ImMan } from "react-icons/im";


export default function NavBar(){
    return (
        <div className="w-screen left-0 sm:w-full border-b p-2 border-black/20 flex justify-between items-center h-[70px]">
            <div className="flex justify-between"><a className="hidden sm:block" href="https://www.instagram.com/_diego_again/"> <FaSquareInstagram className="m-1" size={24}/></a>
            <RxHamburgerMenu size={24} className="block sm:hidden m-1"/>
            </div>
            <div className="flex justify-between items-center"><p className="m-1 text-2xl text-textColor">Basic Being Basic</p> <ImMan className="m-1" size={32} /></div>
            <div><Link href="/SignIn" className="box-border rounded-3xl p-2 m-1 border border-black/20 font-bold text-sm
            hover:cursor-pointer hover:text-[#F1EFEC] hover:bg-[#123458] transition duration-300 text-center
            ">Sign In</Link>
            <button></button>
            </div>
        </div>
    )
}