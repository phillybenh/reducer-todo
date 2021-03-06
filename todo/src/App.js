import React, { useState, useReducer } from "react";
import { initialState, reducer } from "./reducers/reducer";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";

import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [newToDo, setNewToDo] = useState("");

  const handleChange = (e) => {
    setNewToDo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewToDo("");
    dispatch({ type: "NEW_TODO", payload: newToDo });
  };

    const completed = (id) => {
      dispatch({ type: "TOGGLE_COMPLETED", payload: id });
    };

  const clearCompleted = () => {
    dispatch({ type: "CLEARED" });
  };

  console.log("appJS", state)

  return (
    <div className="App">
      <div className="App-header">
        <h1>To Do List</h1>
      </div>
      <ToDoList state={state} dispatch={dispatch} completed={completed} />
      <ToDoForm
        newToDo={newToDo}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        clearCompleted={clearCompleted}
      />
    </div>
  );
}

export default App;
