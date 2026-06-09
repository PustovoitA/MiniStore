import CartStore from "@/pages/store/CartStore"
import { useEffect } from "react";

import styles from "./CartNotification.module.css";

const CartNotification = () => {
    const notification = CartStore((state) => state.notification);
    const setNotification = CartStore((state) => state.setNotification);
    const context = notification.value === "success"
    ?{
        massage: "PRODUCT ADDED TO CART",
        bgCol: "#04bd04",
        icon: "check_circle"
    }
    :{
        massage: "ERROR PLEASE REPEAT LATER",
        bgCol: "#e81e1e",
        icon: "cancel"
    }

    useEffect(()=>{
        if(!notification.open) return;

        const timer = setTimeout(()=> {
            setNotification({
                open: false,
                value: notification.value
            })
        }, 3000);

        return () => clearTimeout(timer);
    },[notification.open])

    if(!notification.open) return null

    if(notification.open){
    return(<div key={Date.now()} className={`${styles.notification} bg-[${context.bgCol}]`} >
            <span className="material-symbols-outlined text-[18px]">{context.icon}</span>
            <p>{context.massage}</p>
        </div>)}
    }

export default CartNotification