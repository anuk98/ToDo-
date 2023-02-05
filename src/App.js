import { addDoc, collection, doc, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react'
import "./App.css";
import Button from '@mui/material/Button';
import TodoList from './components/TodoList';
import { db } from './firebase_config';
import { TextField } from '@mui/material';
import { useEffect } from 'react';



function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  useEffect(() => {
    getTodos();
  }, []); 

  function getTodos() {
    onSnapshot(query(collection(db, "todos"),orderBy('timestamp','desc')), (querySnapshot) => {
      setTodos(
        querySnapshot.docs.map((item) => ({
          id: item.id,
          todo: item.data().todo,
          inprogress: item.data().inprogress,
        })) 
      )
  });
  }

  function addTodo(e) {
    e.preventDefault();
    addDoc(collection(db, "todos"), {
    inprogress: true,
    timestamp: serverTimestamp(),
    todo: todoInput,
    });
    setTodoInput("");
  }

  return (
    <div className="app">
      <div className="container">
        
      <h1> Todo List </h1>
        <form>
          <input
            type='text'
            placeholder='Add Todo...'
            className='text-input'
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
          />
          <button className='add-btn' onClick={addTodo}>
            Add
          </button>
        </form>

        <div >
          {todos.map((todo) => (
            <TodoList
              todo={todo.todo}
              inprogress={todo.inprogress}
              id={todo.id}
            />
          ))}
        </div>
      </div>
      
    </div>
  );
}

export default App;