// Header Component
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src= "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fast-food-logo%2Crestaurant-logo%2Crestaurant-ico-design-template-b7778b37cd176f87af34666bad99eb58_screen.jpg?ts=1672672947"
          alt="logo"
        />
      </div>
      <div className="nav-item">
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

export default Header;