import React from 'react'
import Button from '@mui/material/Button';
import "./../Styles/TodoCreateButton.css"

export const TodoCreateButton = () => {

  const onClickButton = () =>{
    alert('Abrir modal')
  }

  return (
    <div className='TodoCreateButton'>
       <Button variant="contained"  onClick={onClickButton} >Crear tarea</Button>
    </div>   
  )
}
