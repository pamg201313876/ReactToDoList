import React from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import "./../Styles/TodoCreateButton.css"
import { useTodos } from './../Hooks/useTodos';
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import useLocalStorage from './../Hooks/useLocalStorage'



function TodoModal() {

    const [todos] = useLocalStorage('TODOS_V1', []);      

    const { agregarTodo, editarTodos } = useTodos();

    const [texto, setTexto] = React.useState("");
    const [id, setId] = React.useState("");

    const navigation = useNavigate();
    const { slug } = useParams();
    const location = useLocation();
    const isEdit = location.pathname.startsWith('/edit');



    React.useEffect(() => {

        var currentTodo = null;

        if (isEdit) {

            currentTodo = (todos.find(todo => todo.id === parseInt(slug)))

            if (currentTodo) {
                console.log(currentTodo)
                setTexto(currentTodo.text)
                setId(currentTodo.id)
            }
        }


    }, [todos])




    const onTextChange = (event) => {
        setTexto(event.target.value)
    }

    const guardar = () => {
        agregarTodo(texto)
        navigation("/")
    }

    const editar = () => {
        editarTodos(id, texto)
        navigation("/")
    }

    return (
        <Card sx={{ maxWidth: "full", maxHeight: "full", minHeight: 350 }}>

            <CardContent sx={{ maxWidth: "full", maxHeight: "full" }}>
                <center> <h2>Crear nueva Tarea</h2></center>
                <TextField
                    onChange={onTextChange}
                    value={texto}
                    multiline
                    rows={4}
                    fullWidth
                    placeholder='Ingresa el contenido de tu tarea'
                />
            </CardContent>

            <CardActions>
                <div className='TodoCreateButton'>
                    <Button onClick={() => navigation("/")} variant="contained" color="secondary" >Cancelar</Button>
                    <br />
                    {isEdit ?
                        <Button onClick={editar} variant="contained" color="primary" >Editar</Button>
                        :
                        <Button onClick={guardar} variant="contained" color="primary" >Guardar</Button>
                    }
                </div>
            </CardActions>
        </Card>
    )
}

export { TodoModal }