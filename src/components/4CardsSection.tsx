
import Circle from "./CircleIcon"; // Import the Circle component

import Image from "next/image";
{/* Left Vertical Long Section */}
export default function CardSection() {
    return(
        <>
          <div className="bg-white px-[24px] py-[20px] rounded-[8px]  border border-[#E0E0E0] ">
            <h2 className="font-bold text-[#1E1E1E] text-[18px] mb-[10px]">Total Franchisees Onboard</h2>

            <div className="flex items-center gap-5 text-black">
            <div className="text-[40px] font-medium">14  </div>
            <Image src={"/images/badgewrap.png"} alt="" width={60} height={60}/>
           <Image className="ml-[90px] " src={"/images/avatargroup.png"} alt="" width={100} height={100} />

            </div>
            <div className="flex gap-3 items-center mt-[10px]">
              <div className="h-3 w-25 bg-[#1F7EAA]  rounded-[4px]" />
              <div className="h-3 w-20 bg-[#2FBDFF]  rounded-[4px] " />
              <div className="h-3 w-32 bg-[#97DEFF]  rounded-[4px]" />
            </div>
            
            <ul className="mt-[10px] space-y-[5px] text-[15px] text-[#475467]">
            <li className="flex items-center gap-2"><Circle stroke="#1F7EAA" fill="#1F7EAA"/> Stage 1 (Initial Inquiry): <span className="font-bold text-[20px] ml-[8rem]">02</span> </li>

            <li className="flex items-center gap-2"><Circle stroke="#2FBDFF" fill="#2FBDFF"/>Stage 2 (Document Submission):<span className="font-bold text-[20px] ml-[4rem]">07</span></li>

            <li className="flex items-center gap-2"><Circle stroke="#97DEFF" fill="#97DEFF"/> Stage 3 (Training):<span className="font-bold text-[20px] ml-[10rem]">05</span> </li>              
              
            </ul>
          </div>

          <div className="bg-white px-[24px] py-[20px] rounded-[8px] border border-[#E0E0E0] ">
            <h2 className="font-bold text-[#1E1E1E] text-[18px] mb-[3px]">Key Insights & Feedback</h2>
            <div className="flex items-center justify-between">
              <p className="text-[38px] font-medium text-black">10%</p>              
               
              <div className="flex flex-col items-center ">
                <Image src="/images/image14.png" alt="Top Performer Badge" width={35} height={35} />
  
                <span className="bg-[#E0F2FE] text-[#1DA1F2] px-[8px] py-[4px] rounded-[15px] text-[12px] mt-2">
                  Top Performer
                </span>
              </div>
            </div>
            <p className=" text-[14px] text-gray-700">Sales Growth</p>
            <div className="w-full h-[1px] bg-gray-300 mb-[10px] " />
            <div className="w-90 h-23 bg-[#F6F7FB] py-[5px]   rounded-[8px]">
              <h1 className="ml-[15px] font-semibold text-[15px]  text-[#1C222B]"> Feedback</h1> 
              <div className="flex  mt-[10px] ml-[15px]  gap-2 text-[14px] text-[#1C222B]"><span className="mt-[6px]"><Circle/></span>  Franchisees are requesting more detailed training materials</div>
             
            </div>
          </div>
          

          <div className="bg-white px-[24px] py-[20px] rounded-[8px]  relative border border-[#E0E0E0] ">
            
            <h2 className="font-bold text-[#1E1E1E] mb-[8px] text-[18px]">Financial Wellbeing</h2>
            <div className="flex items-center gap-65">
            <p className="font-medium text-[35px] text-[#1C222B]">20</p> 
            <Image src="/images/badgewrap1.png" alt="Top Performer Badge" width={100} height={100} />
            </div>
            <p className=" text-[15px] text-[#475467]">Total Franchisees</p> 
            <div className="w-full h-[1px] bg-gray-300 my-[7px]" />
            <div className="flex items-center gap-10">
            <div className="w-50 h-24 bg-[#F6F7FB] flex flex-col items-center justify-center px-4  rounded-[8px]">  
              
            <h2 className="text-[15px] font-medium text-[#455468]">Target</h2>
            <p className="text-[20px] font-bold text-[#1C222B]"> $500,000</p>
            </div>

            <div className="w-50 h-24 bg-[#F6F7FB] flex flex-col items-center justify-center px-4  rounded-[8px]">  
              
              <h2 className="text-[15px] font-medium text-[#455468]">Current</h2>
              <p className="text-[20px] font-bold text-[#1C222B]"> $450,000</p>
              </div>

            </div>
         
          </div>

          <div className="bg-white px-[24px] py-[20px] flex flex-col gap-2 rounded-[8px] border border-[#E0E0E0] ">
            <h2 className="font-bold text-[#1E1E1E] text-[18px]">Prospect Leads</h2>

            <div className="bg-gray-100 rounded-[8px] flex items-center px-[12px] py-[10px] text-[13px] gap-3 h-14">
              <Image src={"/images/avatar3.png"} alt="" width={40} height={40}/>
                <h2 className="font-medium text-[15px] text-[#101828]"> Wade Warren</h2> <span className="ml-[40px] text-[14px] text-[#101828]"> Stage: <span className="font-medium"> Initial Inquiry</span>   </span>            
             
            </div>
            <div className="bg-gray-100 rounded-[8px] flex items-center px-[12px] py-[10px] text-[13px] gap-5 h-14">
              <Image src={"/images/avatar4.png"} alt="" width={40} height={40}/>
                <h2 className="font-medium text-[15px]  text-[#101828]"> Ava Wright</h2> <span className="ml-[40px] text-[14px] text-[#101828]"> Stage: <span className="font-medium"> Initial Inquiry</span>   </span>           
             
            </div>
            <div className="bg-gray-100 rounded-[8px] flex items-center px-[12px] py-[10px] text-[13px] gap-4 h-14">
              <Image src={"/images/avatar5.png"} alt="" width={40} height={40}/>
                <h2 className="font-medium text-[15px] text-[#101828]"> Cody Fisher</h2><span className="ml-[40px] text-[14px] text-[#101828]"> Stage: <span className="font-medium"> Initial Inquiry</span>   </span>                 
            </div>           
          </div>                        
        
        
        
        </>         
              
    )
}