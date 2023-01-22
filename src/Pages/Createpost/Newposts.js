import React, { useState } from 'react'
import {addDoc,collection} from 'firebase/firestore'
import {db} from '../../Firebade/config'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../../Firebade/config'
import {useNavigate} from 'react-router-dom'
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { useId } from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'
function Newposts() {
  const [user]=useAuthState(auth)
  const navigate=useNavigate()
  const [image,setImage]=useState(null)
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState('');
  const date=new Date();
  const fileuplaod=()=>{
 
const storage = getStorage();
const storageRef = ref(storage, `images${image.name}`);

// 'file' comes from the Blob or File API
uploadBytes(storageRef, image).then(() => {
  alert("image uploaded")
});
  }
 const handleSubmit =(e)=>{
  e.preventDefault()
 const hello=collection(db, "participent")
  const docRef = addDoc(hello, {
    id:user.uid,
    Name:name,
    Age:age,
    Phone:phone,
    Email:email,
    country: "America",
    CreatedAt:date.toDateString()
  });
  
  navigate('/')
}


  return (
    <div>
  <form onSubmit={handleSubmit}>
  <label >Full name</label>
  <input type="text" placeholder='full name' onChange={(e)=>{
  setName(e.target.value)
  }} /><br/>
  <label htmlFor="">Age</label>
  <input type="number" placeholder='Age' onChange={(e)=>{
    setAge(e.target.value)
  }}/><br/>
  <label htmlFor="">Phone</label>
  <input type="number" placeholder='phone' onChange={(e)=>{
    setPhone(e.target.value)}} /><br/>
  <label htmlFor="">email</label>
  <input type="email" placeholder='email' onChange={(e)=>{
    setEmail(e.target.value)}} />
  <input type="submit" value="submit"></input>
  
 
</form>
  <input type="file" onChange={(e)=>{setImage(e.target.files[0])}}  />
  <br/>
 <img src={image?URL.createObjectURL(image):"no image"} width="200px" height="200px" alt="no image" />
 <br/>
  <button onClick={fileuplaod}>Upload File</button>
  </div>
  )
}

export default Newposts