import Link from "next/link";
import React from 'react';
import Image from 'next/image';

import {Facebook ,Twitter ,Instagram ,Youtube ,Podcast } from "lucide-react";



const Footer = () => {
    return (
      
        
        
        
         
        <footer className="container max-w-[1920px]  md:h-auto text-[#FFFFFF] bg-[#000000] mx-auto  ">
          {/* first part footer */}
        <div className="max-w-[1920px]  justify-evenly border-b-2 border-primary flex flex-row 
         mt-3 mx-auto  ">
       <div className='max-w-full flex sm:flex-col  '>
          <h1 className='text-2xl font-bold text-primary '>St
            <span className='text-2xl text-[#FFFFFF]'>ill You Need Our Support ?</span>
          </h1>
          <p className='text-[#FFFFFF] text-base font-normal '>Don’t wait make a smart & logical quote here.
             Its pretty easy.</p>
        </div>
        
  
  <div className="max-w-[300px]  py-2 ">
        <div className="flex items-center w-full  bg-[#FFFFFF] border border-primary rounded-md">
          <input
            type="email"
            className="w-full p-2 border-none"
            placeholder="Enter your email"
          />
          <button className="bg-primary text-white px-4 py-2 rounded-r-md">
            Subscribe
          </button>
        </div>
      </div>
      </div>
  
        
        <div className="">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-primary text-sm text-center sm:text-left">
      Copyright © 2025 by Naila Adnan. All Rights Reserved.
       
      </p>
       <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start "> 
         <Link href={"#"} className="text-primary bg-[#FFFFFF]">
        <Facebook />
        </Link>
        <Link href={"#"}  className="ml-3 text-primary  bg-[#FFFFFF]">
        <Twitter />    
           </Link>
        <Link href={"#"} className="ml-3 text-primary  bg-[#FFFFFF]">
        <Instagram />
        </Link>
        <Link href={"#"} className="ml-3 text-[#FF9F0D]  bg-[#FFFFFF]">
        <Youtube />
                </Link>
                <Link href={"#"} className="ml-3 text-primary  bg-[#FFFFFF]"> 
                 <Podcast />
                </Link>
      
      </span> 
         
    </div>
    </div>
  
  </footer>
    )
}
export default Footer