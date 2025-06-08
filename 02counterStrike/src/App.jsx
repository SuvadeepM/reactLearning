import { useState } from "react";
import "./App.css";

// From React github folder
// react-> packages -> react -> src -> ReactHooks.js
/*
export function useState<S>(
  initialState: (() => S) | S,
): [S, Dispatch<BasicStateAction<S>>] {
  const dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
*/
/*
export function useRef<T>(initialValue: T): {current: T} {
  const dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
*/
/*
export function useEffect(
  create: () => (() => void) | void,
  deps: Array<mixed> | void | null,
): void {
  if (__DEV__) {
    if (create == null) {
      console.warn(
        'React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?',
      );
    }
  }

  const dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
*/

// Bable: Babel is a JavaScript compiler that converts modern JavaScript (ES6+) and JSX into browser-compatible JavaScript (usually ES5).

function App() {
  let [counter, setCounter] = useState(0);
  let [totalClick, setTotalClick] = useState(0);
  // let counter = 15;
  const addValue = () => {
    if (counter >= 20) {
      setCounter(20);
    } else {
      totalClick++;
      setCounter(counter + 1);
    }
    setTotalClick(totalClick);
  };

  const decreaseValue = () => {
    if (counter <= 0) {
      setCounter(0);
    } else {
      totalClick++;
      setCounter(counter - 1);
    }
    setTotalClick(totalClick);
  };

  return (
    <>
      <h1>Suvadeep Mandal Counter</h1>
      <h2>click counter: {totalClick}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={decreaseValue}>Decrese Value</button>
      <p>result: {counter}</p>
    </>
  );
}

export default App;
