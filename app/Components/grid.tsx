import React from 'react';
import { employees } from '../teamPage/pages';

const Grid = ({ selectedTeam }: { selectedTeam: string }) => {
  const selectedData = employees.find(team => team.teamName === selectedTeam);

  if (!selectedData) {
    return <div className="text-center text-gray-500">No team found.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-6 w-full">
      {selectedData.members.map((member, index) => (
        <div
          key={member.id}
          className={`cursor-pointer bg-pink-100 border-2 border-pink-200 
                      hover:border-gray-300 rounded-xl
                      flex items-center text-lg font-medium 
                      text-black h-40 hover:shadow hover:bg-pink-200
                      ${index === 0 ? "md:col-span-2 justify-start pl-4" : "md:col-span-1 justify-center"}`}
        >
          <div
            className={`flex flex-col pb-1 text-[13px] md:text-[16px] 
                        ${index === 0 ? "items-start text-left" : "items-center text-center"}`}
          >
            <div className={`md:mb-1 ${index === 0 ? "text-left" : "text-center"}`}>
              {member.name}
            </div>
            {member.details.map((details, i) => (
              <div key={i} className="pl-2">{details}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Grid;
