import { auth } from '@/auth';
import Category from '@/components/Category';
import Featured from '@/components/Featured'
import Menu from '@/components/MenuButton';
import PlusButton from '@/components/PlusButton';
import Post from '@/components/Post';
import { Pool } from '@neondatabase/serverless';
export default async function Home() {

  const session = await auth()
  const db = new Pool({connectionString: process.env.DATABASE_URL})

  const posts = await db.query(`
    SELECT * FROM posts`)       

  return (
   <div className='container'>
    {posts.rows? posts.rows.map((post)=><Post key={post.post.id} post={post}></Post>): <h1>no posts</h1>}
      <Featured></Featured>
      <Category></Category>
      <div className='content'>
      </div>
      {
          session?.user.role === 'admin' ? <PlusButton></PlusButton> : 
          null}
   </div>
  );
}
