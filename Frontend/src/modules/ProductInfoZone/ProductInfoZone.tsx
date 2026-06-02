import { CharProdZone } from "./components/CharProdZone";
import { ImageProdZone } from "./components/ImageProdZone";
import type { Product } from "@/types/Product";

type Props = {
    data:Product;
    isLoading:boolean;
}

const ProductInfoZone = ({data, isLoading}:Props) => {

    if(isLoading){
        return <p>loading...</p>
    }

    return(<div className="flex justify-center items-center w-full mt-20">
        <div className="flex flex-col items-center w-(--width)">
            <section className="product_sec flex items-start justify-center gap-3">
                <div className="image_product w-137.5 h-137.5">
                    <ImageProdZone imageSrc={data.image}/>
                </div>
                <div className="char_product">
                    <CharProdZone item={data}/>
                </div>
            </section>

            <section className="info_sec">

            </section>
        </div>
    </div>)
}

export default ProductInfoZone