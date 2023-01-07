import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { TodoCreateButton } from './TodoCreateButton'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';


export function TodoCard(props) {
    return (
        <Card sx={{ maxWidth: 500 }}>

            <CardContent>
                <>
                    <Typography gutterBottom variant="h4" component="div">
                        Se han completado {props.finalizados} / {props.total} tareas de tu lista.
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                        A continuación encontrarás una lista de tareas que se iran tachando conforme las realizas
                    </Typography>
                </>
                <br></br>
                <>
                    <TodoSearch/>

                    <TodoList>
                        {props.tareas.map((item)=>{
                           return <TodoItem key={item.id} text={item.text} />
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
