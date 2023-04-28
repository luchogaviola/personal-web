import React from 'react'


const Navbar = ({homeRef, aboutRef, projectsRef, contactRef}) => {

  return (
    <div className='bg-[#ffffff] items-center justify-between left-0 top-0 h-auto w-full flex shadow-md py-6 pr-10 pl-12 fixed z-200'>
      <h3 className='text-lg text-color font-bold cursor-pointer font-web self-center'>luchogaviola.dev</h3>
      
        <ul className='flex gap-8 font-semibold font-web text-color'>
            <li >
                <a onClick={() => homeRef.current.scrollIntoView({behavior: "smooth"})} className='cursor-pointer self-center transition-all hover:text-hovblue'>Inicio</a>
            </li>
            <li >
                <a onClick={() => aboutRef.current.scrollIntoView({behavior: "smooth"})} className='cursor-pointer self-center transition-all hover:text-hovblue'>Sobre mi</a>
            </li>
            <li >
                <a onClick={() => projectsRef.current.scrollIntoView({behavior: "smooth"})} className='cursor-pointer self-center transition-all hover:text-hovblue'>Proyectos</a>
            </li>
            <li >
                <a onClick={() => contactRef.current.scrollIntoView({behavior: "smooth"})} className='cursor-pointer self-center transition-all hover:text-hovblue'>Contacto</a>
            </li>
        </ul>

    </div>

  )
}

export default Navbar