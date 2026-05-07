import { QuantityCounter } from "@/components/QuantityCounter"
import type { Product } from "@/modules/store/ProductsStore"
import { Button } from "@/ui/Button"
import { useState } from "react"


type Props = {
    item:Product | undefined
}

export const CharProdZone = ({item}:Props) => {
    const [currColorProduct, setCurrColorProduct] = useState<string | undefined>(item?.colors[0].color);
    const [currSizeProduct, setCurrSizeProduct] = useState<string | undefined>(item?.size?.[0]?.size);
    const size = item?.size;

    return (<div className="flex flex-col items-start gap-3 font-[Jost]">
        <h1 className="text-[30px]">{item?.name.toUpperCase()}</h1>
        <p className="text-(--blue-color) text-[30px]">${item?.price.toFixed(2)}</p>
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
        <QuantityCounter/>
        <div className="flex items-center gap-1.5">
            <Button value="BUY NOW" bgColor="var(--blue-color)" type="button"/>
            <Button value="ADD TO CART" bgColor="var(--black-block-color)" type="button"/>
        </div>
    </div>)
}