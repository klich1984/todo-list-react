import { useState } from 'react'
import './App.css'

import CreateTodoButton from '../components/CreateTodoButton/CreateTodoButton'
import EmptyList from '../components/EmptyList/EmptyList'
import TodoCounter from '../components/TodoCounter/TodoCounter'
import TodoItem from '../components/TodoItem/TodoItem'
import TodoList from '../components/TodoList/TodoList'
import TodoSearch from '../components/TodoSearch/TodoSearch'

// lista de todos
const initialTodos = [
  { text: 'Primera Tarea', completed: false },
  { text: 'Segunda Tarea', completed: false },
  { text: 'Tercera Tarea', completed: false },
  { text: 'Cuarta Tarea', completed: false },
]

function App() {
  const [todos, setTodos] = useState(initialTodos)
  const [searchValue, setSearchValue] = useState('')

  const handleChange = (e) => {
    setSearchValue(e.target.value)
  }

  // Complete Todo
  const completeTask = (text) => {
    const searchTodo = [...todos]
    const indexTodo = searchTodo.findIndex((todo) => todo.text === text)
    searchTodo[indexTodo].completed = true
    setTodos(searchTodo)
  }

  // Delete Todo
  const hendleDelete = (text) => {
    let confirmationDelete = window.confirm(`Estas Segur@ de eliminar la tarea: ${text}`)
    if (!confirmationDelete) return

    const copyTodo = [...todos]
    const indexTodo = copyTodo.findIndex((todo) => todo.text === text)
    copyTodo.splice(indexTodo, 1)
    setTodos(copyTodo)
  }

  // Search Todo
  let resultList = []

  if (!searchValue.length >= 1) {
    resultList = todos
  } else {
    resultList = todos.filter((todo) => {
      const todoTex = todo.text.toLocaleLowerCase()
      const searchText = searchValue.toLocaleLowerCase()

      return todoTex.includes(searchText)
    })
  }

  return (
    <main className='todo__container'>
      <TodoCounter todos={todos} />

      <TodoSearch handleChange={handleChange} searchValue={searchValue} />

      <TodoList>
        {resultList.map((todo, index) => (
          <TodoItem
            key={index}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTask(todo.text)}
            hendleDelete={() => hendleDelete(todo.text)}
          />
        ))}
      </TodoList>

      {resultList.length === 0 ? <EmptyList /> : ''}

      <CreateTodoButton />
    </main>
  )
}

export default App
