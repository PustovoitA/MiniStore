

const List = () =>{
    return(<>
        <ul className="flex gap-12 font-[Jost] text-black">
            <li className="hover:text-(--blue-color) cursor-pointer">HOME</li>
            <li className="flex items-center hover:text-(--blue-color) cursor-pointer">
                PAGES
                <span className="material-symbols-outlined">arrow_drop_down</span>
            </li>
            <li className="hover:text-(--blue-color) cursor-pointer">ABOUT</li>
            <li className="hover:text-(--blue-color) cursor-pointer">BLOGS</li>
            <li className="hover:text-(--blue-color) cursor-pointer">CONTACT</li>
        </ul>
    </>)
}

export default List