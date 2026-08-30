
    interface Props {
        onClick: () => void
    }

const ButtonAddToCart = ({onClick}:Props) => {
    return(<>
        <button
            onClick={onClick}
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
    </>)
}
export default ButtonAddToCart