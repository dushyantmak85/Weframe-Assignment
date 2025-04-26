import Circle from "./CircleIcon"; // Import the Circle component

import Image from "next/image";
{/* Left Vertical Long Section */}
export default function Footer() {
    return(
        <>
           <div className="flex bg-white border-t border-gray-200">
          <div className="flex flex-1">
            <div className="w-1/2  border-r">
              <div className="flex px-4 py-4 items-center justify-between mb-1">
                <div className="text-xl font-semibold text-[#101828] ">Pending Questions</div>                
                <Image src="/images/badge2.png" alt="" width={30} height={30}></Image>
              </div>
              <div className="w-full h-[1px] bg-gray-300 mb-[10px] " />
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-4 px-4 py-1">
                   <span className="flex items-center gap-3">
                   <Circle stroke="#2FBDFF" fill="#2FBDFF"/><Image src={"/images/avatar1.png"} alt="" width={40} height={40}/>
                    </span>
                  <div>
                    <div className="font-bold text-[#344054]">Phoenix Baker</div>
                    <div className="text-gray-500">@phoenix · 5min ago</div>
                    
                  </div>
                </div>
                <div className="text-gray-700 ml-[40px]">What are the requirements for opening a new store?</div>
                
              <div className="w-full h-[1px] bg-gray-200 mb-[10px] " />
              <div className="flex items-start gap-4 px-4 py-2">
                   <span className="flex items-center gap-3">
                   <Circle stroke="#2FBDFF" fill="#2FBDFF"/><Image src={"/images/avatar2.png"} alt="" width={40} height={40}/>
                    </span>
                  <div>
                    <div className="font-bold text-[#344054]">Koray Okumus</div>
                    <div className="text-gray-500">@koray· 4hr ago</div>
                    
                  </div>
                </div>
                <div className="text-gray-700 ml-[40px] mb-[10px]">How do I manage inventory effectively?</div>
              </div>
            </div>

          
               <div className=" w-full p-6 bg-gray-50 flex-col justify-end ">
           
            <Image src={"/images/button.png"} alt="" width={30} height={30} className="ml-[47rem]"  />
             
            <div className="flex flex-col items-center justify-center gap-4">
            <Image src="/images/logo.png" alt="" width={60} height={60}></Image>
              <div className="text-3xl font-bold mb-4 text-center text-black">Welcome to the AI Chat Assistant</div>
              <div className="flex items-center w-[90%]  bg-[#ffff]  rounded-3  px-4 py-2  text-gray-700 gap-118" >
              <input
                type="text"
                placeholder="Ask your question here..."                
              />
             <Image src={"/images/vector.png"} alt="" width={20} height={20} />
              </div>
            </div>
            
            </div>           
           
          </div>
        </div>
        
        </>         
              
    )
}