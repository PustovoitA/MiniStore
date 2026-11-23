import type { CSSProperties } from "react";

type BgColor =
    | "var(--blue-color)"
    | "var(--black-block-color)"
    | "var(--grey-text-color)";

type ButtonProps = {
    value: string;
    bgColor: BgColor;
    type: "submit" | "reset" | "button" | undefined;
    onClick?: () => void;
    form?: "checkout";
    width?: string;
};

const Button = ({ value, bgColor, type, onClick, form, width }: ButtonProps) => {
    return (
        <button
            form = {form}
            onClick={onClick}
            type={type}
            className="text-white tracking-[2px] text-sm h-14 py-4.5 px-10.5 cursor-pointer font-[Jost]
                       bg-(--btn-bg)
                       hover:bg-[color-mix(in_srgb,var(--btn-bg),white_15%)]
                       hover:scale-105 active:scale-100
                       transition-all duration-300 ease-out"
            style={{ "--btn-bg": bgColor, width: width } as CSSProperties}
        >
            {value}
        </button>
    );
};

export default Button;