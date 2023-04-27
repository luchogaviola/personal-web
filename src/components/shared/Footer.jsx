import React from 'react'

function Footer() {
  return (
    <footer className='bg-color py-12 px-0 w-full'>
        <div className='my-0 mx-auto max-w-[70rem] py-0 px-16'>
            <div className='items-center flex justify-between'>
                <h3 className='text-[#fff] text-[1.05rem] font-bold font-web'>
                Copyright © 2023. Todos los derechos reservados
                </h3>
                <div className='flex gap-3'>
                    <a href="https://www.linkedin.com/in/luchogaviola/">
                        <img className='w-[1.8rem]' src="./public/linkedin-footer.png" alt="linkedin" />
                    </a>
                    <a href="https://github.com/luchogaviola">
                        <img className='w-[1.8rem]' src="./public/github-footer.png" alt="github" />
                    </a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer