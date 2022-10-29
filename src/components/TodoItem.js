import './TodoItem.css'

import IconCheck from '../assets/iconComponents/IconCheck'
import IconDelete from '../assets/iconComponents/IconDelete'
import IconEdit from '../assets/iconComponents/IconEdit'

const TodoItem = ({ text }) => {
  return (
    <li className='todo__item--container'>
      <div className='todo__item--left'>
        <span className='todo__item--check todo__color-icon'>
          <IconCheck />
        </span>
        <p className='todo__item--text'>{text}</p>
      </div>
      <div className='todo__item--right'>
        <span className='todo__item--edit todo__color-icon'>
          <IconEdit />
        </span>
        <span className='todo__item--del todo__color-icon'>
          <IconDelete />
        </span>
      </div>
    </li>
  )
}

export default TodoItem
