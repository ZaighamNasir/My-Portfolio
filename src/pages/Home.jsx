import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export default function Home() {
  const floatingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: [0, -10, 0],
      transition: {
        delay: i * 0.2,
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
      },
    }),
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-black text-white flex flex-col justify-between text-center scroll-smooth"
      style={{
        backgroundImage: "url('/portfolio.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Centered Content */}
      <motion.div
        className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 translate-y-10"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.6 }} // triggers only once when 60% visible
      >
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Hi, I’m <span className="text-indigo-400">Zaigham</span>
        </h1>

        <h2 className="mt-2 text-xl md:text-2xl text-gray-300">
          <Typewriter
            words={["Frontend Developer"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          I build clean, responsive front-end experiences.
        </p>

        <motion.a
          href="#projects"
          className="mt-6 inline-block px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-full font-medium transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work
        </motion.a>
      </motion.div>

      {/* Tech Stack at Bottom */}
      <motion.div
        className="relative z-10 mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <h3 className="text-xl font-semibold mb-6 text-gray-300 tracking-wide">
          Tech Stack
        </h3>
        <div className="flex flex-wrap justify-center gap-8 text-5xl">
          {[
            { Icon: FaHtml5, color: "text-orange-500", name: "HTML5" },
            { Icon: FaCss3Alt, color: "text-blue-500", name: "CSS3" },
            { Icon: FaJs, color: "text-yellow-400", name: "JavaScript" },
            { Icon: FaReact, color: "text-cyan-400", name: "React" },
            { Icon: SiTailwindcss, color: "text-sky-400", name: "Tailwind CSS" },
            { Icon: FaBootstrap, color: "text-purple-500", name: "Bootstrap" },
          ].map(({ Icon, color, name }, i) => (
            <motion.div
              key={name}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={floatingVariants}
              className={color}
              title={name}
            >
              <Icon />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
