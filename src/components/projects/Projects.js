import React from 'react';
import Title from '../layouts/Title';
import {
  prescriptoAdmin,
  BlogAdmin,
  projectOne,
  projectTwo,
  quickThumbnail2,
  prescriptoThumbnail2,
  portfolioss,
  airbnb,
  animated,
  Adminn,
  project2
} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14 mt-10">
        <ProjectsCard
          title="AI Learning Platform"
          des=" a full-stack AI-driven platform where users can generate and enroll in custom learning courses. Features include Gemini youtube API for AI course generation."
          src={project2}
          github="https://github.com/ahmadev017/AI-learning-platform"
          website="https://ai-learning-platform-theta.vercel.app/"
        />
        <ProjectsCard
          title="Appointment Booking App"
          des="A full-stack medical appointment booking platform with user authentication, doctor availability, appointment scheduling, and Stripe payment integration."
          src={prescriptoThumbnail2}
          github="https://github.com/ahmadev017/prescripto"
          website="https://prescripto-new.vercel.app/"
        />
        <ProjectsCard
          title="Admin & Doctor panel (Appointment App)"
          des="Admin dashboard for managing users, doctors, and appointments. Features include secure login, dashboard analytics, and request handling."
          src={Adminn}
          github="https://github.com/ahmadev017/prescripto-admin"
          website="https://prescripto-admin-new.vercel.app/"
        />
        <ProjectsCard
          title="AI Blog App"
          des="A fullstack blog publishing platform that uses AI to summarize articles and suggest relevant tags. Includes rich text editor, categories, and admin controls."
          src={quickThumbnail2}
          github="https://github.com/ahmadev017/AIBlogApp"
          website="https://my-ai-blog-app.vercel.app/"
        />
        <ProjectsCard
          title="Responsive Portfolio"
          des="A personal portfolio website built with React, showcasing projects, skills, and contact information in a responsive layout with smooth animations."
          src={portfolioss}
          github="https://github.com/ahmadev017/my-Portfolio"
          website="https://my-portfolio-liart-chi-74.vercel.app/"
        />
        <ProjectsCard
          title="Airbnb Clone"
          des="A clone of Airbnb’s UI where users can search, filter, and book rental places. Built with React, Tailwind, and dummy data for UI demonstration."
          src={airbnb}
          github="https://github.com/ahmadev017/dreamy-place-picker"
          website="https://airrbnbb1.netlify.app/"
        />
        <ProjectsCard
          title="Animated Portfolio"
          des="A visually engaging portfolio website with animated transitions, and a clean layout. Lack responsiveness but Ideal for modern frontend showcasing."
          src={animated}
          github="https://github.com/ahmadev017/portfolio"
          website="https://zapdportfolio.netlify.app/"
        />
      </div>
    </section>
  );
};

export default Projects;

