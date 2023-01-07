import React from 'react'
import Button from '@mui/material/Button';
import "./../Styles/TodoCreateButton.css"

export const TodoCreateButton = () => {
  return (
    <div className='TodoCreateButton'>
       <Button variant="contained">Crear tarea</Button>
    </div>
   
  )
}
