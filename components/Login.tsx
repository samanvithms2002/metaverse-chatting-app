import Image from 'next/image'
import { useMoralis } from "react-moralis";
export function Login() {
  const {authenticate} = useMoralis();
  return (
    <div className="h-screen flex flex-col items-center space-y-5 justify-center bg-slate-900 align-middle text-white">
      <h1 className="text-3xl font-bold">Welcome </h1>
      <h3 className="text-xl font-bold">to the Blockchain authenticated Chatting App</h3>
      <div>
        <button type="button" onClick={()=>authenticate()} className="bg-blue-800 p-5 rounded-md font-bold">Login to the app</button>
      </div>
    </div> 
  )
}
