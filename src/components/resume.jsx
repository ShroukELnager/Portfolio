// components/ExperienceTimeline.jsx
import React from "react";

const experienceItems = [
  {
    title: "EDUCATION",
    date: "OCT. 2018 - JUN. 2023",
    location: "Computer Engineering",
    responsibilities: [
      "B.Sc. degree in Computer Engineering",
      "Grade: Very Good with Honors (Rank: 8th)",
      "Graduation Project: Hybrid Robotic Shopping System",
      "Graduation Project Grade: Excellent",
    ],
  },
  {
    title: "INTERNSHIP",
    date: "Nov 2024 - May 2025",
    location:
      "Frontend and Cross Mobile Platform, Intensive Training Program (ITP), Information Technology Institute (ITI), Ministry of Communication and Information Technology (MCIT), Mansoura",
    responsibilities: ["4-month Program, Intensive Training"],
  },
  {
    title: "VOLUNTEERING",
    date: "",
    location: "",
    responsibilities: ["Member in Summation Team"],
  },
];

const ExperienceTimeline = () => {
  return (
    <section className="px-4 md:px-20 py-12" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-[#0b0e17] mb-2">Resume</h2>

      <h3 className="text-xl font-bold text-gray-600 mb-5">Education</h3>

      <div className="relative border-l-[2px] border-blue-500 ml-4">
        {experienceItems.map((item, index) => (
          <div key={index} className="relative pl-8 pb-12">
            {/* Timeline dot */}
            <div className="absolute left-0 w-4 h-4 border-[2.5px] border-blue-500 bg-white rounded-full transform -translate-x-1/2"></div>

            <h3 className="text-sm text-gray-800 font-semibold uppercase">
              {item.title}
            </h3>
            {item.date && (
              <p className="text-sm font-bold mt-1">{item.date}</p>
            )}
            {item.location && (
              <p className="italic text-sm text-gray-600 mb-2">
                {item.location}
              </p>
            )}
            <ul className="list-disc pl-5 text-sm text-gray-800 space-y-1">
              {item.responsibilities.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceTimeline;
