"use client"; 
import Image from "next/image";
import { useState } from "react";
import ProgressCircle from "@/components/ProgressCircle"; 
import Sidebar from "@/components/sidebar";
import Circle from "@/components/CircleIcon"; // Import the Circle component
import LeftCardSection from "@/components/LeftCardSection";
import Footer from "@/components/footer";



export default function Dashboard() {
 

  return (
    <>
    
    <div className="flex w-full p-10 gap-4 min-h-screen bg-[#F3F7FA] px-[36px] py-[32px] font-sans text-[14px] text-[#1E1E1E] ">
      <div className="flex w-full ">

       <Sidebar/>
        {/* Left Vertical Long Section */}
        <LeftCardSection/>

       

        {/* Right Side - 4 Cards in 2x2 Grid */}
        <div className="w-[66.6666%] grid grid-cols-2 grid-rows-2 gap-[20px] mt-[30px]">
          <div className="bg-white px-[24px] py-[20px] rounded-[8px]  border border-[#E0E0E0] ">
            <h2 className="font-bold text-[#1E1E1E] text-[18px] mb-[10px]">Total Franchisees Onboard</h2>

            <div className="flex items-center gap-5">
            <div className="text-[40px] font-medium">14  </div>
            <Image src={"/BadgeWrap.png"} alt="" width={60} height={60}/>
           <Image className="ml-[90px] " src={"/AvatarGroup.png"} alt="" width={100} height={100} />

            </div>
            <div className="flex gap-3 items-center mt-[25px]">
              <div className="h-3 w-25 bg-[#1F7EAA]  rounded-[4px]" />
              <div className="h-3 w-20 bg-[#2FBDFF]  rounded-[4px] " />
              <div className="h-3 w-32 bg-[#97DEFF]  rounded-[4px]" />
            </div>
            
            <ul className="mt-[25px] space-y-[10px] text-[16px]">
            <li className="flex items-center gap-2"><Circle stroke="#1F7EAA" fill="#1F7EAA"/> Stage 1 (Initial Inquiry): <span className="font-bold text-[20px] ml-[7rem]">02</span> </li>

            <li className="flex items-center gap-2"><Circle stroke="#2FBDFF" fill="#2FBDFF"/>Stage 2 (Document Submission):<span className="font-bold text-[20px] ml-[2.5rem]">07</span></li>

            <li className="flex items-center gap-2"><Circle stroke="#97DEFF" fill="#97DEFF"/> Stage 3 (Training):<span className="font-bold text-[20px] ml-[9.2rem]">05</span> </li>              
              
            </ul>
          </div>

          <div className="bg-white px-[24px] py-[20px] rounded-[8px] border border-[#E0E0E0] ">
            <h2 className="font-bold text-[#1E1E1E] text-[18px] mb-[10px]">Key Insights & Feedback</h2>
            <div className="flex items-center justify-between">
              <p className="text-[40px] font-medium">10%</p>              
               
              <div className="flex flex-col items-center">
                <Image src="/image 14 (1).png" alt="Top Performer Badge" width={40} height={40} />
  
                <span className="bg-[#E0F2FE] text-[#1DA1F2] px-[8px] py-[4px] rounded-[15px] text-[12px] mt-2">
                  Top Performer
                </span>
              </div>
            </div>
            <p className=" text-[14px] text-gray-700">Sales Growth</p>
            <div className="w-full h-[1px] bg-gray-300 my-[20px]" />
            <div className="w-90 h-24 bg-[#F6F7FB]   rounded-[8px]">
              <h1 className="ml-[15px] font-medium mt-[10px]"> Feedback</h1> 
              <div className="flex  mt-[10px] ml-[15px]  gap-2"><span className="mt-[6px]"><Circle/></span>  Franchisees are requesting more detailed training materials</div>
             
            </div>
          </div>
          

          <div className="bg-white px-[24px] py-[20px] rounded-[8px]  relative border border-[#E0E0E0] ">
            
            <h2 className="font-bold text-[#1E1E1E] mb-[10px] text-[18px]">Financial Wellbeing</h2>
            <div className="flex items-center gap-65">
            <p className="font-medium text-[35px]">20</p> 
            <Image src="/2.1.png" alt="Top Performer Badge" width={100} height={100} />
            </div>
            <p className=" text-[15px]">Total Franchisees</p> 
            <div className="w-full h-[1px] bg-gray-300 my-[20px]" />
            <div className="flex items-center gap-10">
            <div className="w-50 h-24 bg-[#F6F7FB] flex flex-col items-center justify-center px-4  rounded-[8px]">  
              
            <h2 className="text-[15px] font-medium">Target</h2>
            <p className="text-[20px] font-bold"> $500,000</p>
            </div>

            <div className="w-50 h-24 bg-[#F6F7FB] flex flex-col items-center justify-center px-4  rounded-[8px]">  
              
              <h2 className="text-[15px] font-medium">Current</h2>
              <p className="text-[20px] font-bold"> $450,000</p>
              </div>

            </div>
         
          </div>

          <div className="bg-white px-[24px] py-[20px] flex flex-col gap-2 grounded-[9px] border border-[#E0E0E0] ">
            <h2 className="font-bold text-[#1E1E1E] mb-[10px] text-[18px]">Prospect Leads</h2>

            <div className="bg-gray-100 rounded-[8px] flex items-center px-[12px] py-[10px] text-[13px] gap-3 h-17">
              <Image src={"/Avatar (3).png"} alt="" width={40} height={40}/>
                <h2 className="font-medium text-[15px]"> Wade Warren</h2> <span className="ml-[40px] text-[14px] font-grey"> Stage: <span className="font-medium"> Initial Inquiry</span>   </span>            
             
            </div>
            <div className="bg-gray-100 rounded-[8px] flex items-center px-[12px] py-[10px] text-[13px] gap-5 h-17">
              <Image src={"/Avatar (4).png"} alt="" width={40} height={40}/>
                <h2 className="font-medium text-[15px]"> Ava Wright</h2> <span className="ml-[40px] text-[14px] font-grey"> Stage: <span className="font-medium"> Initial Inquiry</span>   </span>           
             
            </div>
            <div className="bg-gray-100 rounded-[8px] flex items-center px-[12px] py-[10px] text-[13px] gap-4 h-17">
              <Image src={"/Avatar (5).png"} alt="" width={40} height={40}/>
                <h2 className="font-medium text-[15px]"> Cody Fisher</h2><span className="ml-[40px] text-[14px] font-grey"> Stage: <span className="font-medium"> Initial Inquiry</span>   </span>                 
            </div>           
          </div>                        
        </div>              
      </div>       
    </div>
    <Footer/>
    
    
    
    </> 
    
  );
} 