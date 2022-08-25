import Image from 'next/image'
import { Avatar } from './Avatar'
import { useMoralis } from 'react-moralis'
import ChangeUsername from './ChangeUsername';
export function Header() {
  const{user,logout} = useMoralis();
  return (
    <div>
      <div className="p-4 space-y-3">
      
        
        <div className="text-left lg:text-center">

        <div className="relative h-48 w-48 rounded-full border-blue-100 border-8 lg:mx-auto p-3">
          <Avatar/>
        </div>
        <div>
          <h1 className="text-3xl font-medium">Welcome to the Blockchain authenticated Chatting App</h1>
          <h2 className="text-5xl truncate font-bold">{user?.getUsername()}</h2>
          <ChangeUsername/>
        </div>
        <div>
        <button onClick={logout} className="bg-white p-3 px-5 rounded-md text-blue-800 font-medium">Logout</button>

        </div>
        </div>
      </div>
    </div>
  )
}
