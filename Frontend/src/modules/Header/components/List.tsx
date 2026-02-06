

const List = () =>{
    return(<>
        <ul className="flex gap-4 font-[Jost] cursor-pointer">
            <li>HOME</li>
            <li className="flex items-center">
                PAGES
                <span className="material-symbols-outlined">arrow_drop_down</span>
            </li>
            <li>ABOUT</li>
            <li>BLOGS</li>
            <li>CONTACT</li>
        </ul>
    </>)
}

export default List