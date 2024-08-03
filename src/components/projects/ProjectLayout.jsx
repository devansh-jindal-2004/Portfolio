import Link from 'next/link'
import React from 'react'

function ProjectLayout({name, description, date, demoLink}) {
  return (
    <Link href={demoLink} target='_blank' className=' text-white flex items-center justify-between w-full relative rounded-lg overflow-hidden p-6 custom-bg cursor-pointer'>
      <div className='flex items-center justify-center space-x-2'>
        <h2 className=' text-forground'>{name}</h2>
        <p className=' text-muted'>{description}</p>
      </div>
      <div className=' self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted' />
      <p className=' text-forground'>
        {new Date(date).toDateString()}
      </p>
    </Link>
  )
}

export default ProjectLayout