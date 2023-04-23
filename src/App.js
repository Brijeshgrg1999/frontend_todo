import { useEffect, useState } from 'react';
import {  Button ,  Form} from 'react-bootstrap';
import ToDo from './components/ToDo';
import { addToDo, getAllToDo , updateToDo , deleteToDo } from './utils/HandleApi';
import 'bootstrap/dist/css/bootstrap.min.css' ; 

function App() {
    const [toDo , setToDo] = useState([]) ; 
    const [text , setText ] = useState("") ; 
    const [isUpdating , setIsUpdateing] = useState(false) ; 
    const [toDoId , setToDoId] = useState("") ; 

    useEffect(()=>{
          getAllToDo(setToDo) ; 
    } , []) ; 

    const updateMode =(_id , text) =>{
      setIsUpdateing(true) ; 
      setText(text) ; 
      setToDoId(_id); 
    }

  return (
    <div className="App">
      <h1 className='text-center'>simple todo</h1>

      <div className='container text-center'>
        <Form>
          <Form.Label>Enter tasks here</Form.Label>
         
          <Form.Control type='text' placeholder='eg.task 1'  value={text} onChange={(e) => setText(e.target.value)} required />

          <Form.Text className='text-muted'>
            start adding your task ..
          </Form.Text>
          <Button className="btn" 
          onClick={ isUpdating? 
          ()=>updateToDo(toDoId , text , setToDo , setText , setIsUpdateing) :
          () => addToDo(text, setText, setToDo) }>
            {isUpdating ? 'update' : 'Add' } 
            </Button>
        
        </Form>
      </div>
        <div className='container text-center p-5'>

      {toDo.map((item) => {
        return <ToDo 
        key={item._id} 
        text={item.text}
        updateMode = {()=>updateMode(item._id , item.text)} 
        deleteToDo ={()=>deleteToDo(item._id , setToDo)} />
      })}
        </div>
    </div>
  );
}

export default App;
