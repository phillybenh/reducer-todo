import React from "react";
import ToDo from "./ToDo";


const ToDoList = (props) => {

  return (
    <div className="wrapper">

      <div class="list">
        {props.state.todos.map((todo) => (
          <ToDo key={todo.id} todo={todo} dispatch={props.dispatch} completed={props.completed} />
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
