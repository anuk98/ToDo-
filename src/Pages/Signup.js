import React from 'react'
import {signInWithPopup } from "firebase/auth";
import {auth,provider} from '../Firebade/config' 
import {useNavigate} from 'react-router-dom'



function Signup() {

  const navigate=useNavigate();
  const sigupwithgoogle= async()=>{
    const result = await signInWithPopup(auth,provider);
    console.log(result)
  navigate('/');
}  

   
    return (
    <div>
        <h1>Signup</h1>
        <button onClick={sigupwithgoogle}>signup</button>
      
        
    </div>
  )
}

export default Signup