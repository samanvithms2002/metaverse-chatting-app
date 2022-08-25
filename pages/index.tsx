import Head from 'next/head'
import { Login } from '../components/Login';
import {Header} from '../components/Header';
import { useMoralis } from "react-moralis";
import Messages from '../components/Messages';
export default function Home() {
  const {isAuthenticated, logout} = useMoralis();
  if(!isAuthenticated)return (
  <div>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Login/>
  </div>
  )
  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-blue-800 to to-slate-900 overflow-hidden text-white">
      <Head>
        <title>TARP Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="max-w-screen-2xl mx-auto">
            <Header/>
            <hr style={{ border: "0", height: "1px", background: "#5774d4" }} />
                
            <Messages/>
        </div>
      </div>
    </div>
  )
}
