import CartStore from "@/pages/store/CartStore"
import { useEffect } from "react";

import styles from "./CartNotification.module.css";

const CartNotification = () => {
    const notification = CartStore((state) => state.notification);
    const setNotification = CartStore((state) => state.setNotification);

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
        return(<div key={Date.now()} className={styles.notification} >
            <span className="material-symbols-outlined text-[18px]">check_circle</span>
            <p>PRODUCT ADDED TO CART</p>
        </div>)}
    }

export default CartNotification