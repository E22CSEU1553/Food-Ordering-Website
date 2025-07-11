
import {LOGO_URL} from "../utils/constants"
import {useState,useContext} from "react"
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import {useSelector} from "react-redux";

const Header = () => {
    const[loginbtn,setloginbtn]=useState("Login");
    const isonline=useOnlineStatus();
    const {loggedInUser} =useContext(UserContext);
    // subscribing to the redux store using selector
    const cartItems=useSelector((store)=>store.cart.Item);
    return (
        <div className ="flex justify-between bg-pink-100 shadow-lg m-2 mb-2 sm:bg-yellow-50 lg:bg-green-200 rounded-lg">
            <div className="logo-container flex shadow-lg">
                <img className="w-56 rounded-xl p-2 " src={LOGO_URL}></img>
            </div>
            <div className=" flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status:{isonline?"✅":"🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/cart">Cart ({cartItems.length})</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <button className="login border px-2 py-1 rounded-lg items-center align-middle shadow-lg" onClick={()=>{loginbtn==="Login"?
                        setloginbtn("Logout"):setloginbtn("Login")
                    }}>{loginbtn}</button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
                
            </div>

        </div>
    );
};
export default Header;