"use client";

import { ComponentProps } from "react";

type Props = ComponentProps<"div"> & {
    text: string;
};

export default function MyAlert({ text, ...props }: Props) {
    function handleClick() {
        alert(text);
    }

    return (
        <div {...props}>
            <button
                onClick={handleClick}
                className={`text-black px-3 py-1 rounded bg-white`}
            >
                Click me!
            </button>
        </div>
    );
}
