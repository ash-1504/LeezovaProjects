"use client"
import { useState} from 'react'
import Link from "next/link";
const Navbar=()=> {
  const [ishoveredId , setIsHoveredId]=useState<number|null>(null)



  const handleMouseEnter=(id:number)=>{
    setIsHoveredId(id)
  }

  const handleMouseLeave=()=>{
    setIsHoveredId(null)
  }
const data = {
  users: [
    { 
      id: 1,
      name: "ABOUT",
      dropDown: [{ label: "LeezovaTeam", link: "/teamPage" },
          { label: "OurMission", link: "/mission" },
          { label: "OurVision", link: "/vision" }]
    },
    { 
      id: 2,
      name: "HOME",
      dropDown: [ { label: "subOption1", link: "/home1" },
          { label: "subOption2", link: "/home2" },
          { label: "subOption3", link: "/home3" }]
    },
    { 
      id: 3,
      name: "DASHBOARD",
      dropDown: [ { label: "subOption1", link: "/home1" },
          { label: "subOption2", link: "/home2" },
          { label: "subOption3", link: "/home3" }]
    }
  ],
};
  return (
    <> 
   
      <div  className="h-[90px] bg-gray-200 flex items-center justify-center   gap-6 fixed top-0 left-0 right-0 z-50"> 
        {data.users.map((option,index)=>
        <div className="NavBarOption  text-black cursor-pointer p-[5px] w-[180px] m-2.5 relative " key={index}
        onMouseEnter={()=>{handleMouseEnter(option.id)}}
        onMouseLeave={handleMouseLeave}><div>
          {option.name}
          <div className="dropdownMenu  flex flex-col py-2.5 bg-amber-50 absolute left-0 top-full w-[172px] mr-2.5 text-lg"  style={{display:ishoveredId===option.id ?"flex":"none"}}> 
            {option.dropDown.map((item , index)=>(<Link key = {index} href={item.link} className="p-2">
              {item.label}
              </Link>
            ))}
            </div></div>
            </div>)}
           </div>
     </>
  )
}

export default Navbar

