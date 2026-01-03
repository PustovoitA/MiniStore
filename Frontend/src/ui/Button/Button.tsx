

type ButtonProps = {
    value:string,
    bgColor: "var(--blue-color)" | "var(--black-block-color)",
    type:"submit" | "reset" | "button" | undefined,
}

const Button = ({value, bgColor, type}:ButtonProps) => {
    return(<>
        <button
         type={type}
         className="text-white tracking-[2px] text-sm py-4.5 px-10.5 cursor-pointer font-[Jost]"
         style={{backgroundColor:bgColor}}
         >{value}</button>
    </>)
}

export default Button;