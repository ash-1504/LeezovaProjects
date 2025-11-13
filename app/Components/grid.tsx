import React from 'react';
import { employees } from '../teamPage/pages';
const Grid=({selectedTeam}:{selectedTeam:string})=>{
    const selectedData=employees.find(team=>team.teamName===selectedTeam)

    if (!selectedData) {
    return <div className="text-center text-gray-500">{selectedData}</div>;
  }
  
  return (
      <div className="grid grid-cols-3   gap-6 w-full">
        {selectedData.members.map((member,index)=>( 
        <div
          key={member.id}
             className={`cursor-pointer bg-pink-100 border-2 border-pink-200 
                      hover:border-gray-300 rounded-xl
                      flex items-center justify-center text-lg font-medium 
                      text-black h-40 transition-transform transform 
                      duration-500 hover:scale-105 hover:shadow hover:bg-pink-200
                      ${index === 0 ? "col-span-2":"col-span-1"}`}>
            <div className='flex flex-col pb-1'>
            <div className='flex flex-col justify-center items-center  mb-1'>{member.name}</div>
            {member.details.map((details,index)=>(
                <div className="pl-2" key={index}>{details}</div>
                  ))}
            </div>
          </div>))}
       </div>
    )
  }

export default Grid;
