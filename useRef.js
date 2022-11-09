import { useRef } from "react";

const App = () => {
  // ref -> reference
  const inputRef = useRef(null);
  // inputRef ->  { current: theActualElement }
  return (
    <div>
      <label htmlFor="userName">User Name</label>
      <input ref={inputRef} id="userName" type="text" />
      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        Focus the Input!
      </button>
      <button
        onClick={() => {
          inputRef.current.blur();
        }}
      >
        Remove the Focus!
      </button>
    </div>
  );
};

export default App;
