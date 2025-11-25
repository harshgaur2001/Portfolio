import { FaBookOpen, FaBriefcase } from "react-icons/fa";

const eduSteps = [
  {
    year: "2022 - 2025",
    title: "Master of Computer Applications",
    description:
      "Focused on advanced concepts in software development, web technologies, data structures, and modern frameworks. Built several academic and personal projects that strengthened my understanding of full-stack development.",
  },
  {
    year: "2019 - 2022",
    title: "Bachelor of Computer Applications",
    description:
      "Developed a strong foundation in programming, databases, and web development. Gained hands-on experience through coursework, mini-projects, and practical assignments that sparked my interest in building real-world applications.",
  },
];

const expSteps = [
  {
    year: "Jun 2022 - Sep 2025",
    title: "Web Developer",
    description:
      "I have more than 3 years of experience as a Web Developer at Futurio Solutions, where I worked on building responsive and scalable websites, developing custom WordPress plugins, and integrating APIs. My technical skills include PHP, JavaScript, jQuery, WordPress, and SQL. I have also handled testing, debugging, and website optimization to ensure performance and security.",
  },
];

export default function Journey() {
  return (
    <div className="min-h-screen overflow-hidden bg-black px-6 py-20 text-white flex flex-col items-center">
      <h1 className="text-5xl font-extrabold mb-16 text-center max-w-4xl">
        Experience Journey
      </h1>

      <div className="relative border-l-4 border-[#5b7553AA] w-full max-w-4xl">
        {expSteps.map(({ year, title, description }, index) => (
          <div
            key={index}
            className="mb-16 ml-10 relative group cursor-default transition-shadow hover:shadow-lg p-6 rounded-lg bg-gray-900/20"
          >
            {/* Circle */}
            <div className="absolute -left-14 top-7 text-[#5b7553] w-8 h-8 text-[28px]">
              <FaBriefcase />
            </div>

            <p className="text-[#5b7553] font-semibold text-[22px] tracking-[3px] mb-1">
              {year}
            </p>
            <h3 className="text-2xl font-semibold mb-3">{title}</h3>
            <p className="text-gray-300 leading-relaxed">{description}</p>
          </div>
        ))}
      </div>

      <h1 className="text-5xl font-extrabold my-16 text-center max-w-4xl">
        Educational Journey
      </h1>

      <div className="relative border-l-4 border-[#5b7553AA] w-full max-w-4xl">
        {eduSteps.map(({ year, title, description }, index) => (
          <div
            key={index}
            className="mb-16 ml-10 relative group cursor-default transition-shadow hover:shadow-lg p-6 rounded-lg bg-gray-900/20"
          >
            {/* Circle */}
            <div className="absolute -left-14 top-7 text-[#5b7553] w-8 h-8 text-[28px]">
              <FaBookOpen />
            </div>

            <p className="text-[#5b7553] font-semibold text-[22px] tracking-[3px] mb-1">
              {year}
            </p>
            <h3 className="text-2xl font-semibold mb-3">{title}</h3>
            <p className="text-gray-300 leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
