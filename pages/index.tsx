import Head from 'next/head'
import { Login } from '../components/Login'
import { useMoralis } from "react-moralis";
export default function Home() {
  const {isAuthenticated, logout} = useMoralis();
  if(!isAuthenticated)return <Login/>;
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black py-2 text-white">
      <Head>
        <title>Metaverse Chatting App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Welcome to the metaverse Chatting engine</h1>
      <button onClick={logout}>Logout</button>
    </div>
  )
}
