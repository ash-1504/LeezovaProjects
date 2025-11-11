import React from 'react'
import SideBar from '../Components/SideBar'

const Frontened = () => {

  const employees = [
  {
    name: "Stefan Salvatore",
    role: "Frontend Developer",
    experience: "5 years",
    skills: "React, Next.js, CSS, HTML"
  },
  {
    name: "Damon Salvatore",
    role: "Frontend Developer",
    experience: "3 years",
    skills: "React, Next.js, CSS, HTML"
  },
  {
    name: "Caroline Forbes",
    role: "Frontend Developer",
    experience: "2 years",
    skills: "React, Next.js, CSS, HTML"
  },
  {
    name: "Klaus Mickalson",
    role: "Frontend Developer",
    experience: "10 years",
    skills: "React, Next.js, CSS, HTML"
  },
  {
    name: "Jena Gilbert",
    role: "Frontend Developer",
    experience: "Fresher",
    skills: "React, CSS, HTML"
  },
  {
    name: "Monica Geller",
    role: "Frontend Developer",
    experience: "1 year",
    skills: "React, Next.js, CSS, HTML"
  }
];

  return(
    <div className="flex">
          <SideBar/>
          <div className=" flex  flex-col bg-pink-100 p-4 ml-[200px]   min-h-screen  overflow-y-auto pt-[120px] w-full ">
          <h1 className="text-3xl mb-4">WELCOME TO FRONTEND TEAM</h1>
             <div className="grid grid-cols-3 gap-4">
            { employees.map((employee, index) => ( 
  <div  key={index}className="border-4 border-pink-400  w-87 h-50 items-center justify-center flex bg-pink-200 text-shadow-lg "> 
    <p>
      name: {employee.name} <br/>
      role: {employee.role} <br/>
      experience:{employee.experience} <br/>
      skills: {employee.skills} <br/>
    </p>
    </div>))}
    </div>
        </div>
        </div>
)}

export default Frontened
