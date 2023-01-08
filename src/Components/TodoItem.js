import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Delete from '@mui/icons-material/Delete';


export const TodoItem = ({
  id, 
  text, 
  completarTodos, 
  completed, 
  eliminarTodos
}) => {

  const onComplete = () => {
    completarTodos(text)
  }

  const onDelete = () => {
    eliminarTodos(text)
  }

  return (
    <ListItem
      key={id}
      disablePadding
      secondaryAction={
        <IconButton onClick={onDelete} edge="end" aria-label="comments">
          <Delete />
        </IconButton>
      }
    >
      <ListItemButton dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            tabIndex={-1}
            checked={completed}
            disableRipple
            onChange={onComplete}
          />
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  )
}
