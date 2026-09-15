
const Delivery = () => {
    return(<>
        <div
        style={{boxShadow: "0 0 10px 0 rgb(0 0 0 / 0.2)"}}
        className="flex flex-col items-start gap-4 w-full p-10 box-border rounded-2xl">
            <h1 className="text-[25px]">Delivery</h1>
            <ul className="flex items-center gap-2.5">
                <li
                className="flex flex-col justify-center items-center border border-(--border) rounded-md cursor-pointer px-[15px] py-[5px]">
                    <span className="text-[20px]">In-store pickup</span>
                    <span className="text-(--grey-text-color) text-[14px]">payment upon receipt</span>
                </li>
                <li
                className="flex flex-col justify-center items-center border border-(--border) rounded-md cursor-pointer px-[15px] py-[5px]">
                    <span className="text-[20px]">Nova Poshta</span>
                    <span className="text-(--grey-text-color) text-[14px]">extensive network</span>
                </li>
                <li
                className="flex flex-col justify-center items-center border border-(--border) rounded-md cursor-pointer px-[15px] py-[5px]">
                    <span className="text-[20px]">Ukrposhta</span>
                    <span className="text-(--grey-text-color) text-[14px]">affordable terms</span>
                </li>
            </ul>
        </div>
    </>)
}
export default Delivery