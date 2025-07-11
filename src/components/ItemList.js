import {CDN_URL} from "../utils/constants";
import {useDispatch} from "react-redux";
import {addItem} from "../utils/CartSlice";

const ItemList=({items})=>{
    const dispatch=useDispatch();
    const handleClick=(Item)=>{
        // Dispatch an Action
        dispatch(addItem(Item));
    }
    
    return(
        <div>
                    {items?.map((item,index) => (
                    <div key={item?.card?.info?.id||index} className="p-2 m-2 border-b-2 w-auto border-gray-200 text-left flex justify-between">
                        <div className="w-9/12">
                        <div className="py-2">
                            <span>{item?.card?.info?.name} </span>
                            <span>₹{(item?.card?.info?.price || item?.card?.info?.defaultPrice) / 100}</span>
                        </div>
                        <p className="text-xs">{item?.card?.info?.description}</p>
                        </div>
                        <div className="w-3/12">
                        
                        <div className="absolute">
                        <button className="bg-gray-200 px-2 py-1 mx-10 rounded-lg shadow-lg" onClick={()=>handleClick(item)}>Add</button>
                        </div>
                        <img src={CDN_URL+item?.card?.info?.imageId } className="w-full rounded-lg"></img>
                        </div>
                    </div>
                    ))}
        </div>
    )

}

export default ItemList;