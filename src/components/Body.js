import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

 
const Body = () => {
  // local store variable = superpowerFull variable
  const [listOfReataurants, setListOfRestaurant] =useState ([]);
  const [searchText, setSearchText] = useState("");

  console.log("Body Rendered");
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "http://swiggy"
    );
    const json = await data.json();

    console.log(json);
    setListOfRestaurant(json?.cards[2]?.data?.data?.cards);
    
  };
  
  return listOfReataurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        <button className="filter-btn" onClick={handleTopRated}>
          Top Rated Restaurants  
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
