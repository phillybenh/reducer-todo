import React from "react";
//, { useState, useReducer }

const initialState = {
  todos: [
    {
      item: "Aww geez",
      completed: false,
      id: 3892987589,
    },
    {
      item: "This is hard",
      completed: false,
      id: 38929875890,
    },
  ],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "NEW_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            item: action.payload,
            completed: false,
            id: Date.now(),
          },
        ],
      };

    case "TOGGLE_COMPLETED":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, completed: !todo.completed };
          } else {
            return todo;
          }
        }),
      };
    case "CLEARED":
      return {
        ...state,
        todos: state.todos.filter((todo) => {
          return todo.completed === false;
        }),
      };
    default:
      return state;
  }
};

export { initialState, reducer };
