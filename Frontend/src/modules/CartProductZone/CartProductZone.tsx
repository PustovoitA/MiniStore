import CartStore from "@/pages/store/CartStore"
import { ProductInCart } from "./components/ProductInCart";


const CartProductZone = () => {
    const cartStore = CartStore((state) => state.basket);
    const clear = CartStore((state) => state.clearState);

    return (<div className="flex justify-center font-[Jost] w-full my-20">
        <div className="w-(--width)">
            <div className="w-full">
                <div className="flex items-center justify-between text-[18px] w-full">
                    <p>PRODUCT</p>
                    <div className="flex items-center justify-around w-[50%]">
                        <p>QUANTITY</p>
                        <p>SUBTOTAL</p>
                    </div>
                </div>
                <hr className="text-[#c9bcbc] my-3.5" />
                <div className="flex flex-col w-full">
                    {cartStore.map(el => <ProductInCart key={el.product.id} item={el}/>)}
                </div>
                <button onClick={()=>clear()}>clear</button>
            </div>
        </div>
    </div>)
}

export default CartProductZone