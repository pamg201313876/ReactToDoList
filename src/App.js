import { TodoCard } from './Components/TodoCard'

const todos = [
  {id:1, text: 'Encender la computadora', completed: false },
  {id:2, text: 'Abrir Excel', completed: false },
  {id:3, text: 'Realizar una Suma', completed: false },
  {id:4, text: 'Guardar el archivo', completed: false },
]

function App() {
  return (  
      <TodoCard tareas={todos} finalizados={0} total={todos.length} />    
  );
}

export default App;
