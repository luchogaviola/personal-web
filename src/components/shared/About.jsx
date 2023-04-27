import React from 'react'

function About() {
  return (
    <section className='bg-[#fff] py-40 px-0'>
        <div className='my-0 mx-auto max-w-[70rem] py-0 px-16'>
            <div className='items-center grid grid-cols-2 justify-center'>
                <div className='relative'>
                    <img className='bottom-[35px] right-[98px] w-[3.75rem!important] z-10 absolute' src="./public/yo.png" alt="emoji" />
                    <img className='w-[26rem] h-[22rem] rounded-[1.2rem]' src="./public/work.png" alt="notebook" />
                    <span className='bg-[#fff] rounded-full bottom-[-35px] right-[33px] w-[12rem] h-[12rem] absolute '>
                        <img className='animate-spin-slow' src="./public/vuelta.svg" alt="text" />
                    </span>
                </div>
                <div className='pr-6'>
                    <h4 className='text-[#147efb] text-[1.1rem] font-bold mb-2 uppercase'>Sobre mi</h4>
                    <h3 className='text-color font-web text-[1.5rem] font-bold leading-8 mb-4'>
                    Me dedico al desarrollo front-end en 
                        <br />
                        React en Buenos Aires, Argentina 📍
                    </h3>
                    <p className='text-[#767676] font-mulish text-[1.17rem] font-medium leading-7'>
                        Soy un desarrollador frontend especializado en React con experiencia en la creación de interfaces de usuario intuitivas y atractivas. Mi pasión por mantenerme actualizado en las últimas tendencias del mercado y mi compromiso por mejorar como desarrollador me llevó a ampliar mis habilidades con el uso de IA, aprendizaje automático y actualmente Python.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About