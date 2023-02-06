import React from 'react'
import Button from '@mui/material/Button';
import "./../Styles/TodoCreateButton.css"

export const TodoCreateButton = ({ redirectCreate }) => {


  return (
    <div className='TodoCreateButton'>
      <Button variant="contained" onClick={redirectCreate} >Crear tarea</Button>
    </div>
  )
}
