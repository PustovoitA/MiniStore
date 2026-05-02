import ProductStore, { type Product } from "../store/ProductsStore";
import { CharProdZone } from "./components/CharProdZone";
import { ImageProdZone } from "./components/ImageProdZone";

type Props = {
    ProductId:string | undefined
}

const ProductInfoZone = ({ProductId}:Props) => {

    const products = ProductStore((state) => state.products);
    const getProduct = (products:Product[]):Product | undefined => {
        for(const product of products){
            if(product.productId === ProductId){
                return product;
            }else{
                continue
            }
        }
        console.log("Товар не найден");
    }
    const currProduct = getProduct(products);

    return(<div className="flex justify-center items-center w-full">
        <div className="flex flex-col items-center w-(--width)">
            <section className="product_sec">
                <div className="image_product">
                    <ImageProdZone imageSrc={currProduct?.image}/>
                </div>
                <div className="char_product">
                    <CharProdZone/>
                </div>
            </section>

            <section className="info_sec">

            </section>
        </div>
    </div>)
}

export default ProductInfoZone