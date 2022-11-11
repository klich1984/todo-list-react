import { useContext, useState } from 'react'
import TodoContext from '../../context/TodosContext'
import './TodoForm.css'

const TodoForm = () => {
  const [newTodoValue, setNewTodoValue] = useState('')
  const [active, setActive] = useState(true)

  const { addTodo, createTodoModal } = useContext(TodoContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(newTodoValue)
    createTodoModal()
  }

  const handleChange = (e) => {
    const value = e.target.value

    if (value) {
      setActive(false)
    } else {
      setActive(true)
    }
    setNewTodoValue(value)
  }

  const handleCancel = () => {
    createTodoModal()
  }

  return (
    <div className='todo__form--container'>
      {/* <h3>{dataToEdit ? 'Editar' : 'Agregar'}</h3> */}
      <h3>Agregar Nueva Tarea</h3>
      <form onSubmit={handleSubmit} className='todo__form'>
        <textarea
          cols='40'
          rows='10'
          className='todo__form--value'
          type='text'
          name='task'
          placeholder='Agrega Tarea'
          onChange={handleChange}
          value={newTodoValue}
        ></textarea>
        <div className='form__buttons--container'>
          <input
            type='button'
            value='Cancelar'
            onClick={handleCancel}
            className='todo__form--cancel'
          />
          <input
            type='submit'
            value='Enviar'
            className={`todo__form--submit ${active ? 'disabled' : ''}`}
            disabled={active ? true : false}
          />
        </div>
      </form>
    </div>
  )
}

export default TodoForm
