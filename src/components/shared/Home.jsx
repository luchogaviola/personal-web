import React from "react";
import { forwardRef } from "react";

const Home = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="bg-[#f9f9f9] flex-col relative w-full	h-screen">
      <div className="max-w-[70rem] px-16 my-0 mx-auto"> 	
{/* container */}
        
        <div className="flex relative gap-40 items-center h-65 justify-center ">
          {/* content */}
          <div className="flex relative gap-40 justify-center items-center"> {/* hero main */}
          <div className="flex-col max-w-[31rem] relative">
            {/* hero text */}
            <h1 className="text-color font-bold text-6xl leading-tight	py-7">
              Front-End React Programador
            </h1>
            <img className="absolute w-[4.1rem] top-28 right-8" src="/saludo.png" alt="saludo" />
            <p className="text-[#767676] text-xl	 ">Hola, soy Luciano Gaviola, un apasionado desarrollador Front-end de React en Buenos Aires, Argentina. 📍 </p>
            <span className="flex my-7 gap-[0.5rem]">
            <a href="https://www.linkedin.com/in/luchogaviola/">
              <img className="w-9 cursor-pointer" src="/linkedin.png" alt="linkedin" />
            </a>
            <a href="https://github.com/luchogaviola">
            <img className="w-9 cursor-pointer" src="/github.png" alt="github" />
            </a>
            
            </span>
          </div>
          <div className="bg-perfil relative w-35 h-35 bg-center	bg-cover border-2 border-solid border-[#2d2e32] animate-morph"> {/* hero img */}
          </div>
          </div>
          <div className="flex absolute left-0 bottom-0 text-xl items-center">
            <p className="pr-8 mr-20 font-mulish font-bold border-r-[2px] border-solid border-[#2d2e32]">Habilidades</p>
            <ul className="flex flex-wrap gap-10">
              <li className="bg-[#fff] items-center	rounded-full drop-shadow-3xl cursor-pointer flex h-18 w-18 justify-center"><img className="h-auto w-9	" src="/skills/html.svg" alt="program_img" /></li>
              <li className="bg-[#fff] items-center	rounded-full drop-shadow-3xl cursor-pointer flex h-18 w-18 justify-center"><img className="h-auto w-9	" src="/skills/css.svg" alt="program_img" /></li>
              <li className="bg-[#fff] items-center	rounded-full drop-shadow-3xl cursor-pointer flex h-18 w-18 justify-center"><img className="h-auto w-9	" src="/skills/javascript.svg" alt="program_img" /></li>
              <li className="bg-[#fff] items-center	rounded-full drop-shadow-3xl cursor-pointer flex h-18 w-18 justify-center"><img className="h-auto w-9	" src="/skills/react.svg" alt="program_img" /></li>
              <li className="bg-[#fff] items-center	rounded-full drop-shadow-3xl cursor-pointer flex h-18 w-18 justify-center"><img className="h-auto w-9	" src="/skills/tailwind.svg" alt="program_img" /></li>
              <li className="bg-[#fff] items-center	rounded-full drop-shadow-3xl cursor-pointer flex h-18 w-18 justify-center"><img className="h-auto w-9	" src="/skills/scss.svg" alt="program_img" /></li>
            </ul>
    
          </div>
          
        </div>
      </div>
    </section>
  );
});

export default Home;