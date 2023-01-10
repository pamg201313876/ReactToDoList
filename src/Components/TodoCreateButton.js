import React from 'react'
import Button from '@mui/material/Button';
import "./../Styles/TodoCreateButton.css"
import { TodoContext } from './TodoContext';

export const TodoCreateButton = ({setShowModal}) => {
  
  const onClickButton = () =>{
      setShowModal(true)
  }

  return (
    <div className='TodoCreateButton'>
       <Button variant="contained"  onClick={onClickButton} >Crear tarea</Button>
    </div>   
  )
}
