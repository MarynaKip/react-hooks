// import { useState } from "react";
import { useForm } from "./useForm"

function App() {
  // const [{ count, count2 }, setCount] = useState({ count: 10, count2: 20 });

  // const [count, setCount] = useState(10);
  // const [count2, setCount2] = useState(20);

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [values, handleChange] = useForm({ email: '', password: '' });


  return (
    <div>
      {/* <button onClick={() =>
        setCount(currentState => ({
          ...currentState, count: currentState.count + 1
        }))
      }
      >+</button> */}

      {/* <button onClick={() =>
        setCount(c => c + 1
        )
      }
      >+</button>
      <div>{count}</div>
      <div>{count2}</div> */}

      {/* <input
        name="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      /> */}

      <input
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
    </div>
  );
}

export default App;
