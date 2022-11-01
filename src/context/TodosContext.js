import { createContext, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const TodoContext = createContext()

const TodoProvider = ({ children }) => {
  // Logica
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
  const handleDelete = (text) => {
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

  const data = {
    todos,
    saveTodos,
    loading,
    error,
    handleChange,
    handleDelete,
    completeTask,
    resultList,
    searchValue,
  }
  //return
  return <TodoContext.Provider value={data}>{children}</TodoContext.Provider>
}

export { TodoProvider }
export default TodoContext
