import './App.css'

import CreateTodoButton from '../components/CreateTodoButton/CreateTodoButton'
import EmptyList from '../components/EmptyList/EmptyList'
import TodoCounter from '../components/TodoCounter/TodoCounter'
import TodoItem from '../components/TodoItem/TodoItem'
import TodoList from '../components/TodoList/TodoList'
import TodoSearch from '../components/TodoSearch/TodoSearch'
import { useContext } from 'react'
import TodoContext from '../context/TodosContext'
import Modal from '../components/Modal/Modal'
import TodoForm from '../components/TodoForm/TodoForm'

function App() {
  const { error, loading, resultList, completeTask, handleDelete, modal } =
    useContext(TodoContext)
  return (
    <main className='todo__container'>
      <TodoCounter />

      <TodoSearch />

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
            handleDelete={() => handleDelete(todo.text)}
          />
        ))}
      </TodoList>

      {!resultList.length && !loading && <EmptyList />}

      <CreateTodoButton />

      {modal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </main>
  )
}

export default App
