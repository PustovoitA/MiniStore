import { ProductCart } from "@/components/ProductCart";
import ProductStore from "../store/ProductsStore";

const HomeProductZone = () => {
    const products = ProductStore((state) => state.products);

    return(<div className="flex flex-col gap-20 justify-center items-center w-full">
        <section className="mobile_sec flex flex-col items-center gap-5 w-(--width)">
            <div className="title flex items-center justify-between w-full font-[Jost]">
                <h1 className="text-3xl">MOBILE PRODUCTS</h1>
                <div>
                    <a className="text-[14px]" href="/Shop">GO TO SHOP</a>
                    <hr className="h-0.5 bg-[#c8c8c8] border-none" />
                </div>
            </div>
            <div className="flex items-center gap-4.5 w-full products">
                {products.map(el => <ProductCart productPrice={el.price} productImageSrc={el.image} productName={el.name} countProductsInRow={5}/>)}
            </div>
            <div className="switcher w-full"></div>
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
                {products.map(el => <ProductCart productPrice={el.price} productImageSrc={el.image} productName={el.name} countProductsInRow={5}/>)}
            </div>
            <div className="switcher w-full"></div>
        </section>
    </div>)
}

export default HomeProductZone;