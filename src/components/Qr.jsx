import React from 'react'
import qr from "../assets/instaqr.webp"

const Qr = () => {
  return (
    <div className='flex items-center justify-center'>
        <a href="https://www.instagram.com/oussama_el_khadraoui/" target='_blank'>
            <img width={250} src={qr} alt="Oussama Khadraoui Instagram QR code" className='drop-shadow-md'/>
        </a> 
    </div>
  )
}

export default Qr