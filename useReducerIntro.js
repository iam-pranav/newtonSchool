import { useEffect, useReducer, useState } from "react";

const URL = "https://jsonplaceholder.typicode.com/users";

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
    case "SUCCESS":
      return { loading: false, error: "", users: action.payload };
    case "ERROR":
      return { loading: false, users: [], error: action.payload };
    default:
      return state;
  }
};

// action.type is DATA -> { users: [], loading: false, error: "" }

const App = () => {
  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");

  const [state, dispatch] = useReducer(reducer, {
    users: [],
    loading: false,
    error: "",
  });

  // IIFE
  useEffect(() => {
    (async () => {
      // setLoading(true);
      dispatch({ type: "LOADING" });
      try {
        const response = await fetch(URL);

        if (!response.ok) {
          throw new Error("API failure");
        }

        const data = await response.json();

        // setUsers(data);
        dispatch({ type: "SUCCESS", payload: data });
      } catch (error) {
        // setError(error.message);
        dispatch({ type: "ERROR", payload: error.message });
      }
      // finally {
      //   setLoading(false);
      // }
    })();
  }, []);

  if (state.loading) {
    return <p>Loading...</p>;
  }

  if (state.error) {
    return <p style={{ color: "red" }}>Error is : {state.error}</p>;
  }

  return (
    <div>
      {state.users.length > 0 ? (
        state.users.map((user) => <p key={user.id}>{user.name}</p>)
      ) : (
        <p>Users not present!</p>
      )}
    </div>
  );
};

export default App;
