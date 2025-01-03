import { client } from "@/sanity/lib/client";
import { simpleblogcard } from "@/sanity/lib/interface"
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link"
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default async function Home() {
    const query = `*[_type =='blog'] | order(_createdAtdesc){
       title,
       'currentslug':slug.current,
       titleimage,
       description,
       content}`

    const sanitydata: simpleblogcard[] = await client.fetch(query)
    return (
        <div className="max-w-[1920px] mx-auto  ">

            {sanitydata.length > 0 ? (
                sanitydata.map((post, idx) => (
                    <div key={idx} className=" max-w-[600px] mx-auto py-4">
                        <h1 className="text-6xl font-semibold text-primary line-clamp-2 py-2">{post.title}</h1>
                        <h2 className="text-3xl font-medium text-gray-500 dark:text-gray-300 py-4 ">{post.currentslug}</h2>
                        {post.titleimage ? (
                            <Image
                                src={urlFor(post.titleimage).url()}
                                alt={post.title || "Blog Title"}
                                width={500}
                                height={500}
                                className="rounded-md flex"
                            />
                        )
                            : (
                                <p>No image available</p>
                            )}
                        <p className="text-2xl font-medium text-gray-500 dark:text-gray-300 line-clamp-1  ">{post.description}</p>
                        <Button asChild className=" w-96 h-24 rounded-lg text-white text-2xl py-2 mt-4">
                            <Link href={`/blog/${post.currentslug}`}>Read More</Link>
                        </Button>
                    </div>
                ))
            ) : (

                <p className="text-center">No blog data found.</p>

            )}
        </div>

    );
}




