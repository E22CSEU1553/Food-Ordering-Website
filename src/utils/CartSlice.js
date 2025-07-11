import {createSlice} from '@reduxjs/toolkit';

const CartSlice=createSlice({
    name:"cart",
    initialState:{
        Item:[]
    },
    reducers:{
        addItem:(state,action)=>{
            // mutating the state here
            state.Item.push(action.payload);
        },
        removeItem:(state,action)=>{
            state.Item.pop();
        },
        clearCart:(state)=>{
            state.Item.length=0;
        }

    }
})

export const {addItem,removeItem,clearCart}=CartSlice.actions;
export default CartSlice.reducer;