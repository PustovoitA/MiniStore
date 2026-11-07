import CartStore from "@/store/CartStore";
import CheckoutState from "@/store/CheckoutState"


export const useClearCheckout = () => {
    const buyNowProduct = CheckoutState((state) => state.buyNowProduct);
    const resetBuyNowProduct = CheckoutState((state) => state.resetBuyNowProduct);
    const clearItemsToBuy = CheckoutState((state) => state.clearItemsToBuy);

    const clearBasket = CartStore((state) => state.clearBasket);
    const clearTotal = CartStore((state) => state.clearTotal);

    return () => {
        clearItemsToBuy();

        if(buyNowProduct === null){
            clearBasket();
            clearTotal();
        }else{
            resetBuyNowProduct();
        }
    }
}