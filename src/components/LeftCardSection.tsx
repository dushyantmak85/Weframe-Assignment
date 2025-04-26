import ProgressCircle from "./ProgressCircle"
import { CheckMark } from "./CircleIcon"
import Circle from "./CircleIcon"; // Import the Circle component
{/* Left Vertical Long Section */}
export default function LeftCardSection() {
    return(
        <>
         <div className="w-[23rem]">
              <div className="rounded-2xl border  border-[#E0E0E0] p-6 bg-white h-full">
              <h2 className=" text-[#1E1E1E] mb-[30px] font-medium ml-[6rem] text-lg">Account Progress</h2>
                    <div className="flex justify-center items-center my-[20px]">
                      <div className="relative w-[100px] h-[100px] mx-auto">
        
                        <ProgressCircle percentage={85}/>            
        
                      </div>              
                    </div>
                    <div className="w-full h-[1px] bg-gray-300 my-[20px]" />    
                  
        
                    <div className="bg-[#F6F7FB] rounded-[15px] px-[15px] py-[15px] mb-[10px] h-[160px]">
                      <h3 className="font-bold mb-[10px] text-[15px] text-black">Steps Completed</h3>
                      <ul className="space-y-[10px] text-[#1E1E1E] text-[15px] ">
                        <li className="flex items-center gap-2"> 
                           <Circle/> Profile Setup <CheckMark margin_left={9}/></li>
        
                        <li className="flex items-center gap-2">  
                          <Circle/> Initial Training  <CheckMark margin_left={8.7}/></li>
        
                        <li className="flex items-center gap-2" > 
                           <Circle/>  KYC Documents  <CheckMark margin_left={7.6}/></li>
                      </ul>
                    </div>
                    
                    <div className="bg-[#F6F7FB] rounded-[15px] px-[15px] py-[38px]  h-[120px] ">
                      <h3 className="font-bold text-black mb-[10px] text-[15px] mt-[-25px]">Steps Remaining</h3>
                      <ul className="space-y-[10px] text-[#1E1E1E] text-[15px] ">
                        
                      <li className="flex items-center gap-1">  
                          <Circle/> Financial Integration  <CheckMark margin_left={6.56} bg="#0A995240"/></li>
        
                        <li className="flex items-center gap-2" > 
                         <Circle/> Final Review  <CheckMark margin_left={9.1} bg="#0A995240"/> </li>                
                      </ul>
                    </div>
              </div>
            </div>
        
        
        
        </>         
              
    )
}