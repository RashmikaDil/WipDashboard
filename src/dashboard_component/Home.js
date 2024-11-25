
import './index.css'
import WipData from './WipData';
import Wipcard from './Wipcard';

function Home(){
   return(
    <>
    <div className='block'>
     <h1 className="text-2xl w-full mb-4 bg-blue-900 p-2 rounded-md text-center">Home </h1>
     <p className='text-sm text-sky-300 mb-2' >Module Wise Wip</p>
     <div className='flex flex-wrap'>
    {WipData.map((item, index) => (
  <Wipcard key={index} item={item} />
))}
</div>
</div>

    </>
   ) 
}

export default Home;