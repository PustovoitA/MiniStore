import { ProductCart } from "@/components/ProductCart";
import ProductStore from "../store/ProductsStore";

const HomeProductZone = () => {
    const products = ProductStore((state) => state.products);

    return(<div className="flex flex-col justify-center items-center w-full">
        <section className="mobile_sec w-(--width)">
            <div className="title">
                <h1>MOBILE PRODUCTS</h1>
                <a href="#">GO TO SHOP</a>
            </div>
            <div className="flex items-center gap-4.5 products">
                {products.map(el => <ProductCart productPrice={el.price} productImageSrc={el.image} productName={el.name} countProductsInRow={5}/>)}
            </div>
            <div className="switcher"></div>
        </section>

        <section className="watches_sec w-(--width)">
            <div className="title"></div>
            <div className="products"></div>
            <div className="switcher"></div>
        </section>
    </div>)
}

export default HomeProductZone;