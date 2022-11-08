import { useReducer, useState } from "react";

const reducer = (state, action) => {
  // action -> {type: 'INCREMENT', payload: 1}
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - action.payload;
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <p>Count : {state} </p>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 1 })}>
        Increment by 1
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", payload: 2 })}>
        Decrement by 2
      </button>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 10 })}>
        Increment by 10
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", payload: 5 })}>
        Decrement by 5
      </button>
    </div>
  );
};

export default App;
