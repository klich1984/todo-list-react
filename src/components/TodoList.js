import './TodoList.css'

const TodoList = ({ children }) => {
  return (
    <section className='todo__list--container'>
      <ul>{children}</ul>
    </section>
  )
}

export default TodoList
