import { useContext } from 'react'
import TodoContext from '../../context/TodosContext'
import './TodoCounter.css'

const TodoCounter = () => {
  const { todos } = useContext(TodoContext)
  const quantity = todos.length

  const completedTask = todos.filter((todo) => !!todo.completed) // Es equivalente a todo.completed === true

  return (
    <>
      <h2 className='todo__title--counter'>
        Has completado {completedTask.length} de {quantity} Tareas
      </h2>
    </>
  )
}

export default TodoCounter
