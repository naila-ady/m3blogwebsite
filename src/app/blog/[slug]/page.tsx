import React from 'react'
import {client} from '@/sanity/lib/client'
import { fullblogcard } from '@/sanity/lib/interface';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import { PortableText } from 'next-sanity';
import Comments from "@/components/Comments";
async function getData(slug:string) {

  const query=
    `*[_type == 'blog' && slug.current =='${slug}']{
   'currentslug': slug.current,
     title,
     titleimage,
     description,
     content
    }[0]`
 const data = await client.fetch(query)
 return data;
  }
  
 export default  async function Blog  ({
  params
}:{
  params:{slug:string};
}){
     const data :fullblogcard = await getData(params.slug)
     console.log(data)
     return (
      <div className='max-w-[1920px] '>
         <h2 className="max-w-[1320px] mx-auto text-[46px] font-semibold text-primary py-4 text-center  ">
          Na<span  className=' text-[46px] font-semibold text-gray-500'>ilaAdnan-Blog</span>
          </h2>
          <h2 className="max-w-[1320px] mx-auto text-[40px] font-bold text-primary py-4 text-center   ">
           {data.title}
           </h2>
           <div className=' flex justify-center py-4'>
           <Image src={urlFor(data.titleimage).url()} width={800} height={800} alt={"img"} priority
            className='rounded-xl py-4  '/>
            </div>
          
          <h2 className="max-w-[1320px] mx-auto text-[26px] font-semibold text-gray-500 py-4  ">
          {data.description}
          </h2>
           <div  className="py-4 max-w-[1320px] mx-auto prose prose-stone prose-2xl dark:invert" >
                      <PortableText value={data.content}/>
           </div>
           
      <Comments/>
            
        </div>
  )
}