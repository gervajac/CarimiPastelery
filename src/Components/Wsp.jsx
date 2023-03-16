import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import logo from "./assets/logo.png"

export default function Wsp() {

  return (
      <FloatingWhatsApp messageDelay="0.5" notificationDelay="10" notification={true} avatar={logo} statusMessage="" placeholder="Enviar mensaje" chatMessage="Buenas! Queres hacer un pedido?" accountName="Carimi Pasteleria" phoneNumber="+54 9 3434 80-8852"/>
  )
}