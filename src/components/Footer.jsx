import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-10 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left - Name & Tagline */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-white text-xl font-semibold">Harsh Gaur</h3>
          <p className="text-sm mt-1">MERN Stack Developer | Jodhpur, India</p>
        </div>

        {/* Middle - Social Icons */}
        <div className="flex gap-5 text-2xl">
          <Link
            to="https://github.com/harshgaur2001/"
            target="_blank"
            className="hover:text-white transition-all duration-300"
          >
            <FaGithub />
          </Link>
          <Link
            to="https://www.linkedin.com/in/harshgaur2001/"
            target="_blank"
            className="hover:text-[#0A66C2] transition-all duration-300"
          >
            <FaLinkedin />
          </Link>
          <Link
            to="mailto:harshgaur040@gmail.com"
            className="hover:text-orange-500 transition-all duration-300"
          >
            <FaEnvelope />
          </Link>
        </div>
      </div>

      {/* Bottom - Copyright */}
      <div className="text-center text-sm mt-6 text-gray-500">
        © {new Date().getFullYear()} Harsh Gaur. All rights reserved.
      </div>
    </footer>
  );
}
