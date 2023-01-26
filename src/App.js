import * as React from 'react';
import { useTodos } from './Hooks/useTodos';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { TodoCreateButton } from './Components/TodoCreateButton'
import { TodoSearch } from './Components/TodoSearch'
import { TodoList } from './Components/TodoList';
import { TodoItem } from './Components/TodoItem';
import { TodoCounter } from './Components/TodoCounter';
import { TodoModal } from './Components/TodoModal'
import { TodoError } from './Components/TodoError';
import { TodoEmpty } from './Components/TodoEmpty';
import { TodoEmptySearchResults } from './Components/TodoEmptySearchResults';
import { TodoLoading } from './Components/TodoLoading';
import { ChangeAlert } from './Components/ChangeAlert';
import "./Styles/main.css"


function App() {
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
        showModal,
        sincronize
    } = useTodos();

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
                            onEmptySearchResults={() => <TodoEmptySearchResults busqueda={searchValue}/>}      
                                                  
                            render={({ id, text, completed }) => (
                                <TodoItem
                                    key={id}
                                    text={text}
                                    completed={completed}
                                    completarTodos={() => completarTodos(text)}
                                    eliminarTodos={() => eliminarTodos(text)}
                                />
                            )}
                        />

                        {/* <TodoList>
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
                        </TodoList> */}
                    </>

                </CardContent>

                <CardActions>
                    <TodoCreateButton setShowModal={setShowModal} />
                </CardActions>
            </Card>


            <TodoModal
                agregarTodo={agregarTodo}
                showModal={showModal}
                setShowModal={setShowModal}
            />

            <ChangeAlert sincronizeFunction={sincronize}/>


        </>
    );
}

export default App;
