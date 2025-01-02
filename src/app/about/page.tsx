import { Button } from "@/components/ui/button";


const About = () => {
    return (
      <div className="max-w-[1920px]  container py-10 flex flex-col flex-wrap
           md:flex-row md:h-auto justify-evenly bg-[#000000] mx-auto sm:py-16 md:py-20 lg:py-24 xl:py-28">
            <div className="max-w-[30px] ">
             {/* <Image src={img1} alt={"hero-img"} width={26} height={182}/> */}
             </div>
             <div className="max-w-[472px] text-[16px] mt-14 py-4 px-4 ">
           <h1 className="text-[#FF9F0D] font-normal text-2xl py-4  ">About Blog Sphare</h1> 
                  
                    {/* <Image src={img2} alt={"hero-img"} width={249} height={182}/></h1> */}
          <h2 className=" max-w-[472px] text-[60px] font-bold text-[#FF9F0D] py-2 ">
          Ab<span  className=' text-[60px] font-bold text-[#FFFFFF]'>out Blog Sphare</span>
          </h2>
          <p className=" max-w-[472px] font-light text-[#fFFFFF] text-base py-4 ">
          Welcome to The ED-Tech blog sphere – your ultimate source for insightful, engaging, and inspiring content!
           We aim to inform, inspire, and connect people through diverse
           topics spanning multiple education personels.</p>
           <h2 className=" max-w-[472px] text-[60px] font-bold text-[#FF9F0D] py-2 ">
          Me<span  className=' text-[60px] font-bold text-[#FFFFFF]'>et the Creator
          </span>
          </h2>
          <p className=" max-w-[472px] font-light text-[#fFFFFF] text-base py-4 ">Hi, I'm Naila Adnan, the creator of
             Ed-Tech Blog. With a passion & love for exploring new ideas, I started this platform to share knowledge
              and ignite discussions on topics that matter. I'm committed of making  this Ed-Tech Blog your go-to destination for
               quality content.Outside of blogging, I enjoy coding, traveling, reading & cooking
             Feel free to connect with me through our social links below!</p>
             <h2 className=" max-w-[472px] text-[60px] font-bold text-[#FF9F0D] py-2 ">
          Jo<span  className=' text-[60px] font-bold text-[#FFFFFF]'>in the Conversation

          </span>
          </h2>
          <p className=" max-w-[472px] font-light text-[#fFFFFF] text-base py-4 ">I value your input and love hearing
             from you! Subscribe to our newsletter, share your thoughts, 
            or follow us on social media for the latest updates.</p>
          <div className="flex items-center flex-wrap pb-4 mt-3 w-full">
          <Button className="bg-[#FF9F0D] rounded-full w-[190px] h-[60px] text-sm text-[#FFFFFF]" >Subscribe Now</Button>
        </div>
        </div>
        </div>
    )
    }
    export default About
