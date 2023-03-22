import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { RootState } from "./redux/store/store";
import "./App.css";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./redux/slices/counterSlice";
import { useSelector, useDispatch } from "react-redux";
import Demo1 from "./Demo1";
function App() {
  const counter = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>React Typescript</h1>
      <button onClick={() => dispatch(increment())}> add</button>
      <button onClick={() => dispatch(incrementByAmount(2))}> add by 2</button>
      {counter}
      <Demo1 />
    </div>
  );
}

export default App;
