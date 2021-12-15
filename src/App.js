import { useEffect, useState, useRef } from "react";
import { useForm } from "./useForm"
import { Hello } from "./Hello"
import { useFetch } from "./useFetch"

function App() {

  const [values, handleChange] = useForm({ email: '', password: '', firstName: '' });
  const inputRef = useRef()
  const [showHello, setShowHello] = useState(true)

  return (
    <div>

      <button onClick={() => setShowHello(!showHello)}>toggle</button>
      {showHello && <Hello />}
      <input
        name="firstName"
        placeholder="first name"
        value={values.firstName}
        onChange={handleChange}
      />

      <input
        ref={inputRef}
        placeholder="email"
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        placeholder="password"
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <button onClick={() => {
        inputRef.current.focus()
      }}>focus</button>
    </div>
  );
}

export default App;
