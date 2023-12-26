import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleTodo } from "../redux/Acition";

const TODO = () => {
  let dispatch = useDispatch();
  let data = useSelector((store) => store.todo);
  console.log(data);

  return (
    <div>
      {data.map((todo) => {
        return (
          <div>
            <h1>{todo.task}</h1>
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              remove
            </button>
            {todo.isCompleted ? (
              <button onClick={() => dispatch(toggleTodo(todo.id))}>
                pending
              </button>
            ) : (
              <button onClick={() => dispatch(toggleTodo(todo.id))}>
                complete
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TODO;
