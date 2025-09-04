import{ LOGO_URL } from "../utils/constants";

// Header Component
const Header = () => {
  let btnName = "Login";

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" scr= {LOGO_URL} />
      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
          className="Login"
          onClick={() => {
            btnName = "Logout";
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