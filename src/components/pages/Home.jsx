import { Link } from "react-router-dom";

export default function Home() {
  const techStack = [
    {
      name: "HTML5",
      icon: "/src/assets/logos/html5.svg",
    },
    {
      name: "CSS3",
      icon: "/src/assets/logos/css3.svg",
    },
    {
      name: "JavaScript",
      icon: "/src/assets/logos/js.png",
    },
    {
      name: "WordPress",
      icon: "/src/assets/logos/wordpress.png",
    },
    {
      name: "Elementor",
      icon: "/src/assets/logos/elementor.webp",
    },
    {
      name: "jQuery",
      icon: "/src/assets/logos/jQuery.png",
    },
    {
      name: "SQL",
      icon: "/src/assets/logos/sql.svg",
    },
    {
      name: "PHP",
      icon: "/src/assets/logos/php.svg",
    },
    {
      name: "Python",
      icon: "/src/assets/logos/python.png",
    },
    {
      name: "Tailwind CSS",
      icon: "/src/assets/logos/tailwind.png",
    },
    {
      name: "React.js",
      icon: "/src/assets/logos/react.svg",
    },
    {
      name: "Node.js",
      icon: "/src/assets/logos/nodejs.svg",
    },
    {
      name: "Express.js",
      icon: "/src/assets/logos/expressjs.png",
    },
    {
      name: "REST API",
      icon: "/src/assets/logos/api.png",
    },
    {
      name: "Postman",
      icon: "/src/assets/logos/postman.webp",
    },
    {
      name: "MongoDB",
      icon: "/src/assets/logos/mongodb.svg",
    },
    {
      name: "Mongoose",
      icon: "/src/assets/logos/mongoose.webp",
    },
    {
      name: "Redux Toolkit",
      icon: "/src/assets/logos/redux-toolkit.svg",
    },
    {
      name: "Git",
      icon: "/src/assets/logos/git.png",
    },
    {
      name: "GitHub",
      icon: "/src/assets/logos/github.webp",
    },
    {
      name: "Next.js",
      icon: "/src/assets/logos/nextjs.svg",
    },
    {
      name: "Vercel",
      icon: "/src/assets/logos/Vercel.png",
    },
    {
      name: "Render",
      icon: "/src/assets/logos/Render.png",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white lg:py-18 lg:pt-35 md:px-24 py-5 flex flex-col justify-center lg:gap-18 gap-10">
      {/* ===== INTRODUCTION SECTION ===== */}
      <section className="text-center lg:space-y-12 space-y-4 px-2">
        <h1 className="text-5xl mx-auto md:text-7xl font-extrabold leading-tight">
          Hi, I'm <span className="text-[#5b7553]">Harsh Gaur</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300">
          Full-Stack Developer (MERN) | WordPress Professional
        </p>
        <p className="text-md lg:text-center md:text-lg text-gray-400 leading-relaxed">
          I build performant, scalable, and responsive web applications that
          provide seamless user experiences. With 3+ years of experience in
          WordPress development, I bring strong expertise in crafting custom,
          efficient digital solutions. Passionate about turning ideas into
          reality through code, I'm constantly exploring new technologies and
          best practices.
        </p>
        <div className="mt-6 flex justify-center gap-8 flex-wrap">
          <Link
            to="https://github.com/harshgaur2001/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#5b7553] text-[#5b7553] px-10 py-3 rounded-full hover:bg-[#5b7553] text-white hover:rounded-3xl transition-all duration-300 font-semibold"
          >
            Visit GitHub
          </Link>
          <Link
            download
            to="/CV-Harsh-Gaur.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#5b7553] text-[#5b7553] px-10 py-3 rounded-full hover:bg-[#5b7553] text-white hover:rounded-3xl transition-all duration-300 font-semibold"
          >
            Download Resume
          </Link>
        </div>
      </section>

      {/* ===== TECH STACK SECTION ===== */}
      <section className="px-2">
        <h2 className="text-4xl border-b-2 border-[#5b7553] rounded-b-[50%] pb-5 font-semibold text-[#5b7553] mb-10 text-center tracking-wider">
          Technical Skills & Tools
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 place-items-center text-center">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-full max-w-[140px] gap-3  duration-200 rounded-[15px] p-4"
            >
              <div className="w-24 h-24 bg-white/5 border border-gray-700 rounded-2xl flex items-center justify-center shadow-sm hover:animate-pulse  hover:shadow-[#5b7553] transition-shadow duration-300">
                <img
                  className="w-14 h-14 object-contain"
                  src={tech.icon}
                  alt={tech.name}
                />
              </div>
              <span className="text-sm md:text-[15px] tracking-[1.5px]">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CAREER GOAL SECTION ===== */}
      <section className="text-center px-4 space-y-6">
        <h2 className="text-4xl border-b-2 border-[#5b7553] rounded-b-[50%] pb-5 font-semibold text-[#5b7553] mb-8 tracking-wider">
          Career Aspirations
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Currently seeking full-time roles in frontend or full-stack
          development. I aim to collaborate with dynamic teams to build
          innovative web solutions that make a positive impact.
        </p>
        <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
          Always eager to learn, grow, and contribute to projects where my
          skills and creativity can shine. Let's create something great
          together!
        </p>
      </section>
    </main>
  );
}
