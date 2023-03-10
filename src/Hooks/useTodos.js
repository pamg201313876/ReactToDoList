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
        const todoIndex = todos.findIndex(todo => todo.id === todoText);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos);
    }

    const editarTodos = (todoId, todoText) => {
        const todoIndex = todos.findIndex(todo => todo.id === todoId);
        var todoEdit = todos.find( (todo) =>todo.id === todoId);
        console.log("todoedites " +todoEdit)
        todoEdit.text = todoText;        
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1, todoEdit)
        console.log(newTodos)
        saveTodos(newTodos);
    }

    const completarTodos = (todoText) => {        
        const index = todos.findIndex(todo => todo.id === todoText);
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
        sincronize,
        editarTodos
    };
}



export { useTodos };