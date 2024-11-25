import './index.css';

function Wipcard({item}){
    return(<>
    <div className='w-[90px] h-[90px] bg-gradient-to-t from-red-900 to-red-700 rounded-xl m-[5PX] content-center text-center'>
    <h1 className='h-[50px] text-2xl text-white'>{item.TR}</h1>
    <p className='text-white' >{item.Wip}</p>    
    </div>
    
    
    </>
    )
}
export default Wipcard;