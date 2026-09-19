const heading  = React.createElement("h1",
{ id: "heading", xyz: "abc"},
"Hello World from React!"
);
// To create a root, we use React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// For giving attributes we can use {}
//  { id: "myHeading", className: "title" }

// MAKING NESTED KIND OF STRUCTURE
// ReactElement(Object) => HTML(Browser Understands)

// <div id="parent">
//  <div id="child">
//    <h1>I'm an h1 tag</h1>
//    <h2>I'm an h2 tag</h2>
//  </div>
// </div>


const parent = React.createElement("div",{ id: "parent" },
    React.createElement("div",{ id : "child" },
    // FOR MAKING SIBLINGS WE WILL USE AN ARRAY
    [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag")
    ]),
    React.createElement("div",{ id : "child2" },
    // FOR MAKING SIBLINGS WE WILL USE AN ARRAY
    [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag")
    ])
);

console.log(parent);

root.render(parent);

