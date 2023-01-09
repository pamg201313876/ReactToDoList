import { TodoCard } from './Components/TodoCard'
import * as React from 'react';
import { TodoProvider } from './Components/TodoContext';

function App() {



  return (
    <TodoProvider>
      <TodoCard />
    </TodoProvider>
  );
}

export default App;
