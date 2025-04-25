
export default function Sidebar() { 
    return (


        <>
        {/* Sidebar */}
        <aside className=" w-[240px] bg-[#11455D] text-[#FFFFFF99] px-[18px] py-[20px]  mr-[20px] min-h-[calc(100vh-64px)] -ml-[36px] -mt-[32px] -mb-[32px]">
          <ul className="space-y-[18px]">
         {[
           "Home",
           "Stages & Checklist",
           "Upload Docs",
           "Preferred Vendors",
           "Tech Stack",
           "Targets",
           "Zee Sales Targets",
           "MAI Settings",
           "Pending Questions"
         ].map((item, index) => (
           <li
             key={index}
             className={`transition-all duration-200 rounded-[8px] px-[12px] py-[8px] hover:bg-[#165972] ${
               item === "Home" ? "text-[ #2FBCFE] font-semibold bg-[#165972]" : ""
             } ${item === "Pending Questions" ? "flex justify-between items-center" : ""}`}
           >
             <span>{item}</span>
             {item === "Pending Questions" && (
               <span className="bg-[#38BDF8] text-white text-[12px] rounded-full px-[8px]">3</span>
             )}
           </li>
         ))}
       </ul>
     </aside>  
     
        {/* End of Sidebar */}
      </>
         
        
    );
}