import React, { useState } from 'react'
import { useMoralis } from 'react-moralis'
interface SendMessagesProps {
endOfMessageRef: any,
}
function SendMessages({ endOfMessageRef }:SendMessagesProps) {
  const { user, Moralis } = useMoralis()
  const [message, setMessage] = useState('')
  const sendMessage = (e:any) => {
    e.preventDefault()
    if (!message) return
    const messageToSend = Moralis.Object.extend('Message')
    const messages = new messageToSend()
    messages
      .save({
        message: message,
        username: user?.getUsername(),
        ethAddress: user?.get('ethAddress'),
      })
      .then(
        (message:any) => {},
        (error:any) => {
          console.log(error)
        }
      );
      endOfMessageRef.current.scrollIntoView({ behavior: 'smooth' });
      setMessage("");
  }
  return (
    <form className="fixed bottom-10 flex w-11/12 max-w-2xl rounded-full border-2 border-blue-500 bg-black px-6 py-4 opacity-80 shadow-xl">
      <input
        type="text"
        className="placeholder-white-100 flex-grow bg-transparent pr-5  text-white  outline-none"
        placeholder={`Enter your message here ${user?.getUsername()}`}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit" onClick={sendMessage} className="font-bold">
        Send
      </button>
    </form>
  )
}

export default SendMessages
