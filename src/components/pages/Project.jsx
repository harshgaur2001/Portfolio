import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
const wp_projects = [
  {
    id: 1,
    title: "GoPray Plugin",
    description:
      "Developed a custom WordPress plugin based on client requirements, allowing users to submit prayer requests, which are displayed on a prayer wall after admin approval. Integrated features like user interactions (likes/comments), admin moderation, and performance optimization.",
    techStack: ["WordPress", "PHP", "JavaScript", "jQuery", "MySQL", "AJAX"],
    liveDemo: "https://wordpress.org/plugins/gopray/",
  },
  {
    id: 2,
    title: "BrewScanner.ae",
    description:
      "Implemented a PHP cURL function to fetch product prices and availability from various ecommerce sites. This functionality enables users to compare prices across multiple platforms and purchase products at the best available price.",
    techStack: ["PHP", "cURL", "WordPress", "WooCommerce", "REST API", "JSON"],
    liveDemo: "https://brewscanner.ae/",
  },
  {
    id: 3,
    title: "Dubai-Time.ae",
    description:
      "Developed a yacht and activity booking system with custom fields to capture all necessary user details. Integrated a streamlined checkout process, calendar-based availability tracking, and custom pricing rules.",
    techStack: [
      "WordPress",
      "PHP",
      "WooCommerce",
      "JavaScript",
      "jQuery",
      "MySQL",
    ],
    liveDemo: "https://dubai-time.ae/",
  },
  {
    id: 4,
    title: "HouseManage.co.uk ",
    description:
      "Designed and developed a complete website using Elementor, following a Figma-based UI/UX reference. Implemented custom styling, responsive layouts, and dynamic content management to enhance user experience.",
    techStack: ["WordPress", "Elementor", "PHP", "CSS", "JavaScript", "Figma"],
    liveDemo: "https://housemanage.co.uk/",
  },
  {
    id: 5,
    title: "AktivMiljo.se",
    description:
      "Created a complete WooCommerce-based e-commerce website with advanced product handling, category management, and custom checkout flow as per the client’s business requirements.",
    techStack: [
      "WordPress",
      "WooCommerce",
      "PHP",
      "JavaScript",
      "ACF",
      "Payment Gateway Integration",
    ],
    liveDemo: "https://www.aktivmiljo.se/",
  },
];
const projects = [
  {
    id: 8,
    title: "User Management in NextJs",
    description:
      "A complete User Authentication System built with Next.js 16, featuring secure signup, login, logout, profile management, password reset, and email verification — using JWT, bcrypt, Nodemailer, and MongoDB.",
    techStack: [
      "Next.js",
      "MongoDB + Mongoose",
      "JWT",
      "Bcryptjs",
      "Nodemailer",
      "Tailwind",
      "Axios",
      "React",
      "Vercel",
    ],
    github: "https://github.com/harshgaur2001/NextJs-User-Management-System",
    liveDemo: "https://next-js-user-management-system-six.vercel.app/",
  },
  {
    id: 9,
    title: "Todo List with Context API",
    description:
      "A full-stack MERN Todo App with user authentication, JWT-based login system, Context API state management, and user-specific todos with add, edit, delete, and complete features.",
    techStack: [
      "React",
      "MongoDB + Mongoose",
      "JWT",
      "Bcryptjs",
      "Express",
      "Tailwind",
      "Axios",
      "Context API",
      "Vercel",
    ],
    github:
      "https://github.com/harshgaur2001/MERN-Authentication-Todo-App-React-Context-API",
    liveDemo: "https://mern-authentication-todo-app-react-rho.vercel.app/",
  },
  {
    id: 10,
    title: "Address Book with Redux Toolkit",
    description:
      "A complete Address Book web application built using React, Redux Toolkit, Node.js, Express, and MongoDB. Includes JWT authentication, user-specific address management, login/signup, change password, and CRUD operations for addresses.",
    techStack: [
      "React",
      "MongoDB + Mongoose",
      "JWT",
      "Bcryptjs",
      "Express",
      "Tailwind",
      "Axios",
      "Redux Toolkit",
      "Vercel",
    ],
    github:
      "https://github.com/harshgaur2001/MERN-Address-Book-App-React-Redux-Toolkit-JWT-Auth",
    liveDemo: "https://mern-address-book-app-react-redux-t-ashy.vercel.app/",
  },
  {
    id: 11,
    title: "Real Time Currency Converter in React",
    description:
      "Real time currency converter app developed with React framework.",
    techStack: ["React", "Tailwind", "Fetch", "Vercel"],
    github: "https://github.com/harshgaur2001/real-time-currency-converter",
    liveDemo: "https://real-time-currency-converter-by-harsh-gaur.vercel.app/",
  },
  {
    id: 12,
    title: "Blog Manager in React",
    description: "Created blog manager with Appwrite and React framework.",
    techStack: ["React", "Tailwind", "Appwrite", "Redux", "Router", "Vercel"],
    github: "https://github.com/harshgaur2001/react-appwrite-blog-manager",
    liveDemo: "https://react-appwrite-blog-manager.vercel.app/",
  },
];

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 text-white">
      <h1 className="text-4xl font-bold mb-10 text-center">
        Showcasing My Development Projects
      </h1>

      <h2 className="text-2xl font-bold mb-10">Projects in MERN</h2>
      {projects.map((carddata) => (
        <ProjectCard key={carddata.id} carddata={carddata} />
      ))}

      <hr />

      <h2 className="text-2xl font-bold mb-10 mt-10">Projects in WordPress</h2>
      {wp_projects.map((carddata) => (
        <ProjectCard key={carddata.id} carddata={carddata} />
      ))}
    </div>
  );
}
