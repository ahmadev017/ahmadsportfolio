import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
  title="BSc in Computer Science"
  subTitle="KFUEIT University (2023 - Present)"
  result="Student"
  des="Currently enrolled in the 4th semester, focusing on core computer science subjects such as Data Structures, Algorithms, and Web Development. "
/>

          <ResumeCard
            title="Intermediate in computer science (ICS)"
            subTitle="Punjab College (2021 - 2023)"
            result="Completed"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
  title="Secondary School Education"
  subTitle="National Garrison Secondary School (2019 - 2021)"
  result="A+ Grade"
  des="Completed matriculation with a strong foundation in Science subjects including Physics, Chemistry, and Mathematics. Developed discipline, teamwork, and a consistent academic performance throughout."
/>

        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - Present</p>
<h2 className="text-3xl md:text-4xl font-bold">Project Experience</h2>

        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
  title="AI Blog Generator"
  subTitle="MERN Stack + OpenAI API | 2025"
  result="Solo Project"
  des="Created an AI-powered blog writing app where users can generate high-quality content using OpenAI's GPT models. Includes blog categories, content editor, and user authentication."
/>

<ResumeCard
  title="Doctor Appointment Booking App"
  subTitle="MERN Stack | 2025"
  result="Solo Project"
  des="Developed a full-stack web app for booking appointments. Includes patient login, doctor/admin dashboard, time slot selection, and payment integration."
/>

<ResumeCard
  title="Movie List App"
  subTitle="React.js | 2025"
  result="Practice Project"
  des="Built a responsive movie listing interface using an external API. Implemented features like search, filtering, and single movie detail pages."
/>

        </div>
      </div>
    </motion.div>
  );
}

export default Education