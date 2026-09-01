import styles from "./CartNotification.module.css"

import CartStore from "@/store/CartStore"

import { useEffect } from "react"

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
        if(!notification.isOpen) return;

        const timer = setTimeout(()=> {
            setNotification({
                isOpen: false,
                value: notification.value
            })
        }, 3000);

        return () => clearTimeout(timer);
    },[notification.isOpen])

    if(!notification.isOpen) return null

    return(<div key={Date.now()} style={{background: context.bgCol}} className={`${styles.notification}`} >
        <span className="material-symbols-outlined text-[18px]">{context.icon}</span>
        <p>{context.massage}</p>
    </div>)
}
export default CartNotification