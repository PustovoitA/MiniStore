import ProductPageSection from "@/modules/ProductInfoZone/ProductPageSection";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const ProductPage = () => {

    const BASE_URL = import.meta.env.VITE_API_URL;

    const { id } = useParams();
    const {data, isLoading} = useQuery({
        queryKey: ["product", id],
        queryFn: () =>
            fetch(`${BASE_URL}/products/${id}`)
            .then(res => res.json()),
    });
    return(<>
        <ProductPageSection data={data} isLoading={isLoading} />
    </>)
}

export default ProductPage