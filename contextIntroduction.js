/* Context Introduction */

import { createContext, useContext } from "react";
import "./App.css";

const ComponentC = () => {
  const userName = useContext(UserNameContext);
  console.log("contextValue", userName);
  return (
    <div className="componentC">
      <h3>Component C : {userName} </h3>
    </div>
  );
};

const ComponentB = () => {
  const userName = useContext(UserNameContext);
  return (
    <div className="componentB">
      <h3>Component B : {userName} </h3>
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

const UserNameContext = createContext();

// UserNameContext.Provider

const App = () => {
  const userName = "Aditya";
  return (
    <div className="app">
      <UserNameContext.Provider value={userName}>
        <h1>App Component : {userName}</h1>
        <ComponentA />
      </UserNameContext.Provider>
    </div>
  );
};

export default App;
