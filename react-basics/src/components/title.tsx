import { ComponentProps } from "react";

type Props = ComponentProps<"h1">; //& {
//     myProp?: string;
// }

export default function Title({ children, className, ...props }: Props) {
    return <h1 className={`text-3xl ${className}`} {...props}> {children} </h1>
}

// type TitleProps = ComponentProps<typeof Title>