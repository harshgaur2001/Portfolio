import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="grid grid-cols-4 justify-between bg-[#101010] rounded overflow-hidden">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `uppercase font-semibold cursor-pointer lg:text-[15px] text-[12px] duration-300 transition-all ease-linear lg:px-[8px] lg:w-[120px] lg:py-[10px] px-3 py-3 text-center hover:bg-[#5b7553] ${
            isActive ? "bg-[#5b7553]" : "bg-[#101010]"
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) =>
          `uppercase font-semibold cursor-pointer lg:text-[15px] text-[12px] duration-300 transition-all ease-linear lg:px-[8px] lg:w-[120px] lg:py-[10px] px-3 py-3 text-center hover:bg-[#5b7553] ${
            isActive ? "bg-[#5b7553]" : "bg-[#101010]"
          }`
        }
      >
        Projects
      </NavLink>
      <NavLink
        to="/journey"
        className={({ isActive }) =>
          `uppercase font-semibold cursor-pointer lg:text-[15px] text-[12px] duration-300 transition-all ease-linear lg:px-[8px] lg:w-[120px] lg:py-[10px] px-3 py-3  text-center hover:bg-[#5b7553] ${
            isActive ? "bg-[#5b7553]" : "bg-[#101010]"
          }`
        }
      >
        Journey
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `uppercase font-semibold cursor-pointer lg:text-[15px] text-[12px] duration-300 transition-all ease-linear lg:px-[8px] lg:w-[120px] lg:py-[10px] px-3 py-3 text-center hover:bg-[#5b7553] ${
            isActive ? "bg-[#5b7553]" : "bg-[#101010]"
          }`
        }
      >
        Contact
      </NavLink>
    </div>
  );
}
