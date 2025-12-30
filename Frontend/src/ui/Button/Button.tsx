

type ButtonProps = {
    value:string,
    bgColor:string
}

const Button = ({value, bgColor}:ButtonProps) => {
    return(<>
        <button
         className="text-white tracking-[2px] text-sm py-4.5 px-10.5 cursor-pointer font-[Jost]"
         style={{backgroundColor:bgColor}}
         >{value}</button>
    </>)
}

export default Button;