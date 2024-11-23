import { useNavigate } from 'react-router-dom';
import './App.css';
import './index.css'
import { Button } from '@mui/material';

function App() {

  const navigate = useNavigate()
  function NavigatetoLogin(){
  navigate('/Dashboard')
}

  return (
<>
<div className='flex justify-center items-center w-full bg-gradient-to-t from-slate-900  to-slate-700 h-[100vb]'>
<div className='text-center'>
  <h1 className='mb-14 text-white text-5xl '>LOGO</h1>
  <h1 className='mb-4 text-2xl text-slate-600'>Login to Dashboard</h1>
<Button variant='outlined' onClick={NavigatetoLogin}>LOGIN</Button>
</div>
</div>
</>
  );
}

export default App;
