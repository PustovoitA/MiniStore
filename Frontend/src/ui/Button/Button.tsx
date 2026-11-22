

type ButtonProps = {
    value:string,
    bgColor: "var(--blue-color)" | "var(--black-block-color)" | "var(--grey-text-color)",
    type:"submit" | "reset" | "button" | undefined,
    onClick?: (() => void) | undefined
}

const Button = ({value, bgColor, type, onClick}:ButtonProps) => {
    return(<>
        <button
         onClick={() => {
            if(onClick) onClick()
        }}
         type={type}
         className="text-white tracking-[2px] text-sm h-14 py-4.5 px-10.5 cursor-pointer font-[Jost]"
         style={{backgroundColor:bgColor}}
         >{value}</button>
    </>)
}

export default Button;