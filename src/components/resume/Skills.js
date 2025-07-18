import React from 'react'
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="w-full lgl:w-1/2">
  <div className="py-12 font-titleFont flex flex-col gap-4">
    <p className="text-sm text-designColor tracking-[4px] uppercase">Tools</p>
    <h2 className="text-3xl md:text-4xl font-bold">AI & Dev Tools</h2>
  </div>
  <div className='mt-14 w-full flex flex-col gap-6'>

    <div className="overflow-x-hidden">
      <p className="text-sm uppercase font-medium">ChatGPT</p>
      <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
        <motion.span
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
        >
          <span className="absolute -top-7 right-0">70%</span>
        </motion.span>
      </span>
    </div>

    <div className="overflow-x-hidden">
      <p className="text-sm uppercase font-medium">Cursor AI</p>
      <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
        <motion.span
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-[65%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
        >
          <span className="absolute -top-7 right-0">65%</span>
        </motion.span>
      </span>
    </div>

    <div className="overflow-x-hidden">
      <p className="text-sm uppercase font-medium">VS Code</p>
      <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
        <motion.span
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
        >
          <span className="absolute -top-7 right-0">60%</span>
        </motion.span>
      </span>
    </div>

    <div className="overflow-x-hidden">
      <p className="text-sm uppercase font-medium">Git & GitHub</p>
      <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
        <motion.span
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-[55%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
        >
          <span className="absolute -top-7 right-0">55%</span>
        </motion.span>
      </span>
    </div>

    <div className="overflow-x-hidden">
      <p className="text-sm uppercase font-medium">Vercel</p>
      <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
        <motion.span
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-[50%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
        >
          <span className="absolute -top-7 right-0">50%</span>
        </motion.span>
      </span>
    </div>

  </div>
</div>









       <div className="w-full lgl:w-1/2">
  <div className="py-12 font-titleFont flex flex-col gap-4 md:mb-14">
    <p className="text-sm text-designColor tracking-[4px] uppercase">
      Features
    </p>
    <h2 className="text-3xl md:text-4xl font-bold">Development Skill</h2>
  </div>
  <div className="flex flex-col gap-6">

    <div className="overflow-x-hidden">
      <p className="text-sm uppercase font-medium">React</p>
      <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
        <motion.span
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
        >
          <span className="absolute -top-7 right-0">85%</span>
        </motion.span>
      </span>
    </div>

    <div className="overflow-x-hidden">
      <p className="text-sm uppercase font-medium">Nextjs</p>
      <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
        <motion.span
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
        >
          <span className="absolute -top-7 right-0">60%</span>
        </motion.span>
      </span>
    </div>

    <div className="overflow-x-hidden">
      <p className="text-sm uppercase font-medium">Tailwind</p>
      <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
        <motion.span
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
        >
          <span className="absolute -top-7 right-0">70%</span>
        </motion.span>
      </span>
    </div>

    <div className="overflow-x-hidden">
      <p className="text-sm uppercase font-medium">JavaScript</p>
      <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
        <motion.span
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-[65%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
        >
          <span className="absolute -top-7 right-0">65%</span>
        </motion.span>
      </span>
    </div>

    <div className="overflow-x-hidden">
      <p className="text-sm uppercase font-medium">Node.js</p>
      <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
        <motion.span
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
        >
          <span className="absolute -top-7 right-0">60%</span>
        </motion.span>
      </span>
    </div>

  </div>
</div>

      
    </motion.div>
  );
}

export default Skills