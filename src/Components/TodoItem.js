import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Delete from '@mui/icons-material/Delete';
import Edit from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom'


export const TodoItem = ({
  todo,
  completarTodos,
  eliminarTodos
}) => {


  const { id, text, completed } = todo;

  const navigate = useNavigate();

  const onComplete = () => {
    completarTodos(id)
  }

  const onDelete = () => {
    eliminarTodos(id)
  }

  const onEdit = () => {    
    navigate('/edit/' + id)
  }

  return (
    <ListItem
      key={id}
      disablePadding
      secondaryAction={
        <>
          <IconButton onClick={onDelete} edge="end" aria-label="comments">
            <Delete />
          </IconButton>

          <IconButton onClick={onEdit} edge="end" aria-label="comments">
            <Edit />
          </IconButton>
        </>
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
