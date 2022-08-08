import React from 'react'
import './TodoItem.css'

export const TodoItem = (props) => {
  const onComplete = () => {

  }

  const onDelete = () => {

  }

  return (
    <li className="TodoItem">
      <span onClick={onComplete} className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={onDelete}>
        X
      </span>
    </li>
  )
}
