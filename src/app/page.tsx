"use client"; 
import Image from "next/image";
import { useState } from "react";
import ProgressCircle from "@/components/ProgressCircle"; 
import Sidebar from "@/components/sidebar";
import Circle from "@/components/CircleIcon"; // Import the Circle component
import { CheckMark } from "@/components/CircleIcon";


export default function Dashboard() {
  const [questions, setQuestions] = useState([
    {
      user: "Phoenix Baker",
      handle: "@phoenix",
      time: "5m ago",
      question: "What are the requirements for opening a new store?",
    },
    {
      user: "Koray Okumus",
      handle: "@koray",
      time: "4hr ago",
      question: "How do I manage inventory effectively?",
    },
  ]);

  return (
    <div className="flex p-4 gap-4 min-h-screen bg-[#F3F7FA] px-[36px] py-[32px] font-sans text-[14px] text-[#1E1E1E] ">
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
           <Image src={"/AvatarGroup.png"} alt="" width={100} height={100} />

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
            <div className="w-90 h-24 bg-[#F6F7FB]   text-black font-medium rounded-[8px]">
              <h1 className="mt-2"> Feedback</h1>
            </div>
          </div>
          

          <div className="bg-white px-[24px] py-[20px] rounded-[8px]  relative border border-[#E0E0E0] ">
            <div className="absolute top-[10px] right-[10px] bg-[#FB923C] text-white text-[12px] px-[8px] py-[2px] rounded">Soumalya</div>
            <h2 className="font-medium text-[#1E1E1E] mb-[10px]">Financial Wellbeing</h2>
            <p>Total Franchisees: <strong>20</strong> <span className="text-green-500 text-sm">+2.1%</span></p>
            <p>Target: $500,000</p>
            <p>Current: $450,000</p>
          </div>

          <div className="bg-white px-[24px] py-[20px] rounded-[9px] border border-[#E0E0E0] ">
            <h2 className="font-medium text-[#1E1E1E] mb-[10px]">Prospect Leads</h2>
            <div className="bg-gray-100 rounded-[8px] px-[12px] py-[10px] text-[13px]">
              <ul className="space-y-[4px]">
                <li>Wade Warren – Stage: Initial Inquiry</li>
                <li>Ava Wright – Stage: Initial Inquiry</li>
                <li>Cody Fisher – Stage: Initial Inquiry</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
