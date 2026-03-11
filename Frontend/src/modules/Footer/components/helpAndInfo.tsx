
const HelpAndInfo = () => {
    return(<div className="flex flex-col gap-2 unselectable">
        <h1 className="font-[Jost] text-xl tracking-wider">HELP & INFO</h1>

        <ul className="flex flex-col gap-1 font-[Jost]">
            <li className="hover:text-(--blue-color) transition-colors">
                <a className="text-[15px] tracking-widest" href="#">TRACK YOUR ORDER</a>
            </li>
            <li className="hover:text-(--blue-color) transition-colors">
                <a className="text-[15px] tracking-widest" href="#">RETURNS POLICIES</a>
            </li>
            <li className="hover:text-(--blue-color) transition-colors">
                <a className="text-[15px] tracking-widest" href="#">SHIPPING + DELIVERY</a>
            </li>
            <li className="hover:text-(--blue-color) transition-colors">
                <a className="text-[15px] tracking-widest" href="#">CONTACT US</a>
            </li>
            <li className="hover:text-(--blue-color) transition-colors">
                <a className="text-[15px] tracking-widest" href="#">FAQS</a>
            </li>
        </ul>
    </div>)
}

export default HelpAndInfo