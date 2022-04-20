import React from 'react'
import { useMoralis } from 'react-moralis'
import TimeAgo from 'timeago-react'
import Avatar from './Avatar'
function Message({ message }) {
  const { user } = useMoralis()
  const isUserMessage = message.get('ethAddress') === user?.get('ethAddress')
  return (
    <div
      className={`relative flex items-end space-x-2 ${
        isUserMessage && 'justify-end'
      }`}
    >
      <div className={`relative h-8 w-8 ${isUserMessage && 'order-last'} ml-2`}>
        <Avatar userName={message.get('username')} />
      </div>
      <div
        className={`flex space-x-4 rounded-lg p-3 ${
          isUserMessage
            ? 'rounded-br-none bg-blue-400'
            : 'rounded-bl-none bg-black'
        }`}
      >
        <p>{message.get('message')}</p>
      </div>
      {/* timestamp */}
      <TimeAgo
        className={`text-[10px]  text-gray-400 ${
          isUserMessage && 'order-first pr-1'
        }`}
        dateTime={message.get('createdAt')}
      />
      <p
        className={`absolute -bottom-5 text-xs ${
          isUserMessage ? 'text-white' : 'text-blue-500'
        }`}
      >
        {' '}
        {message.get('username')}
      </p>
    </div>
  )
}

export default Message
