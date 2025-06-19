import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaReact, FaInstagram, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiExpress } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-20 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
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
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL IN
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiExpress />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media