import { addProductInCart } from "@/assets/cartFunctions"
import { calculateDiscount, hasDiscount } from "@/assets/discount"
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


    return (<div className="flex flex-col items-center lg:items-start gap-3 font-[Jost] text-center lg:text-left w-full">
    <h1 className="text-2xl sm:text-[30px]">{item?.name.toUpperCase()}</h1>
    {hasDiscount(item!.discount)
        ?
            <div>
                <p className="text-(--grey-text-color) text-lg sm:text-[20px] line-through">${item?.price.toFixed(2)}</p>
                <p className="text-[#ea0404] text-2xl sm:text-[30px]">${calculateDiscount(item?.price!, item?.discount!)}</p>
            </div>
        :
            <p className="text-(--blue-color) text-2xl sm:text-[30px]">${item?.price.toFixed(2)}</p>
    }
    <p className="shirt_description text-(--grey-text-color) w-full max-w-150 text-sm sm:text-base">
        Justo, cum feugiat imperdiet nulla molestie ac vulputate scelerisque amet.
        Bibendum adipiscing platea blandit sit sed quam semper rhoncus.
        Diam ultrices maecenas consequat eu tortor orci,
        cras lectus mauris, cras egestas quam venenatis neque.
    </p>
    <div className="flex flex-col items-center lg:items-start gap-2 unselectable">
        <p className="text-lg sm:text-[20px] underline">COLOR</p>
        <ul className="flex items-center gap-4 flex-wrap justify-center lg:justify-start">
            {item?.colors.map(el =>
            <li
            key={el.color}
            className={`hover:text-(--blue-color) cursor-pointer transition-colors text-base sm:text-[18px] ${currColorProduct === el.color ? 'text-(--blue-color)' : 'text-(--black-text-color)'}`}
            onClick={() => setCurrColorProduct(el.color)}
            >{el.color}</li>
            )}
        </ul>
    </div>
    {size ?
        <div className="flex flex-col items-center lg:items-start gap-2 unselectable">
            <p className="text-lg sm:text-[20px] underline">SIZE</p>
            <ul className="flex items-center gap-4 flex-wrap justify-center lg:justify-start">
            {item?.size?.map(el =>
            <li
            key={el.size}
            className={`hover:text-(--blue-color) cursor-pointer transition-colors text-base sm:text-[18px] ${currSizeProduct === el.size ? 'text-(--blue-color)' : 'text-(--black-text-color)'}`}
            onClick={() => setCurrSizeProduct(el.size)}
            >{el.size}</li>
            )}
        </ul>
        </div>
     : null}
    <p className="text-sm sm:text-base">
        {`${item?.count} in stock`}
    </p>
    <QuantityCounter setSelectedCountProduct={setSelectedCountProduct} selectedCountProduct={selectedCountProduct} maxCountProduct={item?.count} />
    <div className="flex items-center gap-1.5 flex-wrap justify-center lg:justify-start w-full">
        <Button value="BUY NOW" bgColor="var(--blue-color)" type="button" />

        <div onClick={() => {
            addProductInCart(item, selectedCountProduct);
        }}>
            <Button value="ADD TO CART" bgColor="var(--black-block-color)" type="button" />
        </div>
    </div>
</div>)
})