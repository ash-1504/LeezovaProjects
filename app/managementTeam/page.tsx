import React from 'react'
import SideBar from '../Components/SideBar'

const Management = () => {
  const employees = [
  {
    name: "Joye Salvatore",
    role: "Managing",
    experience: "5 years"
  },
  {
    name: "Chandler Salvatore",
    role: "Managing",
    experience: "3 years"
  },
  {
    name: "Elena Forbes",
    role: "Managing",
    experience: "2 years"
  },
  {
    name: "Kol Mickalson",
    role: "Managing",
    experience: "10 years"
  },
  {
    name: "Ross Gilbert",
    role: "Managing",
    experience: "Fresher"
  },
  {
    name: "Rachell Geller",
    role: "Managing",
    experience: "1 year"
  }
];

  return(
    <div className="flex">
          <SideBar/>
          <div className=" flex  flex-col bg-pink-100 p-4 ml-[200px]   min-h-screen  overflow-y-auto pt-[120px] w-full ">
          <h1 className="text-3xl mb-4">WELCOME TO MANAGEMENT TEAM</h1>
             <div className="grid grid-cols-3 gap-4">
            { employees.map((employee, index) => ( 
  <div  key={index}className="border-4 border-pink-400   w-87 h-50 items-center justify-center flex bg-pink-200 text-shadow-lg "> 
    <p>
      name: {employee.name} <br/>
      role: {employee.role} <br/>
      experience:{employee.experience} <br/>
    </p>
    </div>))}
    </div>
        </div>
        </div>
)
}

export default Management
