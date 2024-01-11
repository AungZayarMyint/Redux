import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../store/reducer/todo";

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.data);
  const isLoading = useSelector((state)=>state.todo.isLoading)
  const getTodoHandler = () => {
    dispatch(getTodos());
  };

  return (
    <>
      <button className="welcome-btn" onClick={getTodoHandler}>
        Get Todo
      </button>
      <section>
        {
            isLoading && <p>Getting todos....</p>
        }
        {!isLoading && todos.map((todo) => (
          <p>{todo.title}</p>
        ))}
        {
            !isLoading && todos.length < 1 && <p>Click the above button ("Get Todo") to get yoour todos</p>
        }
      </section>
    </>
  );
};

export default Todo;
