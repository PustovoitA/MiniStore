import { CartItem } from "./components/CartItem";
import Total from "./components/Total";

import CartStore from "@/pages/store/CartStore"


const CartProductZone = () => {
    const cartStore = CartStore((state) => state.basket);

    return (<div className="flex justify-center font-[Jost] w-full my-10 md:my-20 px-4 sm:px-6">
        <div className="w-full max-w-(--width)">
            <div className="w-full">
                <div className="hidden md:flex items-center justify-between text-[16px] lg:text-[18px] w-full">
                    <p>PRODUCT</p>
                    <div className="flex items-center justify-around w-[50%]">
                        <p>QUANTITY</p>
                        <p>SUBTOTAL</p>
                    </div>
                </div>
                <hr className="hidden md:block text-[#c9bcbc] my-3.5" />
                <div className="flex flex-col w-full">
                    {cartStore.map(el => <CartItem key={el.product.id} item={el}/>)}
                </div>

                <Total/>
            </div>
        </div>
    </div>)
}
export default CartProductZone