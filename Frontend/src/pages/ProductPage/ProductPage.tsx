import ProductInfoZone from "@/modules/ProductInfoZone/ProductInfoZone"
import { useParams } from "react-router-dom";

const ProductPage = () => {

    const { ProductId } = useParams();

    return(<>
        <ProductInfoZone ProductId = {ProductId}/>
    </>)
}

export default ProductPage