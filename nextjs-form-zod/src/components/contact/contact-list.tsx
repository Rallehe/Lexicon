"use server"

import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardDescription } from "../ui/card";
import DeleteButton from "./contact-delete-button";

export default async function contactList() {
    const contact = await prisma.contacts.findMany();
    return (
        <Card className="w-full">
            <CardContent>
                {contact.length === 0 ? (
                    <CardDescription>No contact found</CardDescription>
                ) : <div>
                    {contact.map((contact) => (

                        <div className="flex justify-between" key={contact.id}>
                            <div>
                                <p className="text-bold text-2xl">{contact.name}</p>
                                <p>{contact.email}</p>
                            </div>
                            <div >
                                <DeleteButton id={contact.id} />
                            </div>
                        </div>
                    ))}
                </div>}
            </CardContent>
        </Card>
    )
}