import './TodoItem.css'

import IconCheck from '../../assets/iconComponents/IconCheck'
import IconDelete from '../../assets/iconComponents/IconDelete'
// import IconEdit from '../../assets/iconComponents/IconEdit'

const TodoItem = ({ text, completed, onComplete, handleDelete }) => {
  return (
    <li className='todo__item--container'>
      <div className='todo__item--left'>
        <span
          className={`todo__item--check todo__color-icon ${completed ? 'completed' : ''}`}
          onClick={onComplete}
        >
          <IconCheck />
        </span>
        <p className={`todo__item--text ${completed ? 'completed' : ''}`}>{text}</p>
      </div>
      <div className='todo__item--right'>
        {/* <span className='todo__item--edit todo__color-icon'>
          <IconEdit />
        </span> */}
        <span className='todo__item--del todo__color-icon' onClick={handleDelete}>
          <IconDelete />
        </span>
      </div>
    </li>
  )
}

export default TodoItem
