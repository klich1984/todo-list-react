// import './App.css';

import CreateTodoButton from "./components/CreateTodoButton";
import TodoCounter from "./components/TodoCounter";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";

// lista de todos
const todos = [
  { text: 'Primera Tarea', completed: false },
  { text: 'Segunda Tarea', completed: false },
  { text: 'Tercera Tarea', completed: false },
  { text: 'Cuarta Tarea', completed: false }
]

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {
          todos.map( (todo, index)  => (
            <TodoItem key={index} text={todo.text}/>
          )
          )
        }
      </TodoList>
      <CreateTodoButton />
    </>
  )
}

export default App;
