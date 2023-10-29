import { SendMessage } from 'features/sendMessage'
import React from 'react'

export const Chat = () => {
  return (
    <div className='p-4 flex flex-col h-full'>
      <div className='grow'>

      </div>
      <SendMessage/>
    </div>
  )
}
