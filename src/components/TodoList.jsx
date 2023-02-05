import React from 'react'
import './TodoList.css'
import { ListItem, ListItemText } from '@mui/material';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase_config';

function TodoList({ todo, inprogress, id }) {
    function toggleInProgress() {
        updateDoc(doc(db, "todos",id), {
            inprogress: !inprogress,                                                
          });
    }
  
    function deleteTodo() {
        deleteDoc(doc(db, "todos", id));
    }
    return (
      <div className='list'>
       <p className={`list-item ${!inprogress && 'list-clean'}`}>{todo}</p>
  
       <div className='buttons'>
       <button className='task-btn btn-complete' onClick={toggleInProgress}>
        <i class="fa fa-circle-check"></i>
        </button>
        <button className='task-btn btn-delete' onClick={deleteTodo}>
          <i className='fa fa-trash '></i>
        </button>
       </div>
      </div>
    );
  }

export default TodoList;