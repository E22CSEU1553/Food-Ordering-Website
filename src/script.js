
// <div id=parent>
//      <div id=child>
//           <h1>hey what's up></h1>
//           <h2>hey what's up</h2>
//      </div>
//      <div id=child2>
//           <h1>hey what's up></h1>
//           <h2>hey what's up</h2>
//      </div>
// </div>


// const parent=React.ceateElement("div",{id:parent},
//     [React.createElement("div",{id:child},
//     [React.createElement("h1",{},"hey what's up h1"),
//     React.createElement("h2",{},"hey what's up h2")]),
//     React.createElement("div",{id:child2},
//     [React.createElement("h1",{},"hey what's up h1"),
//     React.createElement("h2",{},"hey what's up h2")])]
// );
// console.log(parent);
// const root=ReactDOM.ceateRoot(document.getElementById("box"));
// root.render(parent);
// props are generally argument to a function
import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";


import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import {useState,useEffect} from "react";
import UserContext from "./utils/UserContext";
import {Provider} from "react-redux";
import AppStore from "./utils/AppStore";
import Cart from "./components/Cart";
// import Grocery from "./components/Grocery";




const Grocery=lazy(()=> import("./components/Grocery"));

const Parent = () => {
    const [username,setusername]=useState();
    useEffect(()=>{

        const data={
            name: "Asheesh Gaur",
        }
        setusername(data.name);
        // setuserinfo(userinfo);
    },[])
    // return (
    //     // default
    //     <UserContext.Provider value={{loggdeInUser:username,setusername}}>
    //     {/* Asheesh Gaur */}
    //     <div className="App">
    //         <UserContext.Provider value={{loggedInUser:"Sunder Pichai"}}>
    //             {/* Sunder Pichai */}
    //             <Header />
    //         </UserContext.Provider>
    //         <Outlet />
    //     </div>
    //     </UserContext.Provider>

    // );

    return(
        <Provider store={AppStore}>
        <UserContext.Provider value={{loggedInUser:username,setusername}}>
            <div className="app">
                <Header/>
                <Outlet/>

            </div>
        </UserContext.Provider>
        </Provider>
    )
};

const Appdata=createBrowserRouter([
    {
        path:"/",
        element:<Parent/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About />
            },
            {
                path:"/contact",
                element:<Contact/>

            },
            {
                path:"/grocery",
                element:(<Suspense fallback={<h1>Loading.....</h1>}><Grocery/></Suspense>)

            },
            {
                path:"/restaurant/:resid",
                element:<RestaurantMenu/>
            },
            {
                path:"/cart",
                element:<Cart/>
            }
        ]
    }]

)
const Root =ReactDOM.createRoot(document.getElementById("box"));
Root.render(<RouterProvider router={Appdata} />);