import * as React from 'react';
import Typography from '@mui/material/Typography';

export function TodoCounter({totalTodos, completedTodos}) {
  return (
    <>
      <Typography gutterBottom variant="h4" component="div">
        Se han completado {completedTodos} de {totalTodos} tareas de tu lista.
      </Typography>      
    </>
  );
}