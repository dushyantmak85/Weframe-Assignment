
export default function Sidebar() { 
    return (


        <>
        {/* Sidebar */}
        <aside className="w-64 bg-[#11455D] text-white flex flex-col">
       
        <nav className="flex-1 p-4 mt-[20px]">
          <ul className="space-y-2">
            {[
              { name: "Home", active: true },
              { name: "Stages & Checklist" },
              { name: "Upload Docs" },
              { name: "Preferred Vendors" },
              { name: "Tech Stack" },
              { name: "Targets" },
              { name: "Zee Sales Targets" },
              { name: "MAI Settings" },
              { name: "Pending Questions", badge: 3 },
            ].map((item) => (
              <li key={item.name}>
                <a
                  href="#"
                  className={`flex items-center justify-between px-4 py-2 rounded-lg hover:bg-[#165972] ${
                    item.active ? "bg-[#165972]" : ""
                  }`}
                >
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="bg-white text-blue-700 text-xs font-bold px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4">
          <button className="w-full text-left text-sm text-blue-300 hover:text-white">
            Logout
          </button>
        </div>
      </aside>
     
        {/* End of Sidebar */}
      </>
         
        
    );
}