import React from "react";

const ToDoForm = (props) => {


    return (
      <div className="ToDoForm">
        <form onSubmit={props.handleSubmit} class="form">
          <input
            type="text"
            value={props.newToDo}
            name="newToDo"
            onChange={props.handleChange}
            className="input"
          />
          <button class="addBTN">Add Task</button>
        </form>
        <button class="clearBTN" onClick={props.clearCompleted}>
          Clear Completed
        </button>
      </div>
    );
}

export default ToDoForm;



// newToDo = { newToDo };
// handleChange = { handleChange };
// handleSubmit = { handleSubmit };
// clearCompleted = { clearCompleted };