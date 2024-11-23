import './index.css';
function red({Data}){
    return(<>
    <div className='w-[100px] h-[100px] bg-gradient-to-t from-red-900 to-red-700 rounded-xl m-[5PX] content-center text-center'>
    <h1 className='h-[50px] text-2xl text-white'>{Data.TR}</h1>
    <p className='text-white' >{Data.Wip}</p>    
    </div>
    </>)
        }

function Yellow({Data}){
    return(<>
    <div className='w-[100px] h-[100px] bg-gradient-to-t from-yellow-900 to-yellow-700 rounded-xl m-[5PX] content-center text-center'>
    <h1 className='h-[50px] text-2xl text-white'>{Data.TR}</h1>
    <p className='text-white' >{Data.Wip}</p>    
    </div>
</>)
        }
function green({Data}){
    return(<>
    <div className='w-[100px] h-[100px] bg-gradient-to-t from-green-900 to-green-700 rounded-xl m-[5PX] content-center text-center'>
    <h1 className='h-[50px] text-2xl text-white'>{Data.TR}</h1>
    <p className='text-white' >{Data.Wip}</p>    
    </div>
</>)
        }
        

function Wipcard({Data}){
    if (Data.Wip <= 200){
       return red({Data});
    }else{
        if (Data.Wip <= 400 ){
            return Yellow({Data});
        }else{
            return green({Data})
        }
    }
   
}
export default Wipcard;