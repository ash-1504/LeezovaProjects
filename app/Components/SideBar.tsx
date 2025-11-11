import Link from 'next/link';
import React from 'react'

const SideBar = () => {

  const data = {
    users: [
      {
        id: 1,
        sideMenu: "Frontened-team",
        path: "/frontendTeam",
      },
      {
        id: 2,
        sideMenu: "Backend-team",
        path: "backendTeam",
      },
      {
        id: 3,
        sideMenu: "Management-team",
        path: "managementTeam",
      },
    ],
  };

  
  return (
    <div className="w-[200px] fixed top-[75px] left-0 h-[calc(100vh-60px)] bg-gray-100  p-5 flex flex-col gap-4">
      {data.users.map((option)=>(
        <div>
          <Link href={option.path} className="p-2 flex  text-lg">
            {option.sideMenu}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default SideBar
