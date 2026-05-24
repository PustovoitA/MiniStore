import { memo, useState } from "react";

type Props = {
    maxCountProduct:number|undefined,
    setSelectedCountProduct:(value: number)=>void,
    selectedCountProduct:number|undefined
}

const QuantityCounter = memo(({maxCountProduct, setSelectedCountProduct, selectedCountProduct }:Props) => {
    const [inputValue, setInputValue] = useState(selectedCountProduct?.toString() || "1");

    const decrement = ():void => {
        if(selectedCountProduct! > 1){
            setSelectedCountProduct(selectedCountProduct! - 1)
            setInputValue(String(selectedCountProduct! - 1))
        }else{
            setSelectedCountProduct(1)
            setInputValue("1");
        }
    }

    const increment = ():void => {
        if(selectedCountProduct! < maxCountProduct!){
            setSelectedCountProduct(selectedCountProduct! + 1);
            setInputValue(String(selectedCountProduct! + 1));
        }else{
            setSelectedCountProduct(maxCountProduct!)
            setInputValue(maxCountProduct!.toString())
        }
    }

    const handleBlur = ():void => {
        const value = Number(inputValue);

        if (!inputValue || value < 1) {
            setSelectedCountProduct(1);
            setInputValue("1");
        } else if (value > maxCountProduct!) {
            setSelectedCountProduct(maxCountProduct!);
            setInputValue(maxCountProduct!.toString());
        } else {
            setSelectedCountProduct(value);
            setInputValue(value.toString());
        }
    }

    return(<div className="flex items-center gap-2 font-[Jost]">
        <button onClick={()=>decrement()} className="border border-(--grey-light-color) py-2 px-4.5 cursor-pointer">-</button>
        <input
        className="no-spinner flex justify-center items-center border border-(--grey-light-color) py-2 w-25 text-center outline-none focus:outline-none focus:ring-0" 
        type="number"
        onChange={(evetn)=>setInputValue(evetn.target.value)}
        onBlur={()=>handleBlur()}
        onKeyDown={(event)=>{
            if(event.key === "Enter"){
                event.currentTarget.blur(); 
            }
        }}
        value={inputValue}
        min={1}
        max={maxCountProduct}
        />
        <button onClick={()=>increment()} className="border border-(--grey-light-color) py-2 px-4.5 cursor-pointer">+</button>
    </div>);
})

export default QuantityCounter