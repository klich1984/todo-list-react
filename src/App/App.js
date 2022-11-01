import { useState } from 'react'
import './App.css'

import CreateTodoButton from '../components/CreateTodoButton/CreateTodoButton'
import EmptyList from '../components/EmptyList/EmptyList'
import TodoCounter from '../components/TodoCounter/TodoCounter'
import TodoItem from '../components/TodoItem/TodoItem'
import TodoList from '../components/TodoList/TodoList'
import TodoSearch from '../components/TodoSearch/TodoSearch'
import useLocalStorage from '../hooks/useLocalStorage'

// lista de todos
// const initialTodos = [
//   { text: 'Primera Tarea', completed: false },
//   { text: 'Segunda Tarea', completed: false },
//   { text: 'Tercera Tarea', completed: false },
//   { text: 'Cuarta Tarea', completed: false },
// ]

function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', [])

  const [searchValue, setSearchValue] = useState('')

  const handleChange = (e) => {
    setSearchValue(e.target.value)
  }

  const completeTask = (text) => {
    const searchTodo = [...todos]
    const indexTodo = searchTodo.findIndex((todo) => todo.text === text)
    searchTodo[indexTodo].completed = true
    saveTodos(searchTodo)
  }

  // Delete Todo
  const hendleDelete = (text) => {
    let confirmationDelete = window.confirm(`Estas Segur@ de eliminar la tarea: ${text}`)
    if (!confirmationDelete) return

    const copyTodo = [...todos]
    const indexTodo = copyTodo.findIndex((todo) => todo.text === text)
    copyTodo.splice(indexTodo, 1)
    saveTodos(copyTodo)
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
        {error && (
          <p style={{ color: 'red' }}>
            Ups!! ha Ocurrido un <b>error</b>
          </p>
        )}
        {loading && (
          <p style={{ color: 'blue', fontWeight: 'bold' }}>Cargando Datos...</p>
        )}

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

      {!resultList.length && !loading && <EmptyList />}

      <CreateTodoButton />
    </main>
  )
}

export default App
