import styles from "./style/loader.module.css"

import { ProductInfo } from "./components/ProductInfo";
import { ProductImage } from "./components/ProductImage";

import type { Product } from "@/types/Product";

type Props = {
    data: Product;
    isLoading: boolean;
}

const ProductPageSection = ({ data, isLoading }: Props) => {

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-125 w-full mt-10 lg:mt-20 px-4 sm:px-8 lg:px-0">
                <span className={styles.loader}></span>
            </div>
        )
    }

    return (
        <div className="flex justify-center items-center w-full mt-10 lg:mt-20 px-4 sm:px-8 lg:px-0">
            <div className="flex flex-col items-center w-full max-w-(--width)">
                <section className="product_sec flex flex-col lg:flex-row items-center lg:items-start justify-center gap-6 lg:gap-3 w-full">
                    <div className="image_product w-full max-w-137.5 aspect-square lg:w-137.5 lg:h-137.5 shrink-0">
                        <ProductImage imageSrc={data.image} />
                    </div>
                    <div className="char_product w-full max-w-137.5 lg:max-w-none">
                        <ProductInfo item={data} />
                    </div>
                </section>

                <section className="info_sec w-full">

                </section>
            </div>
        </div>
    )
}

export default ProductPageSection