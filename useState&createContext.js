import { createContext, useContext, useState } from "react";
import "./App.css";

const ComponentC = () => {
  const [count, setCount] = useContext(Counter);

  // useContext -> [count, setCount]
  return (
    <div className="componentC">
      <h3>Component C : {count} </h3>
      <button onClick={() => setCount(count + 1)}>
        Increment (Component C)
      </button>
    </div>
  );
};

const ComponentB = () => {
  const [count] = useContext(Counter);
  return (
    <div className="componentB">
      <h3>Component B : {count} </h3>
      <ComponentC />
    </div>
  );
};

const ComponentA = () => {
  const [count] = useContext(Counter);
  return (
    <div className="componentA">
      <h3>Component A : {count} </h3>
      <ComponentB />
    </div>
  );
};

// Create a context
const Counter = createContext();

// Counter.Provider

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="app">
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Counter.Provider value={[count, setCount]}>
        <h1>App Component</h1>
        <ComponentA />
      </Counter.Provider>
    </div>
  );
};

export default App;
