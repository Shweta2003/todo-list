import React from 'react'
import Todoitem from '../mycomponents/todo'

export default function Todos(prop) {
  const newarr = prop.todos.filter(item => (item.name === prop.username))
  const n = <p className='no-task'> No tasks pending.. add your first task </p>;

  return (
    <div className='s'>
    <h1 className='name-of-user'> {prop.username}'S todo-LIST </h1>
    <hr></hr>
    {
      newarr.length === 0? n
      :
        newarr.map((todo) => {
        let k = todo.id;
        return (
                <Todoitem todo={todo}  key = {k} onDelete={prop.onDelete} />
        )})
      }
    </div>
  )
}
