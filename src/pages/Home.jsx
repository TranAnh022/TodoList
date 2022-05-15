import React,{useState} from 'react'
import { Button } from 'react-bootstrap';
import './Home.css'
import Create from '../componets/Create';
const Home = () => {
  const [create, setCreate] = useState(false);
  const handleCreate = (event) => {
    event.preventDefault();
    setCreate(true);
  }

  return (
    
    <div className="container-home">
      {create ? (<Create/>) : (
        <div className="form-home">
          <h1 className='text-light'>Welcome to my ToDo List</h1>
          <Button className="btn" onClick={(e)=> handleCreate(e) }>Create a todo</Button>  
        </div>)}
        
    </div>
  )
}

export default Home