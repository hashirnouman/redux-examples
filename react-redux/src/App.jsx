import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Show from "./Show";

function App() {
  const [count, setCount] = useState(0);
  const number = useSelector((state) => state.numb.number);
  const num = useSelector((state) => state.num2.num);
  const dispatch = useDispatch();
  const add = () => {
    dispatch({ type: "ADD_NUMBER", payload: 2 });
  };
  const addNum = () => {
    dispatch({ type: "ADD_NUM" });
  };
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onMouseMoveCapture={add}>count is {number}</button>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Show />
    </div>
  );
}

export default App;
