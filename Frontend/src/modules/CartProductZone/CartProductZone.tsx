import CartStore from "@/pages/store/CartStore"
import { ProductInCart } from "./components/ProductInCart";
import { Button } from "@/ui/Button";


const CartProductZone = () => {
    const cartStore = CartStore((state) => state.basket);

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

                <div className="mt-15">
                    <h1 className="text-[30px]">CART TOTALS</h1>
                    <hr className="text-[#c9bcbc] my-3.5" />
                    <div className="flex items-center justify-between w-[40%] text-[18px]">
                        <p className="underline">SUBTOTAL</p>
                        <p className="text-(--blue-color)">price</p>
                    </div>
                    <hr className="text-[#c9bcbc] my-3.5" />
                    <div className="flex items-center justify-between w-[40%] text-[18px]">
                        <p className="underline">TOTAL</p>
                        <p className="text-(--blue-color)">price</p>
                    </div>
                    <hr className="text-[#c9bcbc] my-3.5" />

                    <div className="flex items-center gap-4">
                        <div>
                            <Button bgColor="var(--black-block-color)" type="button" value="CONTINUE SHOPPING" />
                        </div>
                        <div>
                            <Button bgColor="var(--black-block-color)" type="button" value="PROCEED TO CHECKOUT" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default CartProductZone