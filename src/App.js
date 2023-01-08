import { TodoCard } from './Components/TodoCard'
import * as React from 'react';

// const defaultTodos = [
//   { id: 1, text: 'Encender la computadora', completed: false },
//   { id: 2, text: 'Abrir Excel', completed: false },
//   { id: 3, text: 'Realizar una Suma', completed: false },
//   { id: 4, text: 'Guardar el archivo', completed: false },
// ];


function App() {

  var localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  if(!localStorageTodos){ 
    localStorage.setItem('TODOS_V1',JSON.stringify([]));
    localStorageTodos =[];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }



  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  let todosFiltrados = [];

  if (searchValue) {
    todosFiltrados = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));
  } else {
    todosFiltrados = todos;
  }


  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1', stringifiedTodos);
    setTodos(newTodos);
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

  return (
    <TodoCard
      todos={todosFiltrados}
      setTodos={setTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      completados={completedTodos}
      total={totalTodos}
      completarTodos={completarTodos}
      eliminarTodos={eliminarTodos}
    />
  );
}

export default App;
