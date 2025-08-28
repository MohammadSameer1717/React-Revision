import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header.js";
import Body from "./src/components/Body.js";


// Header Component
 

//  RestaurnantCard.js


 
// Body Component
 

// App Layout Component
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

// Render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);