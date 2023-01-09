import * as React from 'react';
import Typography from '@mui/material/Typography';
import { TodoContext } from './TodoContext';


export function TodoCounter() {

  const {totalTodos, completedTodos} = React.useContext(TodoContext);

  return (
    <>
      <Typography gutterBottom variant="h4" component="div">
        Se han completado {completedTodos} de {totalTodos} tareas de tu lista.
      </Typography>      
    </>
  );
}