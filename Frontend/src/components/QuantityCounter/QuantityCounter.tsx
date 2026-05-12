
type Props = {
    maxCountProduct:number|undefined,
    setSelectedCountProduct:(value: number)=>void,
    selectedCountProduct:number|undefined
}

const QuantityCounter = ({maxCountProduct, setSelectedCountProduct, selectedCountProduct }:Props) => {
    const decrement = ():void => {
        if(selectedCountProduct !== 1){
            setSelectedCountProduct(selectedCountProduct! - 1)
        }else{
            return
        }
    }

    const increment = ():void => {
        if(selectedCountProduct !== maxCountProduct){
            setSelectedCountProduct(selectedCountProduct! + 1);
        }else{
            return
        }
    }

    return(<div className="flex items-center gap-2 font-[Jost]">
        <button onClick={()=>decrement()} className="border border-(--grey-light-color) py-2 px-4.5 cursor-pointer">-</button>
        <input 
        className="no-spinner flex justify-center items-center border border-(--grey-light-color) py-2 w-25 text-center outline-none focus:outline-none focus:ring-0" 
        type="number"
        defaultValue={1}
        value={selectedCountProduct}
        min={1}
        max={maxCountProduct}
        />
        <button onClick={()=>increment()} className="border border-(--grey-light-color) py-2 px-4.5 cursor-pointer">+</button>
    </div>);
}

export default QuantityCounter