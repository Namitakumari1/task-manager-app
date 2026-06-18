import React from 'react'

const TaskCard = ({ title, priority, status }) => {
  return (
    <div>
      <h3>{title}</h3>

      <p>Priority: {priority}</p>
      <p>Status: {status}</p>
    </div>
  )
}

export default TaskCard;

