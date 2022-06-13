import { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((currentCount) => currentCount + 1);
    console.log(count);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      counter
      <span>{`The count is ${count}`}</span>
      <button onClick={handleClick}>Increment Count</button>
    </div>
  );
};

export default App;
