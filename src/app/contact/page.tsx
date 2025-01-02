import React from 'react'
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import img from "../../../public/assests/or.png"
import Image from 'next/image';


const Contact = () => {
  return (
  
        <div className='max-w-[1920px] mx-auto'>
          
                
    
  <div className='bg-[#ffffff] max-w-[424px] flex flex-col items-center mx-auto
         drop-shadow-md shadow-md shadow-primary gap-4 mt-16 '>
        <div className='max-w-[360px] text-[#333333] text-base font-normal  mx-auto items-center py-6'>
        <h1  className='text-primary text-xl font-bold '>Contact Us</h1> 
        </div>
         <div className='max-w-[360px] text-[#333333] text-base font-normal space-y-6 mx-auto'> 
            <Input placeholder=' First Name' type="text" className=' text-[#333333] text-base font-normal'/>
            <Input placeholder=' Email Address' type="text" className=' text-[#333333] text-base font-normal '   />
            <Input placeholder='Your City' type="text" className=' text-[#333333] text-base font-normal'/>
            </div>
             <div className=' max-w-[424px] space-y-8'>
                         <h1 className='text-[#333333] text-base font-normal'>
                 <Checkbox className='bg-primary max-w[20px]' / >  Place an Order </h1>
                 <Input placeholder=' Proceed to order' type="text" className='max-w[#424px] text-black
                  bg-primary text-base font-normal'/>
               </div>
                  <h1 className='text-[#333333] text-base font-normal border-b-2 border-primary max-w-[424px]' >Forget password?</h1>
               <Image src={img} alt={'Orimg'} width={360} height={32} />
               <div className=' max-w-[624px] text-[#333333] text-base font-normal space-y-8 mx-auto'>
              <Input placeholder=' Billing Address' type="text" className=' text-primary text-base font-normal'/>
            <Input placeholder=' Zip Code' type="text" className=' text-primary text-base font-normal'/>
         {/* </div> */}
     </div>
     </div>
     </div>
    )
    }
    export default Contact
