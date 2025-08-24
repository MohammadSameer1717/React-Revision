import RestaurantCard from "./RestaurantCard";

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

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
