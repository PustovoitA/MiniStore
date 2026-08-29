import { addProductInCart } from "@/assets/cartFunctions";
import { scrolToTop } from "@/assets/scrolToTopFunction";
import type { Product } from "@/types/Product";
import { memo } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
    item: Product
}

const ProductCart = memo(({item}:Props) => {
    const navigate = useNavigate();

    return (
  <div className="flex flex-col items-center gap-2 w-full">
    <div className="image_block group flex flex-col items-center w-full aspect-3/4 relative overflow-hidden">
      <img
        onClick={() => {
          navigate(`/product/${item.id}`);
          scrolToTop();
        }}
        className="object-cover h-full w-full cursor-pointer"
        src={item.image}
        alt="image of product"
      />

      <button
        onClick={() => {
          addProductInCart(item, 1);
        }}
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
      <p className="name">{item.name.toUpperCase()}</p>
      <p className="prise text-(--blue-color)">{`$${item.price}`}</p>
    </div>
  </div>
);
})

export default ProductCart