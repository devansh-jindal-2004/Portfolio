import { Home } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function HomeBtn() {
    return (
        <Link href={"/"} target={"_self"} className='text-forground rounded-full flex items-center justify-center custom-bg' aria-label={"Home"} name={"Home"}>
            <span className='relative w-14 h-14 p-4 hover:text-accent'>
                <Home className='w-full h-auto' strokeWidth={1.5} />
                <span className='peer bg-transparent absolute top-0 left-0 w-full h-full' />
                <span className=' absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-sm rounded-md shadow-lg whitespace-nowrap text-forground'>
                    {"Home"}
                </span>
            </span>
        </Link>
    )
}

export default HomeBtn