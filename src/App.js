import React, { useEffect } from "react";
import "./App.css";
import AddTask from "./app/components/AddTask";
import ListTask from "./app/components/ListTask";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "./features/todoSlice";
import { Button, List, ListItem } from "@material-ui/core";

function App() {
  const todoList = useSelector((state) => {
    const all = state.todos.todoList;
    const filter = state.todos.filter;
    if (filter === "done") {
      return all.filter((todo) => todo.done === true);
    }
    if (filter === "notDone") {
      return all.filter((todo) => todo.done === false);
    }
    return all;
  });

  const dispatch = useDispatch();``

  const filterAll = (filter) => {
    dispatch(setFilter(filter));
  };
  return (
    <div className="App">
      <div className="app--container">
        <div className="app--todocontainer">
          {todoList?.map((item) => (
            <ListTask
              key={item.id}
              name={item.item}
              done={item.done}
              id={item.id}
              description={item.description}
            />
          ))}
        </div>
        <List className="list">
          <ListItem className="list-item">
            <Button onClick={() => filterAll("all")}>all</Button>
          </ListItem>
          <ListItem className="list-item">
            <Button onClick={() => filterAll("done")}>done</Button>
          </ListItem>
          <ListItem className="list-item">
            <Button onClick={() => filterAll("notDone")}>not done</Button>
          </ListItem>
        </List>
        <AddTask />
      </div>
    </div>
  );
}

export default App;
