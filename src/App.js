import { useEffect, useState } from "react";
import { useForm } from "./useForm"
import { Hello } from "./Hello"
import { useFetch } from "./useFetch"

function App() {

  const [values, handleChange] = useForm({ email: '', password: '', firstName: '' });
  // const [showHello, setshowHello] = useState(true)
  // useEffect(() => {
  //   console.log('render');
  // })

  // useEffect(() => {
  //   console.log('render');
  // }, [values.password, values.email])

  // useEffect(() => {
  //   console.log('render');
  //   return () => {
  //     console.log("unmount");
  //   };
  // }, [values.email])

  // useEffect(() => {
  //   const onMouseMove = e => {
  //     console.log(e);
  //   };
  //   window.addEventListener('mousemove', onMouseMove)
  //   console.log('added');
  //   return () => {
  //     console.log('removed');
  //     window.removeEventListener('mousemove', onMouseMove)
  //   };
  // }, [])

  // useEffect(() => { console.log('mount1'); }, [])
  // useEffect(() => { console.log('mount2'); }, [])
  const [count, setCount] = useState(() => JSON.parse(localStorage.getItem("count")))
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`)

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count))
  }, [count])

  return (
    <div>
      <div>{!data ? "loading..." : data}</div>
      <div>count: {count}</div>
      <button onClick={() => setCount(c => c + 1)}>increment</button>
      {/* <button onClick={() => setshowHello(!showHello)}>toggle</button>
      {showHello && <Hello />} */}
      <input
        name="firstName"
        value={values.firstName}
        onChange={handleChange}
      />

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
