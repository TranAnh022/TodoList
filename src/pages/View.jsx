import React from 'react'
import { useNavigate} from 'react-router-dom'
import './View.css'
import { useState,useEffect } from 'react'


const View = () => {
  const strorageJobs = JSON.parse(localStorage.getItem('todos')); 
  const navigate= useNavigate()
  
  const [list, setList] = useState(strorageJobs ?? {});
  let newTodoList;

  useEffect(() => {
    setList(JSON.parse(localStorage.getItem('todos')));

  },[newTodoList])
  
  const onEdit = async (todo) => {
    const { values,id } = todo;
    localStorage.setItem('chooseTodo', JSON.stringify(values))
    newTodoList =list.filter((todo) => todo.id !== id)
    localStorage.setItem('todos', JSON.stringify(newTodoList));
    navigate('/edit')
  }
  
  const handleDelete = (id) => {
    newTodoList =list.filter((todo) => todo.id !== id)
    localStorage.setItem('todos', JSON.stringify(newTodoList))
    window.location.reload()
  }
  return (
    <div className="container-view">
      <h1>List Todo</h1>
      <div className="todo-cards">
        {(list.map((todo) => {
          return (
            <div className="form-view" key={todo.id}>
              <div className='title'>
                <h5>Title : {todo.values.title}</h5>
            
              </div>
              <div className='deadline'>
                <h5>DeadLine : {todo.values.date}</h5>
                  
              </div>
              <div className='status'>
                <h5>Status : {todo.values.status}</h5>
              </div>
              <div className='button-card'>
                <button className='btn' onClick={() => onEdit(todo)}>Edit</button>
                <button className='btn' onClick={() => handleDelete(todo.id)}>Delete</button>
              </div>
              
            </div>)
        }))}
        </div>
      </div> 
  )
}

export default View