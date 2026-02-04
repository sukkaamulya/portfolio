import React from "react";

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Full Stack Developer",
    company: "McKinsey & Company",
    location: "WA, USA",
    duration: "Feb 2025 – Present",
    description: [
    ],
  },
  {
    role: "Software Engineer",
    company: "Ten By Three",
    location: "USA",
    duration: "Jul 2024 – Dec 2024",
    description: [
    ],
  },
  {
    role: "Software Engineer",
    company: "Saint Louis University (ITS Department)",
    location: "USA",
    duration: "Aug 2023 – May 2024",
    description: [
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Capgemini",
    location: "India",
    duration: "Jul 2021 – Dec 2022",
    description: [
    ],
  },
];

const Experience: React.FC = () => {
  return (

    <section
  id="experience"
  className="section border-t"
  style={{
    backgroundColor: "var(--purple-800)",
    borderColor: "var(--primary)",
  }}
>
        <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="p-6 bg-purple-800 shadow-purple-800 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-white-700 font-medium">{exp.company} | {exp.location}</p>
              <p className="text-purple-300 italic mb-3">{exp.duration}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-300">

                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
