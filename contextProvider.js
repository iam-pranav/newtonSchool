import { useContext } from "react";
import "./App.css";
import CounterProvider, { CounterContext } from "./context/CounterProvider";

const ComponentC = () => {
  const increment = useContext(CounterContext);
  return (
    <div className="componentC">
      <h3>Component C </h3>
      <button onClick={increment}>Increment from Component C</button>
    </div>
  );
};

const ComponentB = () => {
  return (
    <div className="componentB">
      <h3>Component B </h3>
      <ComponentC />
    </div>
  );
};

const ComponentA = () => {
  return (
    <div className="componentA">
      <h3>Component A </h3>
      <ComponentB />
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <CounterProvider>
        <h1>App Component</h1>
        <ComponentA />
      </CounterProvider>
    </div>
  );
};

// increment() -> setCount(count + 1);

export default App;


// src/context/CounterProvider.jsx

import { useState } from "react";
import { createContext } from "react";

// Create a context
export const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  return (
    <CounterContext.Provider value={increment}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
