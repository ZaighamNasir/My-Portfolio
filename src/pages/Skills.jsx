import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "HTML", level: 99 },
    { name: "CSS", level: 95 },
    { name: "JavaScript", level: 95 },
    { name: "React", level: 90 },
    { name: "Tailwind", level: 90 },
    { name: "Bootstrap", level: 70 },
    { name: "SQL", level: 90 },
    { name: "RESTful APIs", level: 80 },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-24 bg-black text-white"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
        My <span className="text-indigo-400">Skills</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl w-full">
        {skills.map((skill, index) => (
          <SkillBar key={index} name={skill.name} level={skill.level} />
        ))}
      </div>
    </section>
  );
}

function SkillBar({ name, level }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = level;
    const duration = 1500; // 1.5s
    const increment = end / (duration / 20);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 20);

    return () => clearInterval(counter);
  }, [level]);

  return (
    <div>
      {/* Skill name on top */}
      <div className="flex justify-between mb-2 text-sm">
        <span className="font-medium text-indigo-400">{name}</span>
        <span className="text-gray-300">{count}%</span>
      </div>

      {/* Percentage bar with neon glow */}
      <motion.div
        className="h-4 bg-gray-700 rounded-lg overflow-hidden"
        initial={{ width: "0%" }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="h-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.8)] animate-pulse"></div>
      </motion.div>
    </div>
  );
}
