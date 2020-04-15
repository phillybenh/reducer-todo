import React from "react";

const ToDo = (props) => {


  console.log("to do", props)

  return (
    <div class="ToDo">
      <input type="checkbox" onClick={() => props.completed(props.todo.id)} />
      {props.todo.item}
    </div>
  );
};

export default ToDo;
