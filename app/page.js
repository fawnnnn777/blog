import { auth } from '@/auth';
import PlusButton from '@/components/PlusButton';
import Post from '@/components/Post';
import { Pool } from '@neondatabase/serverless';
export default async function Home() {

  const session = await auth()
  const db = new Pool({connectionString: process.env.DATABASE_URL})

  const posts = await db.query(`
    SELECT 
  posts.*, 
  users.name AS user_name
FROM posts
JOIN users ON posts.userId = users.id;
`)     
    
  const sortedPosts = posts.rows.sort((x,y)=>{
    return new Date(y.createdAt) < new Date(x.createdAt)
  }).reverse()
  
  

  return (
   <div className='container mt-19 h-fit'>
    {posts.rows? sortedPosts.map((post)=><Post key={post.id} post={post}></Post>): <h1>no posts</h1>}
      <div className='content'>
      </div>
      {
          session ? <PlusButton></PlusButton> : 
          null}
   </div>
  );
}
