import React, { useState } from "react";

function Quantity() {
  const [count, setCount] = useState(4);
  const [theme, setTheme] = useState("red");
  // const [state, setState] = useState({ count: 4, theme: "blue" });
  // console.log("state==>", state);
  // const count = state.count;
  // const theme = state.theme;

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
    setTheme("blue");

    // setState((prevSate) => {
    //   return { ...prevSate, count: prevSate.count - 1 };
    // });
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
    setTheme("coral");

    // setState((prevState) => {
    //   return {
    //     ...prevState,
    //     count: prevState.count + 1,
    //   };
    // });
  }

  return (
    <div>
      <button type="button" id="dec" onClick={decrementCount}>
        -
      </button>
      <span id="state">{count}</span>
      <span id="state">{theme}</span>
      <button type="button" id="inc" onClick={incrementCount}>
        +
      </button>
    </div>
  );
}

export default Quantity;
