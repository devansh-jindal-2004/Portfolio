import clsx from 'clsx'
import React from 'react'

const ItemLayout = ({ children, className }) => {
    return <div className={clsx('custom-bg p-6 sm:p-8 rounded-xl flex items-center justify-center space-y-8', className)}>
        {children}
    </div>
}

function AboutDetails() {
    return (
        <section className='py-20 w-full'>
            <div className='grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full'>

                <ItemLayout className={`col-span-full lg:col-span-8 row-span-2 flex-col items-start`}>
                    <h2 className='text-xl md:text-2xl text-left w-full capitalize'>
                        Full Stack Web Developer
                    </h2>
                    <p className='font-light text-xs sm:text-sm md:text-base'>Embarking on a journey through the digital realm, I harness the power of diverse tools and languages, with JavaScript at the heart of my craft. I skillfully wield frameworks like React.js and Next.js, creating seamless websites that connect users across the digital universe. The innovative Jamstack architecture allows me to forge fast, secure, and dynamic experiences, while my design expertise ensures every creation is both functional and visually stunning. Join me as I continue to explore new technologies and shape the future of the web.</p>
                </ItemLayout>

                <ItemLayout className={`col-span-full xs:col-span-6 lg:col-span-4 text-accent`}>
                    <p className='font-semibold w-full text-left text-2xl sm:text-5xl'>
                        25+ <sub className='font-semibold text-base'>clients</sub>
                    </p>
                </ItemLayout>

                <ItemLayout className={`col-span-full xs:col-span-6 lg:col-span-4 text-accent`}>
                    <p className='font-semibold w-full text-left text-2xl sm:text-5xl'>
                        4+ <sub className='font-semibold text-base'>years of experience</sub>
                    </p>
                </ItemLayout>

                <ItemLayout className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}>
                    <img className='w-full h-auto' src="https://github-readme-stats.vercel.app/api/top-langs/?username=devansh-jindal-2004&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="Devansh" loading='lazy' />
                </ItemLayout>

                <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
                    <img className='w-full h-auto' src="https://github-readme-stats.vercel.app/api?username=devansh-jindal-2004&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&show_icons=true" alt="Devansh" loading='lazy' />
                </ItemLayout>

                <ItemLayout className={"col-span-full"}>
                    <img className='w-full h-auto' src="https://skillicons.dev/icons?i=js,babel,appwrite,cloudflare,netlify,threejs,yarn,nodejs,react,aws,bootstrap,c,express,git,linux,mongodb,mysql,nextjs,npm,postman,redux,ts,vite,htmx,tailwind,github,html,css,wasm" alt="Devansh" loading='lazy' />
                </ItemLayout>

                <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
                    <img className='w-full h-auto' src="https://github-readme-streak-stats.herokuapp.com?user=devansh-jindal-2004&theme=dark&hide_border=true&type=png&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B" alt="Devansh" loading='lazy' />
                </ItemLayout>

                <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
                    <img className='w-full h-auto' src="https://github-readme-stats.vercel.app/api/pin/?username=devansh-jindal-2004&repo=portfolio&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2" alt="Devansh" loading='lazy' />
                </ItemLayout>

            </div>
        </section>
    )
}

export default AboutDetails