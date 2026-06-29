import ProductInfoZone from "@/modules/ProductInfoZone/ProductInfoZone"
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const ProductPage = () => {

    const { id } = useParams();
    const {data, isLoading} = useQuery({
        queryKey: ["product", id],
        queryFn: () =>
            fetch(`https://capable-exploration-production-3154.up.railway.app/products/${id}`)
            .then(res => res.json()),
    });
    return(<>
        <ProductInfoZone data={data} isLoading={isLoading} />
    </>)
}

export default ProductPage