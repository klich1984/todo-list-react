import './TodoSearch.css'
import IconSearch from '../assets/iconComponents/IconSearch'

const TodoSearch = () => {
  return (
    <div className='todo__search'>
      <input className='todo__search--input' placeholder='Buscar una tarea' id='search' />
      <label className='todo__search--btn' for='search'>
        <IconSearch />
      </label>
    </div>
  )
}

export default TodoSearch
