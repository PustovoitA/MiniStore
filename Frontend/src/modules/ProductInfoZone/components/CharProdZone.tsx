import type { Product } from "@/modules/store/ProductsStore"
import { Button } from "@/ui/Button"


type Props = {
    item:Product | undefined
}

export const CharProdZone = ({item}:Props) => {
    return (<div className="flex flex-col items-start gap-2">
        <h1>{item?.name.toUpperCase()}</h1>
        <p>${item?.price}</p>
        <div>
            <p>COLOR</p>
            <ul>
                {item?.colors.map(el => <li>{el.color}</li>)}
            </ul>
        </div>
        <div className="flex items-center gap-1.5">
            <Button value="BUY NOW" bgColor="var(--blue-color)" type="button"/>
            <Button value="ADD TO CART" bgColor="var(--black-block-color)" type="button"/>
        </div>
    </div>)
}