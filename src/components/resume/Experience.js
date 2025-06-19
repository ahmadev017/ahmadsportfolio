import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1, transition: { duration: 0.5 } }}
  className="py-12 font-titleFont flex gap-20 flex-col lg:flex-row"
>
  {/* Development Journey */}
  <div>
    <div className="flex flex-col gap-4">
      <p className="text-sm text-designColor tracking-[4px]">2023 - Present</p>
      <h2 className="text-4xl font-bold">Development Journey</h2>
    </div>
    <div className="mt-14 w-full h-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
      <ResumeCard
        title="Full Stack Developer (MERN)"
        subTitle="Personal & Freelance Projects (2024 - Present)"
        result="Remote"
        des="Built several full-stack applications using React, Node.js, MongoDB, and Express. Focused on real-world features like authentication, dashboards, booking systems, and responsive design."
      />
      <ResumeCard
        title="Open Source & GitHub Contributor"
        subTitle="Portfolio & Learning Projects (2023 - Present)"
        result="GitHub"
        des="Actively uploading personal projects to GitHub, learning version control, and collaborating through issues and pull requests. Passionate about learning in public."
      />
      <ResumeCard
        title="Web Design Explorer"
        subTitle="Practicing UI/UX without Figma (2023 - Present)"
        result="Creative"
        des="Though not using Figma or Photoshop, I replicate modern UI by observing live websites and converting designs into Tailwind/React components from scratch."
      />
    </div>
  </div>

  {/* Creative Side */}
  <div>
    <div className="flex flex-col gap-4">
      <p className="text-sm text-designColor tracking-[4px]">2020 - Present</p>
      <h2 className="text-4xl font-bold">Creative Side</h2>
    </div>
    <div className="mt-14 w-full h-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
      <ResumeCard
        title="Badminton Player"
        subTitle="University & Local Matches (2020 - Present)"
        result="Rahim Yar Khan"
        des="Playing badminton for fitness, fun, and focus. Regularly participate in friendly matches and university tournaments, which help build discipline, teamwork, and quick decision-making skills."
      />
      <ResumeCard
        title="Gym Enthusiast"
        subTitle="Self-trained Fitness Lover"
        result="Physical + Mental"
        des="Consistently going to the gym to stay mentally and physically strong. Using discipline and routine as a secret weapon for productivity and balance."
      />
      <ResumeCard
        title="Tech Learner"
        subTitle="100% Self-Taught via YouTube & Practice"
        result="Pakistan"
        des="Learning full-stack development through YouTube projects and real implementation. No coding bootcamps—just pure passion and practice."
      />
    </div>
  </div>
</motion.div>

  );
};

export default Experience;
