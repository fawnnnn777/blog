import Image from "next/image"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({subsets: ['latin'], weight: ['500']})

export default function Post(){
    return ( 
        <div className="bg-white text-black m-2 rounded-lg p-2">
            <h1>this is a post</h1>
            <p className={`text-md ${montserrat.className}`}>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus tempora delectus repudiandae doloribus laboriosam dolorum distinctio blanditiis officiis vel omnis non nam unde sed aliquid quasi excepturi iste, est consectetur!
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident laborum inventore eveniet suscipit cum, nemo quasi sit molestias obcaecati pariatur perspiciatis corrupti ex commodi facere deserunt. Rem eligendi architecto delectus.
            </p>
            <Image
             src="/cars.jpeg"
                width={200}
                height={200}
             ></Image>
        </div>
    )
}