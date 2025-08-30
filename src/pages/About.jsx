export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 md:px-20 py-16 bg-black text-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl">
        {/* Left: Image */}
        <div className="flex justify-center">
          <img
            src="/about.png"   
            alt="Zaigham"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg border-4 border-indigo-500"
          />
        </div>

        {/* Right: Introduction */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About <span className="text-indigo-400">Me</span>
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            I am a <span className="text-indigo-400">detail-oriented and creative Web Developer</span> 
            with a strong foundation in both front-end and back-end technologies. 
            Proficient in <span className="text-indigo-400">HTML, CSS, JavaScript</span>, and modern frameworks 
            such as <span className="text-indigo-400">Bootstrap</span> and <span className="text-indigo-400">React</span>.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Skilled in developing <span className="text-indigo-400">responsive, interactive, and user-friendly</span> 
            web applications that align with user needs and business goals. 
            Experienced in integrating <span className="text-indigo-400">SQL databases</span>, building structured 
            UI components, and applying clean, maintainable code practices.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            Passionate about <span className="text-indigo-400">UI/UX design</span>, performance optimization, 
            and staying updated with the latest industry trends. Demonstrated ability to manage full project lifecycles, 
            work both independently and collaboratively, and deliver high-quality solutions within deadlines. 
            <span className="text-indigo-400"> Committed to continuous learning and professional growth.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
