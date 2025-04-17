import Link from "next/link"
import { FaPlus } from "react-icons/fa6"

export default function PlusButton(){
    return(
        <Link href='/NewPost' className="fixed rounded-[3rem] bg-blue-500 right-3 z-50
        text-2xl bottom-3 text-white p-2
        "><FaPlus/>
</Link>
    )
}