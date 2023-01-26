import * as React from 'react';
import Typography from '@mui/material/Typography';

export function TodoCounter({totalTodos, completedTodos, loading}) {
  return (
    <>
      <Typography gutterBottom variant="h4" component="div" style={{ textAlign: 'center'}} >
        Se han completado {completedTodos} de {totalTodos} tareas de tu lista.
      </Typography>      
    </>
  );
}