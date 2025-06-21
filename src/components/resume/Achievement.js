import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20 flex-col md:flex-row"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024 - present</p>
          <h2 className="text-4xl font-bold">Certifications & Accomplishments</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
  title="Project Completion Certificate"
  subTitle="Full Stack E-Commerce Project"
  result="Verified"
  des="Successfully completed a full MERN-stack app with role-based panels and payment integration."
  link="https://quiz.greatstack.dev/validate/fcomwIdBNmEUevTU6xQiBUxEuhKuJGQ2"
/>

<ResumeCard
  title="JavaScript Fundamentals Certificate"
  subTitle="GreatStack Online Learning"
  result="Verified"
  des="Learned the core fundamentals of JavaScript including ES6, DOM manipulation, and asynchronous programming."
  link="https://quiz.greatstack.dev/validate/jsbswIdBNmEUevTU6xQiBUxEuhKuJGQ2"
/>

<ResumeCard
  title="React.js Certificate"
  subTitle="GreatStack Online Learning"
  result="Verified"
  des="Built multiple projects using React.js, including useState, useEffect, props, component architecture, and routing."
  link="https://quiz.greatstack.dev/validate/rhkswIdBNmEUevTU6xQiBUxEuhKuJGQ2"
/>


        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - present</p>
          <h2 className="text-4xl font-bold">Personal Growth <br /> Journey</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
  title="Badminton Team Player"
  subTitle="University Level Participation"
  result="Rahim Yar Khan"
  des="Actively participated in university badminton matches. Improved teamwork, reflexes, and competitive spirit through regular practice."
  
/>
<ResumeCard
  title="Gym Discipline"
  subTitle="Consistent Training Since 2023"
  result="Fitness"
  des="Using gym workouts to build mental and physical strength. It helps maintain focus, productivity, and daily energy."
/>
<ResumeCard
  title="Self-Taught Developer"
  subTitle="Learned MERN Stack via YouTube (2023 - 2024)"
  result="No Bootcamp"
  des="Completed numerous YouTube tutorials, built real apps, and never gave up despite not having access to paid platforms or mentors."
/>

        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
