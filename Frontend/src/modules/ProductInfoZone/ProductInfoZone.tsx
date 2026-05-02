import ProductStore, { type Product } from "../store/ProductsStore";

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
                <div className="image_product"><img src={currProduct?.image} alt="odfsof" /></div>
                <div className="char_product"></div>
            </section>

            <section className="info_sec">

            </section>
        </div>
    </div>)
}

export default ProductInfoZone