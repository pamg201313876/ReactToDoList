import * as React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Search from '@mui/icons-material/Search';


export const TodoSearch = ({searchValue, setSearchValue, loading, totalTodos} ) => {  
  
  const onSearchValueChange = (event) => {    
    setSearchValue(event.target.value)
  }

  return (
    <>
      <TextField
        id="busqueda"
        onChange={onSearchValueChange}
        fullWidth
        value={searchValue}
        disabled={loading || totalTodos === 0}
        placeholder= {loading? 'Por favor espere...' :    totalTodos > 0  ? 'Ingresa lo que deseas buscar' : 'Antes de poder realizar una búsqueda, por favor crea una tarea'}
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
