"use client"
import React, { useEffect, useState } from 'react'

const createFireFlies =()=> ({
    id: Math.random(),
    top:`${Math.random()*100}%`,
    left:`${Math.random()*100}%`,
    animationDuration: `${Math.random()*5+5}s`
    
})

function FireFliesBackground() {

    const [fireFlies, setFireFlies] = useState([])

    useEffect(()=> {

        const addFireFlyPeriodically = ()=> {
            const newFireFly = createFireFlies();
            setFireFlies(prevFireFlies => [...prevFireFlies.slice(-14), newFireFly])
        }

        const interval = setInterval(addFireFlyPeriodically, 1000);

        return ()=> clearInterval(interval);
    },[])

  return (
    <div className='fixed top-0 left-0 w-full h-full -z-10 overflow-hidden'>
        {
            fireFlies.map((firefly) => {
                return <div key={firefly.id} className=' absolute rounded-full w-[15px] h-[15px] bg-firefly-radial' style={{
                    top: firefly.top,
                    left: firefly.left,
                    animation: `move ${firefly.animationDuration} infinite alternate`
                }}> </div>
            })
        }
    </div>
  )
}

export default FireFliesBackground