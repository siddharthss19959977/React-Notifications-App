import React from 'react'

function TaskCard(props) {
  return (
    <div>
        <li>
            <span>{props.task.id} - {props.task.name}</span>
            <button onClick={() => props.Delete(props.task.id)} className='delete'>Delete</button>
        </li>
    </div>
  )
}

export default TaskCard;