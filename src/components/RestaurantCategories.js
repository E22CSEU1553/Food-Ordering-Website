
import ItemList from "./ItemList";
import {useState} from "react";
const RestaurantCategories=({title,items,showitems,setshowindex})=>{
    const [changestate,setchangestate]=useState(true)

    const handleClick=()=>{
        {setshowindex()&&setchangestate(!changestate)};
        // console.log("Clicked");
        // setshowitems(!showitems);
    }
    return(
        // {Header}
        // {Accordion}
        <div>
            
            <div className="p-2 m-2 text-center">
                <div className="w-6/12 mx-auto my-2 bg-gray-100 shadow-lg p-4 rounded-lg">
                    <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                        <span className="font-bold text-lg">{title} ({items.length})</span>
                        <span>⬇️</span>
                    </div>
                    {showitems&& changestate && <ItemList items={items}/>}
                </div>
            </div>
        </div>
    )
}
export default RestaurantCategories;