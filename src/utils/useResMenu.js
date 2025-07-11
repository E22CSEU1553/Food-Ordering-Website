import {useState,useEffect} from "react";

const useResMenu=(resid)=>{
    const [resMenu, setResMenu] = useState(null);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {

        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.1766701&lng=78.00807449999999&restaurantId=${resid}`);

        const json = await data.json();
        console.log(json);
        setResMenu(json?.data);
    };
  return resMenu;
};

export default useResMenu;