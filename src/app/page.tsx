"use client"; 
import Image from "next/image";
import { useState } from "react";
import ProgressCircle from "@/components/ProgressCircle"; 
import Sidebar from "@/components/sidebar";
import Circle from "@/components/CircleIcon"; // Import the Circle component
import { CheckMark } from "@/components/CircleIcon";




export default function Dashboard() {
 

  return (
    <>
    
    <div className="flex w-full p-10 gap-4 min-h-screen bg-[#F3F7FA] px-[36px] py-[32px] font-sans text-[14px] text-[#1E1E1E] ">
      <div className="flex w-full ">

       <Sidebar/>
            
        {/* Left Vertical Long Section */}
        <div className="w-[33%] mr-[20px] mt-[30px]">
          <div className="bg-white px-[30px] py-[20px] rounded-[9px] border border-[#E0E0E0] h-[40rem]">
            <h2 className=" text-[#1E1E1E] mb-[30px] font-medium ml-[7rem] text-lg">Account Progress</h2>
            <div className="flex justify-center items-center my-[20px]">
              <div className="relative w-[150px] h-[150px] mx-auto">

                <ProgressCircle percentage={85}/>            

              </div>              
            </div>
            <div className="w-full h-[1px] bg-gray-300 my-[20px]" />

          

            <div className="bg-[#F6F7FB] rounded-[15px] px-[30px] py-[30px] mb-[11px] text-[13px] h-[200px]">
              <h3 className="font-medium mb-[20px] text-lg">Steps Completed</h3>
              <ul className="space-y-[10px] text-[#1E1E1E] text-[15px] ">
                <li className="flex items-center gap-2"> 
                   <Circle/> Profile Setup <CheckMark margin_left={9}/></li>

                <li className="flex items-center gap-2">  
                  <Circle/> Initial Training  <CheckMark margin_left={8.7}/></li>

                <li className="flex items-center gap-2" > 
                   <Circle/>  KYC Documents  <CheckMark margin_left={7.8}/></li>
              </ul>
            </div>
            
            <div className="bg-[#F6F7FB] rounded-[15px] px-[30px] py-[35px] text-[13px] h-[150px] ">
              <h3 className="font-medium mb-[20px] text-lg mt-[-20px]">Steps Remaining</h3>
              <ul className="space-y-[10px] text-[#1E1E1E] text-[15px] ">
                
              <li className="flex items-center gap-1">  
                  <Circle/> Financial Integration  <CheckMark margin_left={6.56} bg="#0A995240"/></li>

                <li className="flex items-center gap-2" > 
                 <Circle/> Final Review  <CheckMark margin_left={9.4} bg="#0A995240"/> </li>                
              </ul>
            </div>
          </div>
        </div>

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
    <div className="ml-[210px] flex p-4 gap-4  bg-gray-50 ">
      {/* Pending Questions Section */}
      <div className=" bg-white rounded-lg  p-4 flex flex-col ">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Pending Questions</h2>
          <div className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
            02
          </div>
        </div>

        {/* Questions List */}
        <div className="flex flex-col gap-4 p-4">
          {/* Question 1 */}
          <div className="flex gap-3">
            <div className="relative">
              
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-white rounded-full"></span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between text-sm">
                <span className="font-semibold">Phoenix Baker</span>
                <span className="text-gray-400">5min ago</span>
              </div>
              <div className="text-gray-500 text-sm">@phoenix</div>
              <div className="mt-1 text-gray-700 text-sm">
                What are the requirements for opening a new store?
              </div>
            </div>
          </div>

          {/* Question 2 */}
          <div className="flex gap-3">
            <div className="relative">
             
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-white rounded-full"></span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between text-sm">
                <span className="font-semibold">Koray Okumus</span>
                <span className="text-gray-400">4hr ago</span>
              </div>
              <div className="text-gray-500 text-sm">@koray</div>
              <div className="mt-1 text-gray-700 text-sm">
                How do I manage inventory effectively?
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Assistant Section */}
      <div className="flex-1 bg-white rounded-lg shadow flex flex-col items-center justify-center p-8">
        <div className="flex flex-col items-center">
          
          <h1 className="text-2xl font-semibold mb-6">
            Welcome to the AI Chat Assistant
          </h1>
          <div className="w-full max-w-md">
          <input
  type="text"
  placeholder="Ask your question here.."
  className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
/>
          </div>
        </div>
      </div>
    </div>
    
    
    </> 
    
  );
} 