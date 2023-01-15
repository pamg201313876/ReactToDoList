import * as React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Search from '@mui/icons-material/Search';


export const TodoSearch = ({searchValue, setSearchValue, loading} ) => {  
  
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
        disabled={loading}
        placeholder= {loading? 'Por favor espere...' : 'Ingresa lo que deseas buscar'}
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
