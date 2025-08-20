import React from "react";
import ReactDOM from "react-dom/client";

// Header Component
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fast-food-logo%2Crestaurant-logo%2Crestaurant-ico-design-template-b7778b37cd176f87af34666bad99eb58_screen.jpg?ts=1672672947"
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

// Restaurant Card Component
const RestaurantCard = ({ resName, cuisine, rating, deliveryTime }) => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://wallpaperaccess.com/full/4622478.gif"
      />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>{rating} stars</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};


const resList = [
  {
    id: 1,
    name: "Meghana Foods",
    cuisine: "Biryani, North Indian, Asian",
    rating: 4.4,
    deliveryTime: "35 minutes",
  },
  {
    id: 2,
    name: "KFC",
    cuisine: "Burger, Fast Food",
    rating: 4.2,
    deliveryTime: "30 minutes",
  },
  {
    id: 3,
    name: "Domino's Pizza",
    cuisine: "Pizza, Italian",
    rating: 4.3,
    deliveryTime: "25 minutes",
  },
  {
    id: 4,
    name: "McDonald's",
    cuisine: "Burger, Fast Food, Beverages",
    rating: 4.1,
    deliveryTime: "28 minutes",
  },
  {
    id: 5,
    name: "Subway",
    cuisine: "Healthy Food, Sandwiches",
    rating: 4.0,
    deliveryTime: "20 minutes",
  },
  {
    id: 6,
    name: "Paradise Biryani",
    cuisine: "Biryani, North Indian",
    rating: 4.5,
    deliveryTime: "32 minutes",
  },
  {
    id: 7,
    name: "Barbeque Nation",
    cuisine: "BBQ, North Indian, Continental",
    rating: 4.6,
    deliveryTime: "40 minutes",
  },
  {
    id: 8,
    name: "Pizza Hut",
    cuisine: "Pizza, Italian",
    rating: 4.0,
    deliveryTime: "30 minutes",
  },
  {
    id: 9,
    name: "Taco Bell",
    cuisine: "Mexican, Fast Food",
    rating: 4.2,
    deliveryTime: "27 minutes",
  },
  {
    id: 10,
    name: "Biryani Pot",
    cuisine: "Biryani, North Indian",
    rating: 4.3,
    deliveryTime: "33 minutes",
  },
  {
    id: 11,
    name: "Faasos",
    cuisine: "Rolls, North Indian",
    rating: 4.1,
    deliveryTime: "22 minutes",
  },
  {
    id: 12,
    name: "Behrouz Biryani",
    cuisine: "Biryani, Mughlai",
    rating: 4.5,
    deliveryTime: "29 minutes",
  },
  {
    id: 13,
    name: "Haldiram's",
    cuisine: "North Indian, Sweets, Snacks",
    rating: 4.3,
    deliveryTime: "20 minutes",
  },
  {
    id: 14,
    name: "Burger King",
    cuisine: "Burger, Fast Food",
    rating: 4.1,
    deliveryTime: "26 minutes",
  },
  {
    id: 15,
    name: "Chai Point",
    cuisine: "Tea, Snacks, Beverages",
    rating: 4.0,
    deliveryTime: "18 minutes",
  },
  {
    id: 16,
    name: "FreshMenu",
    cuisine: "Continental, Healthy Food",
    rating: 4.2,
    deliveryTime: "24 minutes",
  },
  {
    id: 17,
    name: "Punjab Grill",
    cuisine: "North Indian, Mughlai",
    rating: 4.4,
    deliveryTime: "38 minutes",
  },
  {
    id: 18,
    name: "Wow! Momo",
    cuisine: "Momos, Chinese, Fast Food",
    rating: 4.1,
    deliveryTime: "21 minutes",
  },
];
 
// Body Component
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            resName={restaurant.name}
            cuisine={restaurant.cuisine}
            rating={restaurant.rating}
            deliveryTime={restaurant.deliveryTime}
          />
        ))}
      </div>
    </div>
  );
};

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