import './TodoSearch.css'
import IconSearch from '../../assets/iconComponents/IconSearch'
import { useContext } from 'react'
import TodoContext from '../../context/TodosContext'

const TodoSearch = () => {
  const { searchValue, handleChange } = useContext(TodoContext)

  return (
    <div className='todo__search'>
      <input
        className='todo__search--input'
        placeholder='Buscar una tarea'
        id='search'
        value={searchValue}
        onChange={handleChange}
      />
      <label className='todo__search--btn' htmlFor='search'>
        <IconSearch />
      </label>
    </div>
  )
}

export default TodoSearch
