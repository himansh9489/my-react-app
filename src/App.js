import { useState } from "react";

function Counter(props) {
  const { startValue } = props;
  let initialValue = 0;
  if (startValue) {
    initialValue = startValue;
  }
  const [num, setNum] = useState(initialValue);
  return (
    <div>
      <h2>Counter</h2>
      <div>{num}</div>
      <button
        onClick={function () {
          setNum(num + 1);
        }}
      >
        Inc
      </button>
    </div>
  );
}

function App() {
  return (
    <>
      <h1>Welcome to React</h1>
      <h2>I am Learning reactJs</h2>
      <Counter startValue={12} />
    </>
  );
}

export default App;
