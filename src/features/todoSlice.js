import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  todoList: [{ done: false, id: 1640167837396, item: "asdad" }],
  filter: null,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload);
    },

    setCheck: (state, action) => {
      state.todoList.map((item) => {
        if (action.payload === item.id) {
          if (item.done === true) {
            item.done = false;
          } else {
            item.done = true;
          }
        }
      });
    },
    setFilter: {
      reducer(state, action) {
        console.log(current(state));
        state.filter = action.payload;
      },
    },
  },
});

export const { saveTodo, setCheck, setFilter } = todoSlice.actions;


export default todoSlice.reducer;
