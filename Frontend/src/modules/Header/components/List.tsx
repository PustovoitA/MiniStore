

const List = () =>{
    return(<>
        <ul className="flex gap-12 font-[Jost] text-black">
            <li className="flex items-center hover:text-(--blue-color) cursor-pointer transition-colors tracking-widest">HOME</li>
            <li className="flex items-center hover:text-(--blue-color) cursor-pointer transition-colors tracking-widest">
                PAGES
                <span className="material-symbols-outlined">arrow_drop_down</span>
            </li>
            <li className="flex items-center hover:text-(--blue-color) cursor-pointer transition-colors tracking-widest">ABOUT</li>
            <li className="flex items-center hover:text-(--blue-color) cursor-pointer transition-colors tracking-widest">BLOGS</li>
            <li className="flex items-center hover:text-(--blue-color) cursor-pointer transition-colors tracking-widest">CONTACT</li>
        </ul>
    </>)
}

export default List