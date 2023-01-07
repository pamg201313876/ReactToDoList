import * as React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Search from '@mui/icons-material/Search';


export const TodoSearch = () => {
  return (
    <>
      <TextField
        id="busqueda"        
        fullWidth 
        placeholder='Ingresa lo que deseas buscar'
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
    </>
  );
}
