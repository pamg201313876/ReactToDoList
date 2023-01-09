import * as React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Search from '@mui/icons-material/Search';
import { TodoContext } from './TodoContext';


export const TodoSearch = () => {
  
  const {searchValue, setSearchValue} = React.useContext(TodoContext);
  
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
