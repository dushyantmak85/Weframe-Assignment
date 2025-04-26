import Image from "next/image";
import Sidebar from "@/components/sidebar";
import LeftCardSection from "@/components/LeftCardSection"; // Import the LeftCardSection component
import CardsSection from "@/components/4CardsSection"; 
import Footer from "@/components/footer"; // Import the Footer component

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      
      <Sidebar />         

      {/* Main Content+ Header and Footer */}
      <div className="flex flex-col flex-1 overflow-auto ">

        {/* Header */}

        <div className="h-16 bg-grey flex items-center justify-end px-6 gap-4 ">
           <Image src="/Gear.png" alt="Top Performer Badge" width={23} height={23} />
            <Image src="/Avatar.png" alt="Top Performer Badge" width={30} height={30} />         
        </div>
        
        <div className="w-full h-[1px] bg-gray-300 my-[7px]" />

        {/* Top Content */}
        <div className="p-6 flex-shrink-0" style={{ height: "calc(100vh - 140px)" }}>
          <div className="flex gap-6 h-full">
            {/* Left Column */}
            <LeftCardSection />
            

            {/* Right Column: Grid */}
            <div className="grid grid-cols-2 grid-rows-2 gap-6 flex-1">
             <CardsSection/>
            </div>
          </div>
        </div>

        {/* Footer / Pending Questions Section */}
        <Footer />
       
      </div>
    </div>
  );
}
