import { useCallback, memo, useMemo } from "react";
import ProductStore, { type Product } from "../store/ProductsStore";
import { CharProdZone } from "./components/CharProdZone";
import { ImageProdZone } from "./components/ImageProdZone";

type Props = {
    ProductId:string | undefined
}

const ProductInfoZone = ({ProductId}:Props) => {

    const products = ProductStore((state) => state.products);
    const currProduct = useMemo(() => products.find(el => el.productId === ProductId),[products, ProductId]);

    return(<div className="flex justify-center items-center w-full mt-[80px]">
        <div className="flex flex-col items-center w-(--width)">
            <section className="product_sec flex items-start justify-center gap-3">
                <div className="image_product w-137.5 h-137.5">
                    <ImageProdZone imageSrc={currProduct?.image}/>
                </div>
                <div className="char_product">
                    <CharProdZone item={currProduct}/>
                </div>
            </section>

            <section className="info_sec">

            </section>
        </div>
    </div>)
}

export default ProductInfoZone