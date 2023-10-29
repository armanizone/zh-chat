import React from 'react'
import { ActionIcon, Button, Textarea } from '@mantine/core'
import { AiOutlineSend }from 'react-icons/ai'

export const SendMessage = () => {

  const [message, setMessage] = React.useState('')
  
  async function sendMessage (e) {
    e.preventDefault()
  } 

  return (
    <form 
      className='grid grid-cols-[90%_auto] items-end'
      onSubmit={sendMessage}
    >
      <Textarea
        value={message}
        onChange={(e) => setMessage(e.currentTarget.value)}
        className='grow'
        autosize
        variant='filled'
      />
      <ActionIcon
        onClick={sendMessage}
        // size='100%'
        size='xl'
        p={4}
        // radius={0}
      >
        <AiOutlineSend size={50}/>
      </ActionIcon>
    </form>
  )
}
