
type Props = {
    imageSrc:string|undefined
}

export const ImageProdZone = ({imageSrc}:Props) => {
    return(<div>
        <img src={imageSrc} alt="Product Image" />
    </div>)
}