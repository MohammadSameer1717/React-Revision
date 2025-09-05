import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { link } from "react-router-dom";

// Header Component
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" scr= {LOGO_URL} />
      </div>
      <div className="nav-item">
        <ul>
          <li>
            <link to="/">Home</link>
          </li>
          <li>
            <link to="/about">About Us</link>
             </li>
          <li>
            <link to="/contact">Contact Us</link>
          </li>
          <li>Cart</li>
          <button
          className="Login"
          onClick={() => {
            btnNameReact === "Logout";
            ? setBtnNameReact("Logout")
            : setBtnNameReact("login");
          }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;