"use client"
import { BtnList } from '@/app/data'
import React from 'react'
import NavButton from './NavButton';

function Navigation() {

  const angleIncrement = 360 / BtnList.length;

  return (
    <div className='fixed flex justify-center items-center h-screen w-screen'>
      <div className='flex group items-center justify-center relative text-white animate-spin-slow hover:pause'>
        {
          BtnList.map((btn, index) => {

            const angleRad = (index * angleIncrement * Math.PI) / 180
            const radius = 'calc(20vw - 1rem)'
            const x = `calc(${radius}*${Math.cos(angleRad)})`;
            const y = `calc(${radius}*${Math.sin(angleRad)})`;


            return <NavButton key={btn.label} x={x} y={y} {...btn} />
          })
        }
      </div>
    </div>
  )
}

export default Navigation