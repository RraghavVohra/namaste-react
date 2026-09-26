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

// RESTAURANT CARD
const RestaurantCard = () => {
    return (
        <div className="res-card" style = {{backgroundColor: "#f0f0f0"}}>
            <img className="res-logo" alt="res-logo" src="https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_600,h_400/v1681884314/008781bada99c992ebf23970c7f2f37a.webp" />
            <h3>Daisy Mae Cantina</h3>
            <h4>Mexican Coffee House</h4>
            <h4>Khan Market, Delhi</h4>
            <h4>4.0 Stars</h4>
            <h4>Flat 15% off on pre-booking</h4>
        </div>
    );
};

const Body = () => {
    return (
        <div className = "body">
          <div className="search">Search</div>
          <div className="res-container">
            <RestaurantCard /> 
            </div>
        </div>
    );
};

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


