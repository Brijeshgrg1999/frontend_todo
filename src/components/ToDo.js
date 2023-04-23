import React from 'react'
import { Button } from 'react-bootstrap';

const ToDo = ({text , updateMode , deleteToDo }) => {
  return (
    <div>
       <div className='container-fluid p-3'>
          <div>
            <span>{text}</span>
              <div>
              <Button className='btn btn-secondary mx-4' onClick={updateMode}> Update </Button>
            <Button className='btn btn-danger' onClick={deleteToDo}> Delete </Button>
              </div>
          </div>
       </div>
    </div>
  )
}

export default ToDo ; 