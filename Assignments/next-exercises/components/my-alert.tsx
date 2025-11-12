"use client";

import { ComponentProps } from "react";

type Props = ComponentProps<"div"> & {
    alertText: string;
    buttonText: "Success" | "Warning" | "Error";
    buttonColor: "bg-green-500" | "bg-yellow-500" | "bg-red-500";
};

export default function MyAlert({ alertText, buttonText, buttonColor, ...props }: Props) {
    function handleClick() {
        alert(alertText);
    }

    return (
        <div {...props}>
            <button
                onClick={handleClick}
                className={`text-black px-3 py-1 rounded ${buttonColor}`}
            >
                {buttonText}
            </button>
        </div>
    );
}
