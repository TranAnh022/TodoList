import React,{useState} from 'react'
import './Create.css'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

const Create = () => {
  const [values, setValues] = useState({
    title: "",
    date: "",
    status: "",
  })
  const [todos,setTodos]= useState([])

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })    
}
  const handleSubmit = async (event) => {
    event.preventDefault();
    setTodos(prev => {
      const newTodo = [...prev, { values, id:uuidv4() }]
      const jsonTodo = JSON.stringify(newTodo);
      localStorage.setItem('todos',jsonTodo)
      return newTodo;
    })
    setValues({
      title: "",
      date: "",
      status:"---",
    })
  }
  return (
    <div className='form-create'>
      <form  onSubmit={(event) => handleSubmit(event)} >
            <div className="header-title">
              <h1 className='text-light'>ToDo List</h1>
            </div>
            <div className='input'>
            <h5>Title :</h5>
            <input
              type="text"
              placeholder='Title...'
              name="title"
              onChange={(e) => handleChange(e)}
              value={values.title}
            />
        </div>
        <div className='input'>
            <h5>Deadline :</h5>
            <input
              type="date"
              placeholder='Deadline...'
              name="date"
              onChange={(e) => handleChange(e)}
              value={values.date}
            />
        </div>
        <div className='input'>
          <h5>Status :</h5>
            <select name="status" id="" onChange={(e) => handleChange(e)} value={values.status}>
              <option >---</option>
              <option  value="Done">Done</option>
              <option  value="notStarted">Not Started</option>
              <option  value="progress">In Progress</option>
          </select>
          </div>
            <button type="submit" className='btn'>Create</button>
      </form>
      <button type="submit" className='btn'><Link to='/view'>View</Link></button>
    </div>
  )
}

export default Create