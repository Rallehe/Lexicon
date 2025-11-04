import { ComponentProps } from "react";

interface Props extends ComponentProps<"button"> {
    readonly variant?: "primary" | "outline";
};

const buttonVariants = {
    primary: "bg-blue-600 text-white",
    outline: "border-2",
};

const baseClassName = "p-2 rounded-md";

export default function Button({ variant = "primary", className, ...props }: Props) {
    // if (variant === "primary") {
    //     return <button {...props} />
    // }
    return (<button className={`${className} ${baseClassName} ${buttonVariants[variant]} `} {...props} />);
};