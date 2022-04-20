import React, { useRef } from 'react'
import { ByMoralis, useMoralis, useMoralisQuery } from 'react-moralis'
import Message from './Message'
import SendMessages from './SendMessages'
const MINS_DURATION = 15
function Messages() {
  const { user } = useMoralis()
  const endOfMessageRef = useRef(null)
  const { data, loading, error } = useMoralisQuery(
    'Message',
    (query) =>
      query
        .ascending('createdAt')
        .greaterThan(
          'createdAt',
          new Date(Date.now() - MINS_DURATION * 60 * 1000)
        ),
    [],
    {
      live: true,
    }
  )
  return (
    <div className="pb-56">
      {/* <div className="my-5">
        <ByMoralis
          variant="dark"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        />
      </div> */}
      <div className="space-y-10 p-4">
        {data.map(message => (
          <Message key={message.id} message={message}/>
        ))}
      </div>
      <div className="flex justify-center">
        <SendMessages endOfMessageRef={endOfMessageRef} />
      </div>
      <div ref={endOfMessageRef} className="mt-5 text-center text-gray-400">
        <p>You're up to date {user?.getUsername()}!</p>
      </div>
    </div>
  )
}

export default Messages
