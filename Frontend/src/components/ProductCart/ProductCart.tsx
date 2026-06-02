import { scrolToTop } from "@/assets/Functions";
import { memo } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
    countProductsInRow: number;
    productName: string;
    productImageSrc: string;
    productPrice: number;
    id:string;
}

const ProductCart = memo(({countProductsInRow, productPrice, productName, productImageSrc, id}:Props) => {
    const navigate = useNavigate();

    return(
    <div className=" flex flex-col items-center gap-2" style={{width: `calc((100% / ${countProductsInRow}) - 9px)`}}>
        <div onClick={()=>{
            console.log(id);
            navigate(`/product/${id}`);
            scrolToTop();
            }} className="image_block group flex flex-col items-center w-full h-90 relative overflow-hidden">
            <img
                className="object-cover h-full w-full"
                src={productImageSrc}
                alt="image of product"
            />

            <button
                className="
                flex items-center gap-2
                absolute bottom-8
                py-1.5 px-9
                cursor-pointer
                bg-(--black-block-color) text-white font-[Jost]

                translate-y-10 opacity-0
                transition-all duration-300 ease-out

                group-hover:translate-y-0 group-hover:opacity-100
                "
            type="button"
            >
                ADD TO CART
                <span className="material-symbols-outlined">shopping_cart</span>
            </button>
        </div>
        <div className="inf0_block flex items-center justify-between font-[Jost] w-full text-[18px]">
            <p className="name">{productName.toUpperCase()}</p>
            <p className="prise text-(--blue-color)">{`$${productPrice}`}</p>
        </div>
    </div>)
})

export default ProductCart