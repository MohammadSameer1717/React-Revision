import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img 
        className="logo"
        src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fast-food-logo%2Crestaurant-logo%2Crestaurant-ico-design-template-b7778b37cd176f87af34666bad99eb58_screen.jpg?ts=1672672947"
       />
      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>AbouUs</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ( props) => {
  console.log(props);
  
  return (
    <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
      <img 
      className="res-logo"
      alt="res-logo"
      src="https://wallpaperaccess.com/full/4622478.gif"
    />
    <h3>Meghana Foods</h3>
    <h4>Biryani, North Indian, Asian</h4>
    <h4>4.4 starts</h4>
    <h4>35 minutes</h4>
    </div>
  );
};


const Body = () => {
  return (
    <div className="body">
    <div className="search">Search</div>
    <div className="res-container">
    <RestaurantCard 
    resName ="Megana Foods"
    cuisine="Biryani, North Indian, Asian"
    />
    <RestaurantCard resName="KFC" cuisine="Burgar, Fast Food" />
    </div>
    </div>
  )
}

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
