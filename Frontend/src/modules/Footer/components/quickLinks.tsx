
const QuickLinks = () => {
    return (<div className="flex flex-col gap-2">
        <h1 className="font-[Jost] text-xl tracking-wider">QUICK LINKS</h1>

        <ul className="flex flex-col gap-1 font-[Jost]">
            <li className="hover:text-(--blue-color) transition-colors">
                <a className="text-[15px] tracking-widest" href="#">HOME</a>
            </li>
            <li className="hover:text-(--blue-color) transition-colors">
                <a className="text-[15px] tracking-widest" href="#">ABOUT</a>
            </li>
            <li className="hover:text-(--blue-color) transition-colors">
                <a className="text-[15px] tracking-widest" href="#">SHOP</a>
            </li>
            <li className="hover:text-(--blue-color) transition-colors">
                <a className="text-[15px] tracking-widest" href="#">BLOGS</a>
            </li>
            <li className="hover:text-(--blue-color) transition-colors">
                <a className="text-[15px] tracking-widest" href="#">CONTACT</a>
            </li>
        </ul>
    </div>)
}

export default QuickLinks