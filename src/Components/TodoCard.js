import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { TodoCreateButton } from './TodoCreateButton'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoCounter } from './TodoCounter';


export function TodoCard({
    completados,
    total,
    todos,
    searchValue,
    setSearchValue, 
    completarTodos,
    eliminarTodos, 
    loading,
    error
}) {

    return (
        <Card sx={{ maxWidth: 500 }}>

            <CardContent>

                <TodoCounter
                    completados={completados}
                    total={total}
                />

                <br></br>
                <>
                    <TodoSearch
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                    />

                    <TodoList>
                        {error && <p>Estamos cargando, espera por favor...</p>}
                        {loading && <p>Estamos cargando, espera por favor...</p>}
                        {(!loading && !todos.length) && <p>Crea tu primer tarea</p>}
                        

                        {todos.map(({id, text, completed}) => {
                            return <TodoItem   
                                    key={id} 
                                    text={text} 
                                    completed={completed}
                                    completarTodos={completarTodos}
                                    eliminarTodos={eliminarTodos}
                                    />
                        })}

                    </TodoList>
                </>

            </CardContent>

            <CardActions>
                <TodoCreateButton />
            </CardActions>

        </Card>
    );
}
