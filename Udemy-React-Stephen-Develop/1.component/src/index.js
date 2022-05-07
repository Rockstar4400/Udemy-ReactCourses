import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const buttonText = { text: "click me" };
  const labelTex = "Enter name:";

  return (
    <div>
      <label className="label" htmlFor="name">
        {labelTex}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "black" }}>
        {buttonText.text}
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
