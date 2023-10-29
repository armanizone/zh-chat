import React from "react"
import { AuthWithCookie } from "features/authWithCookie"
import { Chat } from "entities/chat"

function App() {

  return (
    <div className="h-screen grid grid-cols-[70%_auto]">
      <div className="h-full w-full flex items-center justify-center bg-black">
        <AuthWithCookie/>
      </div>
      <div className="bg-green-500">
        <Chat/>
      </div>
    </div>
  )
}

export default App
