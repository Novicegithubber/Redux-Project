import React, { useState } from "react";
import "./AddTask.css";
import { useDispatch } from "react-redux";
import { saveTodo, setFilter } from "../../features/todoSlice";

const AddTask = () => {
  const [addTask, setAddTask] = useState("");
  const dispatch = useDispatch();
  const addToDo = () => {
    dispatch(
      saveTodo({
        item: addTask,
        done: false,
        id: Date.now(),
      })
    );
  };

  return (
    <form
      className="input"
      onSubmit={(e) => {
        e.preventDefault();
        addToDo();
      }}
    >
      <input
        type="text"
        placeholder="Add your todos"
        value={addTask}
        onChange={(e) => setAddTask(e.target.value)}
      />

      <input type="submit" value="add" />
    </form>
  );
};

export default AddTask;
