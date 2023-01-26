import React from 'react'
import useLocalStorage from './useLocalStorage'


function useTodos() {

    const [todos,
        saveTodos,
        loading,
        error,
        sincronize 
    ] = useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = React.useState('');
    const completedTodos = todos ? todos.filter(todo => todo.completed).length : 0;
    const [showModal, setShowModal] = React.useState(false);
    const totalTodos = todos ? todos.length : 0;

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
        newTodos.push({ id: newTodos.length, text: todoText, completed: false });
        saveTodos(newTodos);
    }

    return {

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
        setShowModal,
        sincronize
    };
}



export { useTodos };