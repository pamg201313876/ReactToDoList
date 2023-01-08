import * as React from 'react';
import Typography from '@mui/material/Typography';


export function TodoCounter({completados, total}) {
  return (
    <>
      <Typography gutterBottom variant="h4" component="div">
        Se han completado {completados} de {total} tareas de tu lista.
      </Typography>      
    </>
  );
}