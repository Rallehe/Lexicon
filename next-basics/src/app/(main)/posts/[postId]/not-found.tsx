"use client";

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';

type Params = Awaited<PageProps<"/posts/[postId]">["params"]>;

export default function NotFound() {
    const params = useParams<Params>();


    return (
        <div className='pt-4 text-center space-y-2'>
            <h1 className='text-4xl font-bold'>Not Found</h1>
            <p>Could not find post with id: {params?.postId}</p>

            <Button variant={'outline'} asChild>
                <Link href="/">Return Home</Link>
            </Button>
        </div>
    )
}