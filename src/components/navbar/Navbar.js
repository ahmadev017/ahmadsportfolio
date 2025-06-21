import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { ahmad } from '../../assets/index';
import { navLinksdata } from '../../constants';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  // Auto-close menu when resizing to large screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowMenu(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      {/* Logo */}
      <div>
        <img className="w-10 md:w-20 md:ml-20" src={ahmad} alt="Ahmad Raza Logo" />
      </div>

      {/* Navigation Links */}
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10 mr-40">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
           <FiMenu />
        </span>

        {/* Mobile Menu Drawer */}
        {showMenu && (
          <div className="w-[80%] h-screen absolute top-0 left-0 bg-gray-900 p-4 overflow-y-auto transition-transform duration-300 z-50">
            <div className="flex flex-col gap-8 py-2 relative">
              {/* Mobile Logo and Description */}
              <div className='flex flex-col gap-5'>
                <img className="w-20" src={ahmad} alt="Ahmad Raza Logo" />
                <p className="text-sm text-gray-400 mt-2">
                  I’m Ahmad Raza, a passionate MERN stack developer and UI/UX enthusiast from Pakistan,
                  dedicated to creating modern web solutions and building a successful global career.
                </p>
              </div>

              {/* Mobile Nav Links */}
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Social Links */}
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/share/1ATcUwYdNg/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bannerIcon"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://www.instagram.com/ahmad_raza017?igsh=MWx5cW4yYjBkMHF3&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bannerIcon"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://linkedin.com/in/ahmad-raza-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bannerIcon"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>

              {/* Close Button */}
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
