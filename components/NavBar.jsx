import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { ImMan } from "react-icons/im";


export default function NavBar(){
    return (
        <div className="w-full border-b p-2 border-black/20 flex justify-between items-center h-[70px]">
            <div className="flex justify-between"><a href="https://www.instagram.com/_diego_again/"> <FaSquareInstagram className="m-1" size={24}/></a>
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