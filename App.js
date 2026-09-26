import React from "react";
import ReactDOM from "react-dom/client";


// STARTING FROM SCRATCH

const heading = React.createElement("h1",{id: "heading"},"Namaste React");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

console.log(heading);

const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>;

console.log(jsxHeading);

