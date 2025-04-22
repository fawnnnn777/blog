import Image from "next/image"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({subsets: ['latin'], weight: ['500']})

export default function Post(post){
    return ( 
        <div className="bg-white/40 text-white m-2 rounded-lg p-2">
                        {post.post.user_name.split(" ")[1]}
            <h1>{post.post.title}</h1>
            <div className={`text-lg ${montserrat.className}`}>
            <p>
             {post.post.content}
            </p>
            </div>
        </div>
    )
}