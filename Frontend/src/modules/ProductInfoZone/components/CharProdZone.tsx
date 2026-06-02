import { QuantityCounter } from "@/components/QuantityCounter"
import type { Product } from "@/types/Product"

import { Button } from "@/ui/Button"
import { memo, useEffect, useState } from "react"


type Props = {
    item:Product | undefined
}

export const CharProdZone = memo(({item}:Props) => {
    const [currColorProduct, setCurrColorProduct] = useState<string | undefined>(item?.colors[0].color);
    const [currSizeProduct, setCurrSizeProduct] = useState<string | undefined>(item?.size?.[0]?.size);
    const [selectedCountProduct, setSelectedCountProduct] = useState(1);
    const size = item?.size;

    useEffect(()=>{
        setCurrColorProduct(item?.colors[0].color);
        setCurrSizeProduct(item?.size?.[0]?.size);
    },[item]);

    function calculateDiscount(price:number, discount:number):string{
        const result = price - (price * discount / 100)
        return result.toFixed(2);
    }

    return (<div className="flex flex-col items-start gap-3 font-[Jost]">
        <h1 className="text-[30px]">{item?.name.toUpperCase()}</h1>
        {item!.discount === null 
            ?
                <p className="text-(--blue-color) text-[30px]">${item?.price.toFixed(2)}</p>
            :
                <div>
                    <p className="text-(--grey-text-color) text-[20px] line-through">${item?.price.toFixed(2)}</p>
                    <p className="text-[#ea0404] text-[30px]">${calculateDiscount(item?.price!, item?.discount!)}</p>
                </div>
        }
        <p className="shirt_description text-(--grey-text-color) w-150">
            Justo, cum feugiat imperdiet nulla molestie ac vulputate scelerisque amet. 
            Bibendum adipiscing platea blandit sit sed quam semper rhoncus. 
            Diam ultrices maecenas consequat eu tortor orci, 
            cras lectus mauris, cras egestas quam venenatis neque.
        </p>
        <div className="flex flex-col items-start gap-2 unselectable">
            <p className="text-[20px] underline">COLOR</p>
            <ul className="flex items-center gap-4">
                {item?.colors.map(el => 
                <li
                key={el.color}
                className={`hover:text-(--blue-color) cursor-pointer transition-colors text-[18px] ${currColorProduct === el.color ? 'text-(--blue-color)' : 'text-(--black-text-color)'}`}
                onClick={() => setCurrColorProduct(el.color)}
                >{el.color}</li>
                )}
            </ul>
        </div>
        {size ? 
            <div className="flex flex-col items-start gap-2 unselectable">
                <p className="text-[20px] underline">SIZE</p>
                <ul className="flex items-center gap-4">
                {item?.size?.map(el => 
                <li
                key={el.size}
                className={`hover:text-(--blue-color) cursor-pointer transition-colors text-[18px] ${currSizeProduct === el.size ? 'text-(--blue-color)' : 'text-(--black-text-color)'}`}
                onClick={() => setCurrSizeProduct(el.size)}
                >{el.size}</li>
                )}
            </ul>
            </div>
         :null}
        <p>
            {`${item?.count} in stock`}
        </p>
        <QuantityCounter setSelectedCountProduct={setSelectedCountProduct} selectedCountProduct={selectedCountProduct} maxCountProduct={item?.count}/>
        <div className="flex items-center gap-1.5">
            <Button value="BUY NOW" bgColor="var(--blue-color)" type="button"/>
            <Button value="ADD TO CART" bgColor="var(--black-block-color)" type="button"/>
        </div>
    </div>)
})