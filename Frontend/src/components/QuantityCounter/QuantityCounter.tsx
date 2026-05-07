
const QuantityCounter = () => {
    return(<div className="flex items-center gap-2 font-[Jost]">
        <button className="border border-(--grey-light-color) py-2 px-4.5 cursor-pointer">-</button>
        <input 
        className="no-spinner flex justify-center items-center border border-(--grey-light-color) py-2 w-25 text-center outline-none focus:outline-none focus:ring-0" 
        type="number"
         defaultValue={1}
         />
        <button className="border border-(--grey-light-color) py-2 px-4.5 cursor-pointer">+</button>
    </div>);
}

export default QuantityCounter