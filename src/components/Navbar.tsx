import React from 'react'
import Link from 'next/link'
import { ModeToggle } from "../components/Toggle"
import { Search, Briefcase } from 'lucide-react';
import { CircleEllipsis, Menu } from 'lucide-react';
// import {
//   Select,
//   SelectContent,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"



import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"



const Navbar = () => {
  return (
    //header
    <header className='max-w-[1920px] h-[220px] bg-[#000000] flex flex-col mx-auto'>
      {/*  title  */}
      <div className=' flex justify-center'>
        <h1 className='sm:text-7xl text-2xl font-extrabold text-primary'>
          The Ed-Tech
          <span className='sm:text-7xl  text-2xl text-gray-400'> Chronicles</span>
        </h1>
      </div>

      {/* Links and Search section */}
      <div className='max-w-[1920px] h-[57px] bg-[#000000] flex flex-row justify-between
       px-2 ml-2 py-2  xl:justify-evenly mt-8 '>
        <ModeToggle />
        {/* Links section */}
        <ul className='max-w-[800px] h-[24px] text-[16px] text-primary hidden md:flex gap-1 list-none ">'>
          <Link href={"/"} className="mr-5 text-1xl hover:text-gray-500">
            Home <CircleEllipsis className='w-3 h-3 text-primary' />
          </Link>
          <Link href={"/blog"} className="mr-5 text-1xl hover:text-gray-500">
            Blog
          </Link>

          <Link href={"/about"} className="mr-5 text-1xl hover:text-gray-500">
            AboutUs
          </Link>
          {/* <Select>
            <SelectTrigger className="w-[78px] h-[24px] text-sm px-2 border-none">
              <SelectValue placeholder="Pages" />
            </SelectTrigger>
            <SelectContent className=''>

              <Link href="../signup" className="mr-5 text-1xl text-primaryhover:text-gray-500">>
                Sign Up
              </Link>

              <Link href="../signin" className="mr-5 text-1xl text-primaryhover:text-gray-500">>
                Sign In
              </Link>

              <Link href="../error404" className="mr-5 text-1xl text-primaryhover:text-gray-500">>
                Error 404
              </Link>

            </SelectContent>
          </Select> */}
          <Link href={"/contact"} className="mr-5 text-1xl hover:text-gray-500">
            Contact
          </Link>
        </ul>

        <Sheet>
          <SheetTrigger className="md:hidden text-primary ">
            <Menu />
          </SheetTrigger>
          <SheetContent className='bg-white text-primary'>
            <ul className="flex flex-col gap-1 list-none ">
              <Link href={"/"} className="mr-5 text-1xlhover:text-gray-500">
                Home <CircleEllipsis className='w-3 h-3 text-primary' />
              </Link>
              <Link href={"/blog"} className="mr-5 text-1xl hover:text-gray-500">
                Blog
              </Link>
              <Link href={"/about"} className="mr-5 text-1xl hover:text-gray-500">
                AboutUs
              </Link>
              {/* <Select>
                <SelectTrigger className="w-[78px] h-[24px] text-sm px-2 border-none">
                  <SelectValue placeholder="Pages" />
                </SelectTrigger>
                <SelectContent className=''>

                  <Link href="../signup" className="mr-5 text-1xl text-primaryhover:text-gray-500">>
                    Sign Up
                  </Link>

                  <Link href="../signin" className="mr-5 text-1xl text-primaryhover:text-gray-500">>
                    Sign In
                  </Link>

                  <Link href="../error404" className="mr-5 text-1xl text-primaryhover:text-gray-500">>
                    Error 404
                  </Link>

                </SelectContent>
              </Select> */}

              <Link href={"/contact"} className="mr-5 text-1xl hover:text-gray-500">
                Contact
              </Link>
            </ul>
          </SheetContent>
        </Sheet>


        {/* Search section */}
        <div className='relative py-1 inline-flex gap-4'>
          <input
            type="text"
            placeholder='Search...'
            className='rounded-2xl h-8 pt-3 pr-3 pb-2 pl-5 gap-[10px] font-[inter] text-[16px]
         border-primary border-2 bg-[#000000] text-primary'/>
          <Search className="absolute right-12 top-1/2 transform -translate-y-3 text-primary" />
          <Briefcase className='text-primary' />
        </div>
      </div>

    </header >

  )
}

export default Navbar