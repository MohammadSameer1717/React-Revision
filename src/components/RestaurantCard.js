const RestaurantCard = (props) => {
  const { resData} = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,  
    deliveryTime,
  } = resData?.data;

  return (
    <div
     className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
     <img
  className="res-logo"
  alt="res-logo"
  src={
    cloudinaryImageId
      ? `https://res.cloudinary.com/demo/image/upload/${cloudinaryImageId}`
      : "https://wallpaperaccess.com/full/4622478.gif"
  }
/>
 
      <h3>{name}</h3>
      <h4>{cuisines.join(" , ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;