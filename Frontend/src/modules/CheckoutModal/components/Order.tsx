import { calculateDiscount } from "@/assets/discount";
import CartStore from "@/store/CartStore";
import { useState } from "react";

const formatPrice = (price: number) => `$${price.toFixed(2)}`;

const Order = () => {
    const basket = CartStore((state) => state.basket);
    const [isPromoOpen, setIsPromoOpen] = useState(false);

    const subtotal = basket.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    const discount = basket.reduce((sum, item) => {
        const discountedPrice = calculateDiscount(item.product.price, item.product.discount);
        return sum + (item.product.price - discountedPrice) * item.quantity;
    }, 0);
    const total = subtotal - discount;

    return (
        <aside 
        style={{boxShadow: "0 0 10px 0 rgb(0 0 0 / 0.2)"}}
        className="w-full bg-white p-10 sm:p-6 lg:p-5 xl:p-6 box-border rounded-2xl">
            <div className="mb-5 flex items-center justify-between gap-3">
                <h2 className="text-xl font-semibold text-(--black-text-color)">Your order</h2>
                <a href="/Cart" className="shrink-0 text-sm font-medium text-(--blue-color) hover:underline">Edit</a>
            </div>

            <div className="max-h-72 space-y-5 overflow-y-auto pr-1">
                {basket.length === 0 ? (
                    <p className="py-4 text-sm text-(--grey-text-color)">Your cart is empty.</p>
                ) : basket.map(({ product, quantity }) => {
                    const price = calculateDiscount(product.price, product.discount);
                    return (
                        <article key={product.id} className="flex gap-3">
                            <div className="h-20 w-20 shrink-0 bg-(--grey-light-color)">
                                <img className="h-full w-full object-cover" src={product.image} alt={product.name} />
                            </div>
                            <div className="min-w-0 flex-1 text-sm">
                                <p className="line-clamp-2 font-medium text-(--black-text-color)">{product.name}</p>
                                <p className="mt-0.5 text-(--grey-text-color)">{product.type === "phone" ? "Phone" : "Smart watch"}</p>
                                <p className="mt-1 text-xs text-(--grey-text-color)">Qty: {quantity}</p>
                                <div className="mt-1 flex flex-wrap items-center gap-x-2 text-sm">
                                    {product.discount !== null && <span className="text-(--grey-text-color) line-through">{formatPrice(product.price * quantity)}</span>}
                                    <span className={product.discount !== null ? "font-semibold text-red-500" : "font-medium"}>{formatPrice(price * quantity)}</span>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>

            <div className="mt-6 border border-(--border)">
                <button type="button" aria-expanded={isPromoOpen} onClick={() => setIsPromoOpen((open) => !open)} className="flex w-full items-center justify-between px-3 py-3 text-left text-sm text-(--grey-text-color)">
                    <span>I have a promo code</span>
                    <span aria-hidden="true" className={`text-lg transition-transform ${isPromoOpen ? "rotate-180" : ""}`}>⌄</span>
                </button>
                {isPromoOpen && (
                    <div className="flex border-t border-(--border) p-2">
                        <input aria-label="Promo code" placeholder="Enter promo code" className="min-w-0 flex-1 px-2 py-2 text-sm outline-none" />
                        <button type="button" className="px-3 text-sm font-medium text-(--blue-color)">Apply</button>
                    </div>
                )}
            </div>

            <dl className="mt-5 space-y-3 text-sm">
                <div className="flex justify-between gap-3"><dt>{basket.reduce((count, item) => count + item.quantity, 0)} items</dt><dd>{formatPrice(subtotal)}</dd></div>
                <div className="flex justify-between gap-3"><dt>Delivery</dt><dd className="text-right">Free</dd></div>
                {discount > 0 && <div className="flex justify-between gap-3"><dt>Discount</dt><dd className="text-red-500">−{formatPrice(discount)}</dd></div>}
                <div className="flex justify-between gap-3 border-t border-(--border) pt-3 text-base font-semibold"><dt>Total</dt><dd>{formatPrice(total)}</dd></div>
            </dl>

            <p className="mt-5 text-xs leading-4 text-(--black-text-color)">
                By placing your order, you agree to our <a href="#" className="text-(--blue-color) hover:underline">terms of service</a>, <a href="#" className="text-(--blue-color) hover:underline">return policy</a> and <a href="#" className="text-(--blue-color) hover:underline">privacy policy</a>.
            </p>
            <button type="button" className="mt-4 w-full bg-(--blue-color) px-4 py-4 text-sm font-semibold uppercase text-white transition-colors hover:brightness-95">
                Place order
            </button>
        </aside>
    );
};

export default Order;
