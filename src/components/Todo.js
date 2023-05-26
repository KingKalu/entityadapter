import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, updateTodo } from '../store/todoSlice';

function Todo(probs) {
  const dispatch = useDispatch();
  const toggle = ()  => {
    dispatch(updateTodo({id:probs.id, changes:{completed: !probs.completed}}))
  }

  const deleteItem = () => {
    dispatch(deleteTodo(probs.id));
  }
  return (
    <div className='todo'>
          <input type="checkbox" value={probs.completed} onChange={toggle} />
          <span>{probs.text}</span>
          <button onClick={deleteItem}>X</button>

    </div>
  )
}

export default Todo