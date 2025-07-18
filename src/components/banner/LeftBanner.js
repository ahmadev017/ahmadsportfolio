import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaDownload } from 'react-icons/fa';
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Passionate Coder.", "Full Stack Developer.", "React developer."],
      loop: true,
      typeSpeed: 50,
      deleteSpeed: 30,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full  lgl:w-1/2 flex flex-col gap-10 mt-20">
      <div className="flex flex-col gap-5">
        <div className=' flex flex-col justify-center gap-4 '>
          <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="flex flex-col text-6xl font-bold text-white gap-2">
          Hi, I'm <br /><span className="text-designColor capitalize">Ahmad Raza</span>
        </h1>
        <h2 className="text-4xl font-bold text-white h-12 flex gap-2">
  <span>a</span>
  <span className="inline-block">
    {text}
    <Cursor
      cursorBlinking="false"
      cursorStyle="|"
      cursorColor="#ff014f"
    />
  </span>
</h2>


        </div>
        
        <p className="text-base font-bodyFont leading-6 tracking-wide mt-6 md:mt-0">
          Hi, I'm Ahmad Raza — a web developer and Computer Science student from Pakistan. I’m learning the MERN stack & Nextjs and love building modern, responsive websites. I'm focused on improving my skills, creating real-world projects, and working towards a successful career in tech.


        </p>
       
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner