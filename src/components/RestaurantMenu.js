import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";
import useResMenu from "../utils/useResMenu"; // Assuming this is a custom hook to fetch restaurant menu data
import RestaurantCategories from "./RestaurantCategories"; // Assuming this is a component to display restaurant categories
import { MENU_LIST_URL } from "../utils/constants"; // Assuming this is the URL for the menu list image

const RestaurantMenu = () => {
  const { resid } = useParams();
  const resMenu=useResMenu(resid);
  const [showindex,setshowindex]  = useState(null);



  if (resMenu === null) {
    return <Shimmer />;
  }

  const info = resMenu?.cards?.[2]?.card?.card?.info;
  const { name, cuisines, costForTwoMessage } = info;

  // Extract all item categories regardless of structure
  const cards =
    resMenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  let itemCategoryCards = [];

  for (const c of cards) {
    const type = c?.card?.card?.["@type"];

    // Case 1: Nested categories (e.g., Dasaprakash)
    if (
      type ===
      "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    ) {
      const categories = c.card.card.categories;
      categories?.forEach((category) => {
        itemCategoryCards.push({
          title: category.title,
          items: category.itemCards,
        });
      });
    }

    // Case 2: Flat categories (e.g., Agra Fast Food)
    else if (
      type ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) {
      itemCategoryCards.push({
        title: c.card.card.title,
        items: c.card.card.itemCards,
      });
    }
  }

  return (
    <div className="Menu List">
      <div className="p-2 m-2 text-center ">

        <h1 className="font-bold my-5 text-2xl">{name}</h1>
        <h3 className="">{cuisines.join(", ")} - {costForTwoMessage}</h3>
        <img className="w-44 mx-auto" src={MENU_LIST_URL}></img>
        
      </div>
      {/* categories accordion */}
      {itemCategoryCards.map((category, index) => (
        // controlled component
        <RestaurantCategories items={category.items}
        key={index} title={category.title} showitems={index===showindex?true:false} setshowindex={()=>setshowindex(index)}/>
      ))}
    </div>
  );
};

export default RestaurantMenu;
