import { createSlice, createEntityAdapter} from "@reduxjs/toolkit";

const todoAdapter = createEntityAdapter();
export const todoSelector = todoAdapter.getSelectors(state => state.todos);

const todoSlice = createSlice({
  name: "todos",
  initialState: todoAdapter.getInitialState({
    deletedTodos:[]
  }),
  reducers: {
    addTodo: todoAdapter.addOne,
    addTodos: todoAdapter.addMany,
    deleteTodo: (state, action) =>{
      state.deletedTodos.push(state.entities[action.payload])
      todoAdapter.removeOne(state, action)
    },
    clearTodos: todoAdapter.removeAll,
    updateTodo: todoAdapter.updateOne,
    restoreTodo: (state, action) => {
      todoAdapter.addOne(state, action);
      state.deletedTodos = state.deletedTodos.filter(item => item.id !== action.payload.id)
    }
  },
});

export const {
  addTodo,
  addTodos, 
  deleteTodo, 
  clearTodos, 
  updateTodo, 
  restoreTodo} = todoSlice.actions;
export default todoSlice.reducer