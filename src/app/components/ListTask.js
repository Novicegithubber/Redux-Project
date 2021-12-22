import React from "react";
import "./ListTask.css";
import Checkbox from "@material-ui/core/Checkbox";
import { useDispatch } from "react-redux";
import { setCheck } from "../../features/todoSlice";

const ListTask = ({ name, done, id, description }) => {
  const dispatch = useDispatch();
  const handleCheck = () => {
    dispatch(setCheck(id));
  };

  return (
    <div className="listtask">
      <Checkbox
        checked={done}
        color="primary"
        onChange={handleCheck}
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      <p className={done ? "todoitem--done" : null}>{name}</p>
    </div>
  );
};

export default ListTask;
