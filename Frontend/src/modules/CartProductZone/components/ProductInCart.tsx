import { QuantityCounter } from "@/components/QuantityCounter"
import CartStore from "@/pages/store/CartStore"
import type { Product } from "@/types/Product"
import { memo, useEffect, useState } from "react"

type Props = {
    item: CartItem,
}

type CartItem = {
    product: Product,
    quantity: number
}

export const ProductInCart = memo(({item}:Props) => {
    const [selectedCountProduct, setSelectedCountProduct] = useState(item.quantity);
    const price = item.product.discount !== null
    ? item.product.price - (item.product.price * item.product.discount! / 100)
    : item.product.price
    const [subtotal, setSubtotal] = useState(selectedCountProduct * price);
    const deleteItem = CartStore((state) => state.deleteItemFromCart);
    const updateQuantity = CartStore((state) => state.updateQuantity);

    useEffect(()=>{
        setSubtotal(selectedCountProduct * price);
        updateQuantity(item.product.id, selectedCountProduct);
    },[selectedCountProduct])

    return(<><div className="relative flex items-center justify-between w-full h-50 my-2.5">
        <div className="flex items-center gap-5 h-full">
            <div className="w-37.5 h-full">
                <img className="w-full h-full object-cover unselectable" src={item.product.image} alt="product_picture" />
            </div>
            <div className="flex flex-col text-[20px]">
                <span>{item.product.name.toUpperCase()}</span>
                <span style={{color: item.product.discount !== null
                    ? "#ea0404"
                    : "var(--blue-color)"
                }}>{`$${price.toFixed(2)}`}</span>
            </div>
        </div>

        <div className="flex items-center justify-around w-[50%]">
            <QuantityCounter selectedCountProduct={selectedCountProduct} setSelectedCountProduct={setSelectedCountProduct} maxCountProduct={item.product.count}/>
            <p className="text-(--blue-color) text-[35px]">{`$${subtotal.toFixed(2)}`}</p>
        </div>

        <span onClick={()=>deleteItem(item.product)} style={{fontSize: 35}} className="material-symbols-outlined absolute right-0.5 cursor-pointer">close</span>
    </div>
    <hr className="text-[#c9bcbc] my-3.5" />
    </>)
})