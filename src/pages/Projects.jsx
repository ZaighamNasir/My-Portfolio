import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Amazon Clone",
      image: "/amazon.png",
      github: "https://github.com/ZaighamNasir/Amazon-Clone",
      live: "https://amazon-clone-drab-psi-36.vercel.app",
      details:
        "Built a fully responsive static Amazon clone website using HTML and CSS, closely replicating the structure and visual design of the original Amazon homepage. Included header, product grid layouts, promotional banners, and a detailed footer. Focused on pixel-perfect accuracy, semantic HTML, and modular CSS.",
    },
    {
      title: "Car Rental Website",
      image: "/car-rental.png",
      github: "https://github.com/ZaighamNasir/Car-Rental-Website-Front-End",
      live: "https://car-rental-website-front-end.vercel.app",
      details:
        "Developed the frontend of a responsive car rental website using HTML, CSS, and JavaScript. Implemented interactive components, form validations, and ensured mobile responsiveness. Focused on UI/UX and performance optimization.",
    },
    {
      title: "Library Management System",
      image: "/library.png",
      details:
        "Built a Library Management System using MySQL with 8 normalized relational tables. Wrote and executed 500+ SQL queries, covering joins, subqueries, stored procedures, and triggers. Enhanced database design and query optimization skills.",
    },
    {
      title: "Hotel Management Website",
      image: "/hotel.png",
      github: "https://github.com/ZaighamNasir/Hotel-Booking-Front-End",
      live: "https://hotel-booking-front-end-six.vercel.app",
      details:
        "Built a Library Management System using MySQL with 8 normalized relational tables. Wrote and executed 500+ SQL queries, covering joins, subqueries, stored procedures, and triggers. Enhanced database design and query optimization skills.",
    },
    {
      title: "Web Authorization App",
      image: "/web-aut.png",
      github: "https://github.com/ZaighamNasir/Auth-api-integration-Part-two-",
      live: "https://auth-api-integration-part-two.vercel.app",
      details:
        "Built a React-based authentication system with external API integration. Features JWT login, secure token storage, password reset via OTP, and a personalized dashboard. Designed with modern UI/UX, gradient backgrounds, and responsive layouts.",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-24 bg-black text-white"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
        My <span className="text-indigo-400">Projects</span>
      </h2>

      <div className="space-y-24 max-w-6xl w-full">
        {projects.map((project, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-12 ${
                !isLeft ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image with hover zoom */}
              <motion.div
                className="w-full md:w-1/2"
                initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl shadow-lg w-full object-cover transform transition-transform duration-500 hover:scale-105"
                />
              </motion.div>

              {/* Details */}
              <motion.div
                className="w-full md:w-1/2 bg-gray-800/60 p-6 rounded-xl shadow-lg"
                initial={{ opacity: 0, x: isLeft ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold text-indigo-400 mb-4">
                  {project.title}
                </h3>
                <p className="text-lg text-gray-300 mb-6">{project.details}</p>

                <div className="flex gap-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-indigo-400 transition"
                  >
                    <Github size={22} /> <span>GitHub</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-indigo-400 transition"
                  >
                    <ExternalLink size={22} /> <span>Live</span>
                  </a>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
