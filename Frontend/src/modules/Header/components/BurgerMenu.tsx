

const BurgerMenu = () => {
    return(<div className="flex items-center justify-center sm:hidden">
        <span className="material-symbols-outlined cursor-pointer">menu</span>

        <div className="w-full h-full absolute z-20 top-0 right-0 bg-[#00000074] backdrop-blur-md">
            <div className="bg-[#fff] h-full w-[50%] absolute right-0 top-0 rounded-tl-2xl rounded-bl-2xl">
                <span className="material-symbols-outlined cursor-pointer absolute top-2 left-2">close</span>
            </div>
        </div>
    </div>)
}

export default BurgerMenu