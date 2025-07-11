import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {clearCart} from "../utils/CartSlice";
import ItemList from "./ItemList.js";

const Cart=()=>{
    const CartItems=useSelector((store)=>store.cart.Item);
    const dispatch=useDispatch();

    const handleClearCart=()=>{
        dispatch(clearCart());
    }
    return <div className="text-center m-10 p-10">
                <h1 className="text-center">Cart</h1>
                <div className="w-6/12 m-auto">
                    <button className="border-2 bg-gray-200 p-2 m-2 rounded-lg" onClick={handleClearCart}>Clear Cart</button>
                    {CartItems.length===0&&<h1>Your Cart is Empty Now.Please Add Items to the Cart.</h1>}
                    <ItemList items={CartItems}/>
                </div>
            </div>
}
export default Cart;