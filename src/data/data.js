import { FaReact, FaLaptopCode, FaServer, FaCodeBranch } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiFirebase } from "react-icons/si";
import { MdOutlineSettingsEthernet } from "react-icons/md"; // for Context API icon

// Features Data
export const featuresData = [
  {
    id: 1,
    icon: <FaReact />,
    title: "Frontend Development",
    des: "Building modern, responsive user interfaces using React.js, Tailwind CSS, and JavaScript.",
  },
  {
    id: 2,
    icon: <FaServer />,
    title: "Backend Development",
    des: "Creating powerful REST APIs using Node.js, Express.js, and MongoDB for full-stack apps.",
  },
  {
    id: 3,
    icon: <SiTailwindcss />,
    title: "Modern UI Design",
    des: "Designing clean, responsive interfaces using Tailwind CSS with a strong focus on user experience.",
  },
  {
    id: 4,
    icon: <MdOutlineSettingsEthernet />,
    title: "Context API",
    des: "Managing global state in React apps using Context API for better structure and reusability.",
  },
  {
    id: 5,
    icon: <SiFirebase />,
    title: "Authentication",
    des: "Implementing secure login systems using Firebase Auth and JWT for protected routes.",
  },
  {
    id: 6,
    icon: <FaCodeBranch />,
    title: "Version Control",
    des: "Using Git and GitHub for collaborative development, version control, and project deployment.",
  },
];

