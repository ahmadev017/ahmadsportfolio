import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="Ahmad Raza"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Ahmad Raza</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          I'm a self-taught web developer passionate about turning ideas into real-world applications. 
          Currently building full-stack projects and growing one line of code at a time.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          <span className="font-semibold text-white">Phone:</span> 
          <span className="text-lightText">+92 3106546012</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          <span className="font-semibold text-white">Email:</span> 
          <span className="text-lightText">ahmadaraza01708@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
        <div className="flex gap-4">
  <a href="https://www.facebook.com/share/1ATcUwYdNg/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="bannerIcon">
    <FaFacebookF />
  </a>
  <a href="https://www.instagram.com/ahmad_raza017?igsh=MWx5cW4yYjBkMHF3&utm_source=qr" target="_blank" rel="noopener noreferrer" className="bannerIcon">
    <FaInstagram />
  </a>
  <a href="http://linkedin.com/in/ahmad-raza-dev" target="_blank" rel="noopener noreferrer" className="bannerIcon">
    <FaLinkedinIn />
  </a>
  <a href="https://github.com/ahmadev017" target="_blank" rel="noopener noreferrer" className="bannerIcon">
    <FaGithub />
  </a>
</div>

      </div>
    </div>
  );
};

export default ContactLeft;
