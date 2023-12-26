import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/Acition";
import TODO from "./TODO";

const AddTodo = () => {
  let [task, setTask] = useState();

  let dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    let todo = {
      task: task,
      id: Date.now(),
      isCompleted: false,
    };
    dispatch(addTodo(todo));
    setTask("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input type="submit" value="Add Todo" />
      </form>
      <TODO />
    </div>
  );
};

export default AddTodo;
