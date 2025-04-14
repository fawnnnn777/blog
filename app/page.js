import Category from '@/components/Category';
import Featured from '@/components/Featured'
import Menu from '@/components/Menu';
import Post from '@/components/Post';

export default function Home() {
  return (
   <div className='container'>
    <Post></Post>
      <Featured></Featured>
      <Category></Category>
      <div className='content'>
          <Menu></Menu>
      </div>
   </div>
  );
}
