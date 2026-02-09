
const Toolbar = () =>{
    return(<>
        <ul className="flex gap-4">
            <li className="flex items-center hover:text-(--blue-color) cursor-pointer">
                <span className="material-symbols-outlined">search</span>
            </li>
            <li className="flex items-center hover:text-(--blue-color) cursor-pointer">
                <span className="material-symbols-outlined">person</span>
            </li>
            <li className="flex items-center hover:text-(--blue-color) cursor-pointer">
                <span className="material-symbols-outlined">shopping_cart</span>
                <span className="flex items-center">(0)</span>
            </li>
        </ul>
    </>)
}

export default Toolbar