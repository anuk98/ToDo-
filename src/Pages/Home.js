import React, { useEffect, useState } from 'react'
import {auth} from '../Firebade/config'
import {signOut} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import { getDocs } from 'firebase/firestore'
import {db} from '../Firebade/config'
import {collection} from 'firebase/firestore'
import {useAuthState} from 'react-firebase-hooks/auth'

function Home() {
  const navigate=useNavigate()
  const userdet=()=>{
  navigate('/view')
  }
  const [product, setproduct] = useState([])
  const [user]=useAuthState(auth)
  
  const userSignout= async ()=>{
  await signOut(auth);
  navigate('/signup')
  }
 useEffect(()=>{
   const hello=collection(db, "participent")
  const getPost=async()=>{
    const data=await getDocs(hello);
  const graps= data.docs.map((obj)=>{
      return{
        ...obj.data(),
        id:obj.id
      }
      
    })
    setproduct(graps)
     
  } 
  getPost();
 })
  
  return (
    <div>
      <h1>Home</h1>
      <p>{auth.currentUser?.email}</p>
      <p>{auth.currentUser?.displayName}</p>
      <h3>{user?`Welcome ${user.displayName}` : 'login'}</h3>
      
      <button onClick={userSignout}>Signout</button>
      {product.map((obj)=>{
        return<div><button onClick={userdet}>{obj.Name}</button>
        <h1>{obj.Age}</h1></div>
      })}
      
    </div>
  )
}

export default Home