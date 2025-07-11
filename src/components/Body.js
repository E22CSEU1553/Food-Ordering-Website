import RestaurantCard from "./RestaurantCard";
// import restaurant from "../utils/metaData";
import {useState,useEffect,useContext} from "react"
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

import UserContext from "../utils/UserContext";


const Body = () => {
    // local state variable
    const [listofrestaurant,setlistofrestaurant]=useState([]);
    const[searchText,setsearchText]=useState("");
    const[filteredrestaurant,setfilteredrestaurant]=useState([]);
    // const RestaurantCardPromoted=withPromotedLabel(RestaurantCard);
    console.log(listofrestaurant);
    useEffect(()=>{const fetchData = async () => {
      const response = await fetch("https://www.swiggy.com/dapi/restaurants/search/v3?lat=27.1766701&lng=78.00807449999999&str=food&trackingId=539332cc-b75b-0efe-241f-ace8f3fdf237&submitAction=ENTER&queryUniqueId=3f54c68f-f3c2-5778-cd05-6f2b9d22f4cd");
      const json = await response.json();
      
      
      const restaurants = json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards?.map(
        (resCard) => resCard?.card?.card
      );

      setlistofrestaurant(restaurants);
      setfilteredrestaurant(restaurants); 
  };fetchData();},[]);
    const isonline=useOnlineStatus();
    if(isonline===false){
        <h1>Oops!! You SomeHow Lost Your Internet Connection</h1>
    }
    const {loggedInUser, setusername}=useContext(UserContext);

    // conditional rendering
    if(listofrestaurant.length===0){
        return <Shimmer/>;
    }

    return (
        <div className="Body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" className="border-2 border-solid border-black rounded-lg p-1 shadow-2xl" value={searchText} onChange={(e)=>{setsearchText(e.target.value)}}></input>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{
                        // filtering the restaurant card based on search input and update ui
                        // search text
                        const filteredlist=listofrestaurant.filter((res)=>res?.info?.name?.toLowerCase().includes(searchText.toLowerCase()));
                        setfilteredrestaurant(filteredlist);

                    }}>Search</button>
                </div>
                <div className="filter-btn m-4 p-4 flex items-center rounded-lg">
                    <button className="px-4 py-2 mx-2 bg-gray-100 rounded-lg shadow-2xl" onClick={()=>{
                    const filteredlist=listofrestaurant.filter((res)=>parseFloat(res?.info?.avgRating)>4);
                    setfilteredrestaurant(filteredlist); 
                }}  >Top Rated Restaurant</button>
                </div>
                <div className="search_01 m-4 p-4 flex items-center">
                    <label>UserName:  </label>
                    <input className="border-black p-1 m-2 rounded-lg max-w-sm border-2" value={loggedInUser} onChange={(e)=>setusername(e.target.value)}></input>
                </div>
            </div>
            
            <div className="res-container flex flex-wrap">{
                filteredrestaurant.map((restaurant)=>(
                    <Link key={restaurant?.info?.id} to={"/restaurant/"+restaurant?.info?.id}>
                         {/* {{if the restaurant is promoted then add a promoted label to it} 
                        restaurant.data.promoted?<RestaurantCardPromoted resData={restaurant}/>:  */}
                        <RestaurantCard  resData={restaurant}/>
                    </Link> 
                    ))
            }


            </div>
        </div>


    );
};

export default Body;