import React, { useState, useReducer } from "react";

const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589,
  },
  { item: "Learn about reducers2", completed: false, id: 38929875890 },
];
const reducer = (state, action) => {
  return state;
};

export {initialState, reducer};
