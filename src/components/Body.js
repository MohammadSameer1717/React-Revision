import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

 
const Body = () => {
  // local store variable = superpowerFull variable
  const [listOfReataurants, setListOfRestaurant] =useState (resList);
  
  return (
    <div className="body">
      <div className="filter">
        <button 
        className="filter-btn"
        onClick={() => {
          listOfReataurants = listOfReataurants.filter(
            (res) => res.data.aveRating > 4
          );
          console.log(listOfReataurants);
          }}
        >
          Top Reted Restaurants
        </button>
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
