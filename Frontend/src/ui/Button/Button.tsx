

type ButtonProps = {
    value:string
}

const Button = ({value}:ButtonProps) => {
    return(<>
        <button className="text-white bg-(--blue-color) py-2.5 w-37.5 cursor-pointer font-[Jost]">{value}</button>
    </>)
}

export default Button;