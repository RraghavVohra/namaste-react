import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// STARTING FROM SCRATCH

// HEADER CODE IS NOW IN THE COMPONENTS FOLDER

// RESTAURANT CARD IS NOW IN THE COMPONENTS FOLDER

// BODY IS NOW IN THE COMPONENTS FOLDER


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);


