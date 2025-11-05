import React, {useState } from 'react'
import { Fab, Webchat } from '@botpress/webchat'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const  Chat=() =>{
  const [isWebchatOpen, setIsWebchatOpen] = useState(false)
  const toggleWebchat = () => {
    setIsWebchatOpen((prevState) => !prevState)
  }
  return (
    <>
    <Navbar/>
      <Webchat
        clientId="3e0642bb-e513-4fd2-9871-8d3d39f2bd29" // Your client ID here
        style={{
          width: '400px',
          height: '600px',
          display: isWebchatOpen ? 'flex' : 'none',
          position: 'fixed',
          bottom: '90px',
          right: '20px',
        }}
      />
      <Fab
        onClick={() => toggleWebchat()}
    
      />
    </>
  )
}

export default Chat;