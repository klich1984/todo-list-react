import { useContext } from 'react'
import TodoContext from '../../context/TodosContext'
import './CreateTodoButton.css'

const CreateTodoButton = () => {
  const { createTodo, openModal } = useContext(TodoContext)

  return (
    <div className='todo__button--add-container'>
      <button
        className={`todo__button--btn ${openModal ? 'open-modal' : ''}`}
        onClick={createTodo}
      >
        +
      </button>
    </div>
  )
}

export default CreateTodoButton
