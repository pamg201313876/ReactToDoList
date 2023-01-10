import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { TodoCreateButton } from './TodoCreateButton'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoCounter } from './TodoCounter';
import { TodoContext } from './TodoContext';
import { TodoModal } from './TodoModal'


export function TodoCard() {


    const {
        error,
        loading,
        todosFiltrados,
        completarTodos,
        eliminarTodos,
        totalTodos,
        completedTodos,
        searchValue, 
        setSearchValue,
        setShowModal,
        agregarTodo,  
        showModal
    } = React.useContext(TodoContext);

    return (
        <>
            <Card sx={{ maxWidth: 500 }}>


                <CardContent>
                    <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
                    <br></br>
                    <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
                    <>
                        <TodoList>
                            {error && <p>Hubo un error en el sistema...</p>}
                            {loading && <p>Estamos cargando, espera por favor...</p>}
                            {(!loading && todosFiltrados && !todosFiltrados.length) && <p>Crea tu primer tarea</p>}

                            {todosFiltrados.map((
                                { id,
                                    text,
                                    completed
                                }) => {
                                return <TodoItem
                                    key={id}
                                    text={text}
                                    completed={completed}
                                    completarTodos={completarTodos}
                                    eliminarTodos={eliminarTodos}
                                />
                            }) 
                        }
                        </TodoList>
                    </>

                </CardContent>

                <CardActions>
                    <TodoCreateButton setShowModal={setShowModal} />
                </CardActions>
            </Card>


            <TodoModal agregarTodo={agregarTodo}  showModal={showModal} setShowModal={setShowModal} />
        </>
    );
}
