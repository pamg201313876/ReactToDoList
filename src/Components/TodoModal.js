import PortalReactDOM from 'react-dom'
import React from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import "./../Styles/TodoCreateButton.css"
import { TodoContext } from './TodoContext';



function TodoModal() {

    const { agregarTodo,  showModal, setShowModal } = React.useContext(TodoContext);
    
    const [texto, setTexto] = React.useState("");

    const cerrarModal = () => {
        setShowModal(false)
        setTexto("")
    }

    const onTextChange = (event) => {
        setTexto(event.target.value)
    }

    const guardar = () => {
        agregarTodo(texto)       
        cerrarModal()
    }

    return (
        <Modal open={showModal}>
            <Card sx={{ maxWidth: 300 }}>

                <CardContent>
                    <h2>Crear nueva Tarea</h2>
                    <TextField onChange={ onTextChange } value={texto} fullWidth multiline placeholder='Ingresa el contenido de tu tarea' />
                </CardContent>

                <CardActions>
                    <div className='TodoCreateButton'>
                        <Button onClick={cerrarModal} variant="contained" color="secondary" >Cancelar</Button>
                        <br />
                        <Button onClick={guardar} variant="contained" color="primary" >Guardar</Button>
                    </div>
                </CardActions>
            </Card>

        </Modal>
    )
}

export { TodoModal }