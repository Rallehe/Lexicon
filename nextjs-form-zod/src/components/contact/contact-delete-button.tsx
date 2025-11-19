"use client"

import { deleteContact } from "@/actions/action";
import { Button } from "../ui/button";
import { Trash } from "lucide-react";
import { toast } from "sonner";

export default function DeleteButton(data: Readonly<{id: string}>) {
    return (
        <Button
            variant={"destructive"}
            onClick={async () => {
                await deleteContact(data.id);
                toast.message("Contact deleted successfully!");
            }}>
            <Trash />
        </Button>
    )
}