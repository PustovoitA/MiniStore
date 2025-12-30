

type ButtonProps = {
    value:string
}

const Button = ({value}:ButtonProps) => {
    return(<>
    <button>{value}</button>
    </>)
}

export default Button;