import { useState } from 'react'
import './App.css'

import CreateTodoButton from './components/CreateTodoButton'
import TodoCounter from './components/TodoCounter'
import TodoItem from './components/TodoItem'
import TodoList from './components/TodoList'
import TodoSearch from './components/TodoSearch'

// lista de todos
const initialTodos = [
  { text: 'Primera Tarea', completed: false },
  { text: 'Segunda Tarea', completed: false },
  { text: 'Tercera Tarea', completed: false },
  { text: 'Cuarta Tarea', completed: false },
]

function App() {
  const [todos, setTodos] = useState(initialTodos)

  const completeTask = (text) => {
    const searchTodo = [...todos]
    const indexTodo = searchTodo.findIndex((todo) => todo.text === text)
    searchTodo[indexTodo].completed = true
    setTodos(searchTodo)
    console.log(indexTodo, searchTodo)
  }
  return (
    <main className='todo__container'>
      <TodoCounter todos={todos} />

      <TodoSearch />

      <TodoList>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTask(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </main>
  )
}

export default App
