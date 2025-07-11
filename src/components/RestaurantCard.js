import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cuisines, name, avgRating, sla, costForTwo, cloudinaryImageId } = resData?.info;
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="relative w-[250px] h-[300px] m-4 rounded-xl overflow-hidden shadow-lg group font-mono">
      {/* Restaurant Image */}
      <img
        src={CDN_URL + cloudinaryImageId}
        alt={name}
        className="w-full h-full object-cover"
        onError={(e) => { e.target.src = "/fallback.jpg"; }} // fallback if image fails
      />

      {/* Overlay content */}
      <div className="absolute bottom-0 bg-black bg-opacity-60 w-full text-white p-3">
        <h3 className="font-bold text-lg truncate">{name}</h3>
        <p className="text-xs">{cuisines?.join(", ")}</p>
        <div className="text-sm mt-1 flex flex-col gap-[1px]">
          <span>₹{costForTwo / 100} For Two</span>
          <span>⭐ {avgRating}</span>
          <span>🚚 {sla?.deliveryTime} mins</span>
          <span>User: {loggedInUser}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
