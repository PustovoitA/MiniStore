import CartStore from "@/pages/store/CartStore"
import { ProductInCart } from "./components/ProductInCart";
import { Button } from "@/ui/Button";
import { useEffect, useState } from "react";


const CartProductZone = () => {
    const cartStore = CartStore((state) => state.basket);
    const totals = CartStore((state) => state.totals)
    const calculateTotals = CartStore((state) => state.calculateTotals);
    const [calculatedTotal, setCalculatedTotal] = useState(0)

    useEffect(() => {
        setCalculatedTotal(calculateTotals());
    }, [totals]);

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
                    {cartStore.map(el => <ProductInCart key={el.product.id} item={el}/>)}
                </div>

                <div className="mt-10 md:mt-15">
                    <h1 className="text-[24px] md:text-[30px]">CART TOTAL</h1>
                    <hr className="text-[#c9bcbc] my-3.5" />
                    <div className="flex items-center justify-between w-full sm:w-[60%] md:w-[40%] text-[16px] md:text-[18px]">
                        <p className="underline">TOTAL</p>
                        <p className="text-(--blue-color)">{`$${calculatedTotal.toFixed(2)}`}</p>
                    </div>
                    <hr className="text-[#c9bcbc] my-3.5" />

                    <div className="flex flex-wrap items-center gap-4">
                        <div className="w-full sm:w-auto">
                            <Button bgColor="var(--black-block-color)" type="button" value="CONTINUE SHOPPING" />
                        </div>
                        <div className="w-full sm:w-auto">
                            <Button bgColor="var(--black-block-color)" type="button" value="PROCEED TO CHECKOUT" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default CartProductZone