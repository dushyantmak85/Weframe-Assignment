import ProgressCircle from "./ProgressCircle"
import { CheckMark } from "./CircleIcon"
import Circle from "./CircleIcon"; // Import the Circle component
{/* Left Vertical Long Section */}
export default function LeftCardSection() {
    return(
        <>
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
        
        
        
        </>         
              
    )
}