"use client"
import { ComponentProps, useState } from "react"

type Props = ComponentProps<"div"> & {
    title: string,
    description: string,
}

export default function TaskItem({ title, description }: Props) {
    const [isCompleted, setIsCompleted] = useState(false);

    function toggleCompleted() {
        setIsCompleted(!isCompleted);
    }

    const buttonText = isCompleted ? "Undo" : "Mark Complete";
    
    return (
            <div className={`${isCompleted ? "opacity-50" : ""} bg-white shadow p-4 rounded-lg m-1`}>
                <h1 className={`font-bold text-4xl text-black ${isCompleted ? "line-through" : ""}`}>{title}</h1>
                <h2 className=" text-2xl text-gray-400">{description}</h2>
                <button className="bg-black rounded-md p-1" onClick={toggleCompleted}>{buttonText}</button>
            </div>
    )
}