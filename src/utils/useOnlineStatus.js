import {useState,useEffect} from "react";

const useOnlineStatus=()=>{
    const [isonline,setonline]=useState(true);
    useEffect(()=>{
        window.addEventListener("online",()=>{
            setonline(true);
        })
        window.addEventListener("offline",()=>{
            setonline(false);
        })
    },[]);
    return isonline;
}
export default useOnlineStatus;