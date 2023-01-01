import React from 'react'

export default function Todoitem({todo, onDelete}) {
  return (
    <div className='todo1'>
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
        <button className='delete' onClick={() => {
            onDelete(todo);
            }}>
            <p>DELETE</p>
        </button>
    </div>
  )
}
