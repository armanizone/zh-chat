import React from 'react'
import { Button, TextInput } from '@mantine/core'
import Cookies from 'js-cookie'
import { useUserStore } from 'entities/chat'

export const AuthWithCookie = () => {

  const [name, setName] = React.useState('')
  const [error, setError] = React.useState('')

  const {user, setUser} = useUserStore()

  function login (e) {
    e.preventDefault()
    if (!name) {
      setError('Запоните данное поле')
      return
    }
    setUser(name)
  }

  return (
    <form 
      className='flex items-end'
      onSubmit={login}
    >
      <TextInput 
        size='lg'
        variant='filled'
        label='Ваше имя'  
        value={name}
        onChange={e => setName(e.currentTarget.value)}
      />
      <Button
        size='lg'
        type='submit'
        disabled={!name}
      >
        Войти в чат
      </Button>
    </form>
  )
}
