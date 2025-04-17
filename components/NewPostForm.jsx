'use client'
import { auth } from "@/auth"
import { useSession, SessionProvider } from "next-auth/react"
import { useState } from "react"


export default function NewPostForm(){



    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [loading, setLoading] = useState(false)
    const { data: session, status } = useSession()

if (status === "loading") return <p>Loading...</p>
if (!session) return <p>You must be signed in to post.</p>

const userId = session.user.id

    async function handleSubmit(e){
        e.preventDefault()

        console.log(title, content);
        setLoading(true)
        try{
            const res = await fetch('/api/posts',{
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({title, content, userId})
            })
            const data = await res.json()
        }
        catch(error){
            console.log(error);
            
        }
        finally{
            setLoading(false)
        }
        setContent("")
        setTitle("")
    }

    return (
        <form onSubmit={handleSubmit} className="
        flex flex-col m-5 h-96 ">
            <input className="rounded bg-white/50 m-2 p-2 border border-green
            focus:border-sky-500 focus:outline focus:outline-sky-500
            " required max={50} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="title" value={title}></input>
            <textarea className="rounded bg-white/50 m-2 p-2 border border-green
            focus:border-sky-500 focus:outline focus:outline-sky-500
            resize-none h-9/10"  onChange={(e)=>setContent(e.target.value)} placeholder="write stuff" value={content}></textarea>
            <input  className="rounded-[3rem] bg-blue-500
        text-xl text-white p-2 w-26 mx-auto
        " type="submit" value={loading? "Posting" : "Post"} disabled={loading}></input>
        </form>
    )
}