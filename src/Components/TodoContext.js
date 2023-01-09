import React from 'react'
import useLocalStorage from './../Hooks/useLocalStorage'

const TodoContext = React.createContext();

function TodoProvider(props) {

    const [todos,
        saveTodos,
        loading,
        error
    ] = useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = React.useState('');
    const completedTodos = todos.filter(todo => todo.completed).length;
    const [showModal, setShowModal] = React.useState(false);
    const totalTodos = todos.length;

    let todosFiltrados = [];

    if (searchValue) {
        todosFiltrados = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));        
    } else {
        todosFiltrados = todos;
    }

    const eliminarTodos = (todoText) => {
        //const newTodos = todos.filter(todo => todo.text !== todoText);
        const todoIndex = todos.findIndex(todo => todo.text === todoText);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos);
    }

    const completarTodos = (todoText) => {
        // const newTodos = todos.map((todo) => {
        //   if (todo.text === todoText) {
        //     return { ...todo, completed: !todo.completed }
        //   }
        //   return todo;
        // })
        const index = todos.findIndex(todo => todo.text === todoText);
        const newTodos = [...todos]
        newTodos[index].completed = !newTodos[index].completed;
        saveTodos(newTodos);
    }

    const agregarTodo = (todoText) => {
        const newTodos = [...todos]
        newTodos.push({id: newTodos.length, text: todoText, completed: false});
        saveTodos(newTodos);
    }

    return (
        <TodoContext.Provider value={{
            error,
            loading,
            todosFiltrados,
            searchValue,
            setSearchValue,
            completedTodos,
            totalTodos,
            completarTodos,
            eliminarTodos,
            agregarTodo,
            showModal,
            setShowModal
        }}>
            {props.children}
        </TodoContext.Provider >
    );
}



export { TodoContext, TodoProvider };