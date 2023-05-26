import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodos } from '../store/todoSlice'
import { nanoid } from '@reduxjs/toolkit'

function AddTodo() {
  const dispatch = useDispatch()
  const [text, setText] = useState("")
  const submit = () => {
    if(text.length > 0){
      const items = text.split(",");
      const data = items.map(item => ({id:nanoid(), todo:item, completed: false}))
      dispatch(addTodos(data))
    }
  }
  return (
    <div className="add-todo">
      <p>To add multiple items write them with comma separated</p>
      <p>
        <i>eg: Eggs, Bread, Han, Cheese</i>
      </p>
      <input value={text} onChange={e => setText(e.target.value)}/>
      <button onClick={submit}>Add Todo</button>
    </div>
  );
};

export default AddTodo