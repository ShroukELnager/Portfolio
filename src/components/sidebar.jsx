import { useState } from "react";
import img2 from "../assets/img1.jpg";
import { RiHome3Line } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { FaLinkedinIn, FaRegFileAlt } from "react-icons/fa";
import { BsImages } from "react-icons/bs";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

export default function SideBar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  const links = [
    { id: "home", label: "Home", icon: RiHome3Line },
    { id: "Skills", label: "Skills", icon: CiUser },
    { id: "resume", label: "Resume", icon: FaRegFileAlt },
    { id: "portfolio", label: "Portfolio", icon: BsImages },
    { id: "services", label: "Services", icon: MdMiscellaneousServices },
  ];

  return (
    <>
      {/* Hamburger Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 rounded-lg text-white"
        onClick={() => setOpen(!open)}
      >
        {open ? <HiX size={24} /> : <HiMenu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px] bg-[#0b0e17] text-white py-8 transform transition-transform duration-300 z-40 
          ${open ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:static`}
      >
        {/* Profile Image */}
        <div className="flex flex-col items-center">
          <img
            src={img2}
            alt="profile"
            className="w-28 h-28 rounded-full border-4 border-gray-700 object-cover"
          />
          <h2 className="mt-4 text-xl font-bold">Shrouk Kamel</h2>
        </div>

        {/* Social Icons */}
        <div className="flex gap-3 mt-4 justify-center">
          <a className="p-3 bg-gray-800 rounded-full hover:bg-gray-600" href="mailto:shrouk.kamel123@gmail.com" target="_blank">
            <FaGoogle size={18} />
          </a>
          <a className="p-3 bg-gray-800 rounded-full hover:bg-gray-600" href="https://www.linkedin.com/in/shrouk-kamel/">
            <FaLinkedinIn size={18} />
          </a>
          <a className="p-3 bg-gray-800 rounded-full hover:bg-gray-600" href="https://github.com/ShroukELnager">
            <FaGithub size={18} />
          </a>
        </div>

        {/* Navigation */}
        <nav className="mt-10 w-full px-6 space-y-9">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = active === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => {
                  setActive(link.id);
                  setOpen(false); // Close sidebar on mobile
                }}
                className={`group flex items-center gap-3 font-medium transition-colors duration-200 
                  ${isActive ? "text-white" : "text-[#8C9096] hover:text-white"}`}
              >
                <Icon
                  size={20}
                  className={`transition-colors duration-200 
                    ${isActive ? "text-blue-400" : "text-[#8C9096] group-hover:text-blue-400"}`}
                />
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </>
  );
}
