import { ProductCart } from "@/components/ProductCart";
import ProductStore, { type Product } from "../store/ProductsStore";
import { useEffect, useState } from "react";

const HomeProductZone = () => {
    const products = ProductStore((state) => state.products);
    const [phoneProducts, setPhoneProducts] = useState([... products.filter(el => el.type === "phone").slice(0, 15)]);
    const [watchProducts, setWatchProducts] = useState([... products.filter(el => el.type === "smart-watches").slice(0, 15)]);
    const [renderPhoneProducts, setRenderPhoneProducts] = useState<Product[] | []>([]);
    const [renderWathchProducts, setRenderWatchProducts] = useState<Product[] | []>([]);

    const allPhoneProducts = phoneProducts.length;
    const [phonePage, setPhonePage] = useState(1);

    const allWatchesProducts = watchProducts.length;
    const [watchPage, setWatachPage] = useState(1);

    const limitProductsOnPage = 5;

    useEffect(() => {
        setRenderPhoneProducts(phoneProducts.slice(limitProductsOnPage * phonePage - limitProductsOnPage, limitProductsOnPage * phonePage));
    }, [phoneProducts, phonePage])

    useEffect(() => {
        setRenderWatchProducts(watchProducts.slice(limitProductsOnPage * watchPage - limitProductsOnPage, limitProductsOnPage * watchPage))
    }, [watchProducts, watchPage])


    return(<div className="flex flex-col gap-20 justify-center items-center w-full unselectable">
        <section className="mobile_sec flex flex-col items-center gap-5 w-(--width)">
            <div className="title flex items-center justify-between w-full font-[Jost]">
                <h1 className="text-3xl">MOBILE PRODUCTS</h1>
                <div>
                    <a className="text-[14px]" href="/Shop">GO TO SHOP</a>
                    <hr className="h-0.5 bg-[#c8c8c8] border-none" />
                </div>
            </div>
            <div className="flex items-center gap-4.5 w-full products">
                {renderPhoneProducts.map(el => <ProductCart key={el.productId} productPrice={el.price} productImageSrc={el.image} productName={el.name} countProductsInRow={5}/>)}
            </div>
            <div className="switcher flex items-center justify-center gap-2 w-full">
                {Array.from({ length: Math.ceil(allPhoneProducts / limitProductsOnPage) }, (_, i) => (
                    <span
                    onClick={() => setPhonePage(i + 1)}
                    key={i + 1}
                    style={{backgroundColor: `${phonePage === i + 1 ? "var(--black-block-color)" : "var(--grey-text-color)"}`, borderRadius: '50%'}}
                    className="w-3 h-3 cursor-pointer"
                    ></span>
                ))}
            </div>
        </section>

        <section className="watches_sec flex flex-col items-center gap-5 w-(--width)">
            <div className="title flex items-center justify-between w-full font-[Jost]">
                <h1 className="text-3xl">SMART WATCHES</h1>
                <div>
                    <a className="text-[14px]" href="/Shop">GO TO SHOP</a>
                    <hr className="h-0.5 bg-[#c8c8c8] border-none" />
                </div>
            </div>
            <div className="flex items-center gap-4.5 w-full products">
                {renderWathchProducts.map(el => <ProductCart key={el.productId} productPrice={el.price} productImageSrc={el.image} productName={el.name} countProductsInRow={5}/>)}
            </div>
            <div className="switcher flex items-center justify-center gap-2 w-full">
                {Array.from({ length: Math.ceil(allWatchesProducts / limitProductsOnPage) }, (_, i) => (
                    <span
                    onClick={() => setWatachPage(i + 1)}
                    key={i + 1}
                    style={{backgroundColor: `${watchPage === i + 1 ? "var(--black-block-color)" : "var(--grey-text-color)"}`, borderRadius: '50%'}}
                    className="w-3 h-3 cursor-pointer"
                    ></span>
                ))}
            </div>
        </section>
    </div>)
}

export default HomeProductZone;