import {Link} from 'react-router-dom'
import {useState} from 'react';
import axios from 'axios';

function Signup() {

  //direct-js area
  const [signupDetails,setSignupDetails]=useState({name:'',email:"",password:""});
  const [loadingEffect,setLoadingEffect]=useState(false);
  const [errorOccured,setErrorOccured]=useState(false);
  const [resMessage,setResMessage]=useState("");

  const handleChange=(e)=>{
    setSignupDetails((prev)=>({...prev,[e.target.id]:e.target.value}));
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      setLoadingEffect(true);
      setErrorOccured(false);
      const response = await axios.post('http://localhost:9069/api/user/create-user', signupDetails);
      console.log(response.data); 
      setResMessage(response.data.message);
      setLoadingEffect(false);

    } catch (error) {
      setLoadingEffect(true);
      setErrorOccured(true);
      if (error.response) {
        setResMessage(error.response.data.message);
      }
      setLoadingEffect(false);
    }
  };
  
  return (
    <div className='max-w-lg mx-auto'>

      <h1 className='text-3xl text-center font-semibold my-7'> Sign Up</h1>

      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <input type="text" placeholder='username' id='name' className='bg-slate-100 p-3 rounded-lg'
         onChange={handleChange}/>
        <input type="email" placeholder='email' id='email' className='bg-slate-100 p-3 rounded-lg' 
        onChange={handleChange}/>
        <input type="password" placeholder='password' id='password' className='bg-slate-100 p-3 rounded-lg' 
        onChange={handleChange}/>
        <button type='submit' className='bg-slate-700 p-3 text-white rounded-lg hover:opacity-95 uppercase'>
        {(loadingEffect)? "Loading...":"Sign Up"}  </button>
       </form>

      <div className='flex gap-2 mt-5'>
        <h1 className=''> Have an account ?</h1>
        <Link to='/login'>
        <span className='text-blue-700'>Sign In</span>
         </Link>
      </div>

      <div className="message mt-4 max-w-lg mx-auto text-center ">
          {console.log(errorOccured)}
          {(errorOccured)? <p className='text-red-700'>{resMessage}</p>: <p className='text-green-700'>{resMessage}</p>}
      </div>

    </div>
  )
}

export default Signup
