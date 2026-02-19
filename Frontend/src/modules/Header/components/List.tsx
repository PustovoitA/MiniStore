

const List = () =>{
    return(<>
        <ul className="flex gap-12 font-[Jost] text-black">
            <li className="flex items-center hover:text-(--blue-color) cursor-pointer transition-colors">HOME</li>
            <li className="flex items-center hover:text-(--blue-color) cursor-pointer transition-colors">
                PAGES
                <span className="material-symbols-outlined">arrow_drop_down</span>
            </li>
            <li className="flex items-center hover:text-(--blue-color) cursor-pointer transition-colors">ABOUT</li>
            <li className="flex items-center hover:text-(--blue-color) cursor-pointer transition-colors">BLOGS</li>
            <li className="flex items-center hover:text-(--blue-color) cursor-pointer transition-colors">CONTACT</li>
        </ul>
    </>)
}

export default List