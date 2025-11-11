"use client"
import { ComponentProps, useState } from "react";

type Props = ComponentProps<"button"> & {
    text?: string,
    incrementBy?: number,
}
export default function IncrementButton({ text = "Button", incrementBy = 1, ...props } : Props) {
    const [value, setValue] = useState<number | null>(null);

    function incrementValue() {
        setValue((prev) => (prev ?? 0) + incrementBy);
    }

    return (
        <div className="flex gap-2 items-center">
            <button {...props} className="bg-white text-black p-1 border" onClick={incrementValue}>{text}</button>
            <div>{value}</div>
        </div>
    )
}