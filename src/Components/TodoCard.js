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
    eliminarTodos
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
