import React,{useState} from 'react'
import './Edit.css'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

const Edit = () => {
  const chooseTodo = JSON.parse(localStorage.getItem('chooseTodo'));
  const navigate = useNavigate();
  const [values, setValues] = useState({
    title: `${chooseTodo.title}`,
    date: `${chooseTodo.date}`,
    status: `${chooseTodo.status}`,
  })
  
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })    
}
  const handleSubmit = async (event) => {
    event.preventDefault();
    const newTodo = { values, id: uuidv4() }
    
     const listTodo = JSON.parse(localStorage.getItem('todos')); 
     listTodo.push(newTodo)
    const jsonTodo = JSON.stringify(listTodo);
    localStorage.setItem('todos',jsonTodo)
    setValues({
      title: "",
      date: "",
      status:"---",
    })
    navigate('/view')
  }
  // console.log(values)
  return (
    <div className='form-edit'>
      <form  onSubmit={(event) => handleSubmit(event)} >
            <div className="header-title">
              <h1 className='text-light'>Edit ToDo</h1>
            </div>
            <input
              type="text"
              placeholder='Title...'
              name="title"
              onChange={(e) => handleChange(e)}
              value={values.title}
            />
    
            <input
              type="text"
              placeholder='DD/MM/YYYY'
              name="date"
              onChange={(e) => handleChange(e)}
              value={values.date}
            />
      
            <select name="status" id="" onChange={(e) => handleChange(e)} value={values.status}>
              <option >---</option>
              <option  value="Done">Done</option>
              <option  value="notStarted">Not Started</option>
              <option  value="progress">In Progress</option>
            </select>
            <button type="submit" className='btn'>Save</button>
      </form>

    </div>
  )
}

export default Edit