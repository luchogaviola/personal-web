import React from 'react'
import { forwardRef } from 'react';

const Contact = forwardRef((props, ref) => {
    return (
      <section ref={ref} className='bg-[#fff] py-28 px-0'>
          <div className='my-0 mx-auto max-w-[70rem] py-0 px-16'>
              <div className='flex flex-col'>
                  <div>
                      <p className='text-[#147efb] font-bold mb-2 uppercase '>Contacto</p>
                      <h3 className='text-color text-[1.55rem] font-web font-bold'>¡No tengas miedo! ¡Hazme click! 👇</h3>
                  </div>
                  <div className='flex flex-wrap gap-20 mt-16'>
                      <div className='items-center flex gap-6'>
                          <span className='bg-[#fff] rounded-full drop-shadow-3xl p-[1.4rem]'>
                              <img className='w-[2rem]' src="/mapa.png" alt="mapa" />
                          </span>
                          <div className='flex flex-col gap-1'>
                              <h3 className='text-color text-[1.05rem] font-web font-bold'>Ubicacion</h3>
                              <p className='text-[#767676] text-[1.1rem] cursor-pointer hover:text-[#147EFB]'>Buenos Aires, Argentina</p>
                          </div>
                      </div>
                      <div className='items-center flex gap-6'>
                          <span className='bg-[#fff] rounded-full drop-shadow-3xl p-[1.4rem]'>
                              <img className='w-[2rem]' src="/email.png" alt="email-icon" />
                          </span>
                          <div className='flex flex-col gap-1'>
                              <h3 className='text-color text-[1.05rem] font-web font-bold'>Correo</h3>
                              <p className='text-[#767676] text-[1.1rem] cursor-pointer hover:text-[#147EFB]'>luchogaviola02@gmail.com</p>
                          </div>
                      </div>
                      
                  </div>
              </div>
          </div>
      </section>
    );
  });
  
  export default Contact;