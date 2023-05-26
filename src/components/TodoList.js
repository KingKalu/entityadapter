import { useSelector, useDispatch } from "react-redux";
import { todoSelector, clearTodos, restoreTodo } from "../store/todoSlice";
import Todo from "./Todo";

function TodoList() {
  const dispatch = useDispatch();
  const allTodos = useSelector(todoSelector.selectEntities);
  const todoCount = useSelector(todoSelector.selectTotal);
  const deletedTodos = useSelector((state) => state.todos.deletedTodos);

  const todoList = Object.entries(allTodos).map(([key, value]) => {
    return key === value.id && (
      <Todo
        key={value.id}
        id={value.id}
        completed={value.completed}
        text={value.todo}
      />
    );
  });
  const restore = (todo) => {
    dispatch(restoreTodo(todo))
  };
  const deleteList = deletedTodos.map((item) => (
    <div className="deleted-todo" key={item.id}>
      <span>{item.todo}</span>
      <button onClick={() => restore(item)}>Restore</button>
    </div>
  ));
  return (
    <div className="todo-list">
      <h3>Your Todos:</h3>
      <h4>Count:{todoCount}</h4>
      <button className="delete-btn" onClick={() => dispatch(clearTodos())}>
        Clear All Todos
      </button>
      <div>{todoList}</div>
      <h3>Deleted Todos</h3>
      <div>{deleteList}</div>
    </div>
  );
}

export default TodoList;
