import { calculateDiscount } from "@/assets/discount"
import { QuantityCounter } from "@/components/QuantityCounter"

import CartStore from "@/pages/store/CartStore"

import type { Product } from "@/types/Product"

import { memo, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

interface Props {
    item: CartItem,
}

interface CartItem {
    product: Product,
    quantity: number
}

export const CartItem = memo(({item}:Props) => {
    const navigate = useNavigate();

    const deleteItem = CartStore((state) => state.deleteItemFromCart);
    const updateQuantity = CartStore((state) => state.updateQuantity);
    const updateTotals = CartStore((state) => state.updateTotals);

    const [selectedCountProduct, setSelectedCountProduct] = useState(item.quantity);
    const price = calculateDiscount(item.product.price, item.product.discount);
    const [subtotal, setSubtotal] = useState(selectedCountProduct * price);


    useEffect(()=>{
        setSubtotal(selectedCountProduct * price);
        updateQuantity(item.product.id, selectedCountProduct);
        updateTotals({itemId: item.product.id, price: subtotal});
    },[selectedCountProduct]);

    return(<>
    <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between w-full min-h-fit md:h-50 my-2.5 gap-4 md:gap-2 pr-10 md:pr-14">
        <div onClick={()=>{navigate(`/product/${item.product.id}`);}} className="flex items-center gap-4 md:gap-5 w-full md:w-auto h-auto md:h-full cursor-pointer shrink-0">
            <div className="w-24 sm:w-28 md:w-37.5 h-24 sm:h-28 md:h-full shrink-0">
                <img className="w-full h-full object-cover unselectable" src={item.product.image} alt="product_picture" />
            </div>
            <div className="flex flex-col text-[16px] md:text-[20px] min-w-0">
                <span className="truncate">{item.product.name.toUpperCase()}</span>
                <span style={{color: item.product.discount !== null
                    ? "#ea0404"
                    : "var(--blue-color)"
                }}>{`$${price.toFixed(2)}`}</span>
            </div>
        </div>

        <div className="flex items-center justify-between md:justify-around w-full md:w-[50%] gap-4 min-w-0">
            <QuantityCounter selectedCountProduct={selectedCountProduct} setSelectedCountProduct={setSelectedCountProduct} maxCountProduct={item.product.count}/>
            <p className="text-(--blue-color) text-[22px] md:text-[35px] whitespace-nowrap shrink-0 min-w-22.5 md:min-w-32.5 text-right">{`$${subtotal.toFixed(2)}`}</p>
        </div>

        <span onClick={()=>deleteItem(item.product)} style={{fontSize: 28}} className="material-symbols-outlined absolute top-0 right-0 md:top-1/2 md:-translate-y-1/2 cursor-pointer md:text-[35px]!">close</span>
    </div>
    <hr className="text-[#c9bcbc] my-3.5" />
    </>)
})