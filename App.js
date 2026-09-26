import React from "react";
import ReactDOM from "react-dom/client";


// STARTING FROM SCRATCH

const Header = () => {

    return (
        <div className="header">
         <div className="logo-container">
            <img className="logo" src="https://cdn.dribbble.com/userupload/6738187/file/original-34da7b3d3a9cab40b12c92817eea780f.jpg"/>
         </div>
          <div className="nav-items">
           <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
           </ul>
          </div>
       </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
        </div>
    );
};



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);


