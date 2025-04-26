
import Circle from "./CircleIcon"; // Import the Circle component

import Image from "next/image";
{/* Left Vertical Long Section */}
export default function Footer() {
    return(
        <>
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
              
    )
}