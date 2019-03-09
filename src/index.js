import React, { useState } from "react";
import reactDom from "react-dom";

const App = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
};

reactDom.render(
  <App />,
  document.getElementById("example")
);
