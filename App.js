import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement - Js object => HTMLElement(render)
const heading = React.createElement(
  "h1",
   { id: "heading" },
    "Namaste React"
  );

  console.log(heading);
  // JSX (transpiled before it reach the JS) - PARCEL -Babel

// JSX => React.createElement-js object => HTMLElement(render)
const jsxHeading = <h1 id="heading">Namaste React Using in JSX </h1>;
console.log(jsxHeading); 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
