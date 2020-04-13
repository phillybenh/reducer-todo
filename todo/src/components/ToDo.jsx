import React from "react";

const ToDo = (props) => {
  const completed = () => {
    props.dispatch({ type: "TOGGLE_COMPLETED", payload: props.todo });
  };
  
  return (
    <div class="ToDo">
      <input type="checkbox" onClick={completed} />
      {props.todo}
    </div>
  );
};

export default ToDo;
