import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { link } from "react-dom";

const Body = () => {
  // local store variable = superpowerFull variable
  const [listOfReataurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  console.log("Body Rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=27.9135016&lng=78.0781901&carousel=true&third_party_vendor=1"
    );

    const json = await data.json();

    setListOfRestaurant(json?.cards[2]?.data?.data?.cards);
    setFilteredRestaurant(json?.cards[2]?.data?.data?.cards);
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

        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfReataurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <link 
          key={restaurant.data.id}
          to={"/restaurants/" + restaurant.data.id}
          >
            <RestaurantCard resData={restaurant} />
          </link>
        ))}
      </div>
    </div>
  );
};

export default Body;
