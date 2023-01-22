import React from 'react';
import { useState } from 'react';
import './App.css';
function App() {
  const date=new Date().toDateString();
   const[todo,setTodo]=useState('');
  const[newtask,setNewtask]=useState([]);
 const deletetodo=(m)=>{
  setNewtask(newtask.filter((obj)=>obj.id!==m))
 }
 
  return (
    <div className="app">
      
      <div className="mainHeading">
        <h1><span style={{color:'violet'}}>ToDo</span> List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input type="text" placeholder="🖊️ Add item..." onChange={(e)=>{
          setTodo(e.target.value)
        }} />
        <i  class="fas fa-plus" onClick={()=>{
          setNewtask([...newtask,{text:todo,status:false,id:Date.now()}])
        }} style={{color:'orange'}}></i>
        
      </div>
      {newtask.map((obj)=>{
        return(
      <div className="todos">
        <div className="todo">
          <div className="left">
            <input onChange={(e)=>{
             
              console.log(obj)
              setNewtask(newtask.filter((obj2)=>{
                if(obj2.id===obj.id){
                  obj2.status=e.target.checked
                }
                return obj2
              })
             )
                
            }} value={obj.status} type="checkbox" name="" id="" />
            
            <p>{obj.text}</p>
            <p1>{date}</p1>
            
          </div>
          
          <div className="right">
            <i onClick={()=>{
              deletetodo(obj.id)
            }} className="fas fa-times"></i>
          </div>
        </div>
      </div>)
      })}
      
    </div>
  );
}

export default App;