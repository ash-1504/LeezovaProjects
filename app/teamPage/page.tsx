"use client"
import {useState} from 'react'
import Grid from '../Components/grid'
import { employees } from '../pages'


const LeezovaTeam = () => {
   const [selectedTeam, setSelectedTeam] = useState("frontend");

  return (
    <div className="flex flex-col bg-pink-50 h-screen p-6 pt-[120px] w-full ">
      <div className='w-full flex justify-between h-full  '>
        <div className=' w-[30%] ' >
           <h2 className="text-xl font-semibold text-center text-black mb-4">Teams</h2>
          {employees.map((team)=>(
            <div key={team.id}
            onClick={()=>setSelectedTeam(team.teamName)}
            className=" cursor-pointer justify-center items-center flex mb-4 text-lg hover:text-blue-500 hover:translate-x-2">
              {team.teamName}
             </div>
          ))}
        </div>
        <div className=' w-[70%] overflow-y-auto scrollbar-hide bg-main-gradient' >
          <Grid selectedTeam={selectedTeam}/>
        </div>
      </div>
    </div>

  )
}

export default LeezovaTeam
