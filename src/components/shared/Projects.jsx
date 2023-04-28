import React from 'react'
import { forwardRef } from 'react';

const Projects = forwardRef((props, ref) => {
    
  return (
    <section ref={ref} className='bg-[#f9f9f9] py-40 px-0'>
        <div className='my-0 mx-auto max-w-[70rem] py-0 px-16'>
            <div className='flex-column'>
                <p className='text-[#147efb] font-bold mb-2 uppercase'>Portafolio</p>
                <h3 className='text-color text-[1.6rem] font-web font-bold mb-6'>Cada proyecto es una pieza única de desarrollo 🧩</h3>
                <div className='grid gap-20	grid-cols-1 grid-rows-[auto] h-auto w-full'>
                <div className='flex-row flex gap-24 p-6 h-35 bg-[#fff] rounded-[1.2rem] shadow-3xl'>
                    <div className='rounded-[1.2rem] h-auto overflow-hidden w-[32rem]'>
                        <a href="">
                            <img className='h-auto w-full hover:transform hover:translate-y-[-83%] transition duration-[10s] ease-linear' src="/detako.png" alt="detako" />
                        </a>
                    </div>
                    <div className='flex flex-col h-auto justify-center text-center	w-[19rem] text-[1.1rem]'>
                        <h3 className='relative mb-4 uppercase font-bold'>De Tako ⚽ </h3>
                        <p className='text-[#767676] mb-2 font-semibold'>Sitio web que ofrece servicio de alquiler de canchas de futbol y padel. Podes elegir tu deporte preferido y un horario que se adapte a tus necesidades.</p>
                        <div className='flex gap-4 justify-center mt-3'>
                            <p className='shadow-3xl font-mulish font-bold py-2	px-3'>React</p>
                            <p className='shadow-3xl font-mulish font-bold py-2	px-3'>Vanila CSS</p>
                        </div>
                        <div className='gap-4 justify-evenly mt-7 flex'>
                            <a className='flex items-center	 font-semibold gap-[5px] ' href="">
                                Code
                                <img className='w-8' src="/github.png" alt="github-icon" />
                            </a>
                            <a className='flex items-center font-semibold gap-[5px]' href="">
                                Live Demo
                                <img className='w-6' src="/compartir.png" alt="compartir-img" />
                            </a>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
        </div>
    </section>
  );
});

export default Projects