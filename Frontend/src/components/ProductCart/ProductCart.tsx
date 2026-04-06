
const ProductCart = () => {
    return(
    <div className="w-75 flex flex-col items-center gap-2">
        <div className="image_block group flex flex-col items-center w-full h-90 relative overflow-hidden">
            <img
                className="object-cover h-full w-full"
                src="https://images.pexels.com/photos/29020349/pexels-photo-29020349.jpeg"
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
            <p className="name">{"iphone 13".toUpperCase()}</p>
            <p className="prise text-(--blue-color)">{`$${300}`}</p>
        </div>
    </div>)
}

export default ProductCart