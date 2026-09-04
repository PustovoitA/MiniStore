import {memo} from 'react'

type Props = {
    imageSrc:string|undefined
}

export const ProductImage = memo(({imageSrc}:Props) => {
    return(<>
        <img className="w-full h-full object-cover unselectable" src={imageSrc} alt="Product Image" />
    </>)
})