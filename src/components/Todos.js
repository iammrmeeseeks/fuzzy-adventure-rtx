import React from 'react'
import { useSelector } from 'react-redux';

function Todos() {

    const todos = useSelector(state => state.todos)
  return (
    <>
        <div>Todos</div>
        {todos.map((item) => (<div key={item.id}>{item.text}</div>))}
    </>
    
  )
}

export default Todos