import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoCounter } from './TodoCounter';
import { TodoError } from './TodoError';
import { TodoEmpty } from './TodoEmpty';
import { TodoEmptySearchResults } from './TodoEmptySearchResults';
import { TodoLoading } from './TodoLoading';
import { ChangeAlert } from './ChangeAlert';
import { TodoCreateButton } from './TodoCreateButton'
import { useTodos } from './../Hooks/useTodos';
import { useNavigate } from 'react-router-dom'



export const TodoHome = () => {

    const navigation = useNavigate();

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
        sincronize,
        editarTodos
    } = useTodos();

    const redirectCreate = () => {
        navigation('/create')
    }

    const redirecEdit = () => {
        navigation('/edit')
    }

    return (

        <>
            <Card className='main-div'>

                <CardContent>
                    <TodoCounter
                        totalTodos={totalTodos}
                        completedTodos={completedTodos}
                        loading={loading}
                    />
                    <br></br>
                    <TodoSearch
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                        loading={loading}
                        totalTodos={totalTodos}

                    />

                    <>

                        {/*Acá usamos renderprops solo por motivos pedagógicos*/}
                        <TodoList
                            error={error}
                            loading={loading}
                            todosFiltrados={todosFiltrados}
                            totalTodos={totalTodos}
                            onError={() => <TodoError />}
                            onLoading={() => <TodoLoading />}
                            onEmptyTodos={() => <TodoEmpty />}
                            onEmptySearchResults={() => <TodoEmptySearchResults busqueda={searchValue} />}

                            render={(todo) => (
                                <TodoItem
                                    todo={todo}
                                    key={todo.id}
                                    completarTodos={completarTodos}
                                    eliminarTodos={eliminarTodos}                                                                 
                                />
                            )}
                        />

                    </>

                </CardContent>

                <CardActions>
                    <TodoCreateButton redirectCreate={redirectCreate} />
                </CardActions>

                <ChangeAlert sincronizeFunction={sincronize} />

            </Card>


        </>
    )
}
