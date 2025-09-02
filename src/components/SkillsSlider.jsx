// components/SkillsSlider.jsx
import React from "react";
import Slider from "react-slick";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaSass,
  FaGitAlt,
  FaReact,
} from "react-icons/fa";
import { SiTailwindcss, SiMui, SiGithub } from "react-icons/si";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const skills = [
  { icon: <FaHtml5 size={50} className="text-[#A3B9CC]" />, name: "HTML5" },
  { icon: <FaCss3Alt size={50} className="text-[#A3B9CC]" />, name: "CSS3" },
  { icon: <FaJs size={50} className="text-[#A3B9CC]" />, name: "JavaScript (ES6)" },
  { icon: <FaBootstrap size={50} className="text-[#A3B9CC]" />, name: "Bootstrap" },
  { icon: <SiTailwindcss size={50} className="text-[#A3B9CC]" />, name: "Tailwind" },
  { icon: <SiMui size={50} className="text-[#A3B9CC]" />, name: "Material UI" },
  { icon: <FaSass size={50} className="text-[#A3B9CC]" />, name: "SASS" },
  { icon: <FaGitAlt size={50} className="text-[#A3B9CC]" />, name: "Git" },
  { icon: <SiGithub size={50} className="text-[#A3B9CC]" />, name: "GitHub" },
  { icon: <FaReact size={50} className="text-[#A3B9CC]" />, name: "React" },
];

export default function SkillsSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false, 
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="px-6 md:px-16 py-12">
      <h2 className="text-3xl font-bold text-[#0b0e17] mb-8"> Skills</h2>
      <Slider {...settings}>
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            {skill.icon}
            <p className="mt-3 text-[#0b0e17] font-semibold">{skill.name}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
}
