import { Link } from "react-router-dom";
export default function ProjectCard({ carddata }) {
  const { id, title, description, techStack, github, liveDemo } = carddata;
  return (
    <div
      className={`bg-[#1c1c1c] rounded-lg shadow-lg p-6 mb-10 hover:shadow-[#5b7553] transition-shadow duration-300 md:max-w-[90%] ${
        id % 2 === 0 ? "md:mr-[80px]" : "md:ml-[80px]"
      }`}
    >
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      <p className="text-gray-300 mb-4">{description}</p>
      <h3 className="font-semibold mb-2 text-[#5b7553]">Tech Stack:</h3>
      <ul className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech, i) => (
          <li
            key={i}
            className="bg-[#5b7553] bg-opacity-20 text-white text-sm px-3 py-1 rounded"
          >
            {tech}
          </li>
        ))}
      </ul>
      <div className="flex gap-4">
        {github ? (
          <Link
            to={github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-[#5b7553] hover:bg-[#5b7553] hover:text-white rounded font-semibold transition"
          >
            GitHub
          </Link>
        ) : (
          ""
        )}

        <Link
          to={liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border border-[#5b7553] hover:bg-[#5b7553] hover:text-white rounded font-semibold transition"
        >
          Live Demo
        </Link>
      </div>
    </div>
  );
}
