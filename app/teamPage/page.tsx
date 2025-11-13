"use client"
import { useState } from 'react'
import Grid from '../Components/grid'
import { employees } from './pages'

const LeezovaTeam = () => {
  const [selectedTeam, setSelectedTeam] = useState("Frontend");
  return (
    <div className="flex flex-col bg-pink-50 h-screen p-6 pt-[120px] w-full">
      <div className='w-full flex justify-between h-full ml-2'>
        <div className='w-[40%] md:w-[20%]' >
          <h2 className="text-xl font-semibold text-left md:text-center text-black mb-4">Teams</h2>
          {employees.map((team)=>(
            <div key={team.id}
              onClick={() => setSelectedTeam(team.teamName)}
               className={`cursor-pointer justify-left md:justify-center items-left md:items-center flex mb-4 text-[15px] md:text-lg transition-all duration-300 
      ${selectedTeam === team.teamName 
        ? "text-blue-800 font-bold pl-2" 
        : "text-gray-700 hover:text-blue-500 hover:translate-x-2"}`}>
              {team.teamName}
            </div>
          ))}
        </div>
        <div className='w-[60%] md:w-[80%] overflow-y-auto scrollbar-hide bg-main-gradient'>
          <Grid selectedTeam={selectedTeam} />
        </div>
      </div>
    </div>
  )
}

export default LeezovaTeam
