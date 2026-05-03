
type Props = {
    imageSrc:string|undefined
}

export const ImageProdZone = ({imageSrc}:Props) => {
    return(<>
        <img className="w-full h-full object-cover unselectable" src={imageSrc} alt="Product Image" />
    </>)
}