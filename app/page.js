import Category from '@/components/Category';
import Featured from '@/components/Featured'
import Menu from '@/components/Menu';

export default function Home() {
  return (
   <div className='container'>
      <Featured></Featured>
      <Category></Category>
      <div className='content'>
          <Menu></Menu>
      </div>
   </div>
  );
}
