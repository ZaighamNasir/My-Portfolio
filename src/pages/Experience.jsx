export default function Experience() {
  const timeline = [
    {
      title: "Matriculation",
      year: "2019",
      details: "Completed my matriculation from Garrison Boys High School",
    },
    {
      title: "FSC",
      year: "2021",
      details: "Completed my FSC from Fazaia Intermediate College Lahore",
    },
    {
      title: "Bachelors",
      year: "2021 - 2025",
      details:
        "Completed my Bachelors in Computer Science from Lahore Garrison University",
    },
    {
      title: "Front-End Intern",
      year: "2025 - Present",
      details:
        "Working as a Front-End Developer Intern at Krytix Solutions",
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-24 bg-black text-white"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
        Experience & <span className="text-indigo-400">Education</span>
      </h2>

      <div className="relative w-full max-w-5xl">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700"></div>

        <div className="space-y-24">
          {timeline.map((item, index) => {
            const isLeft = index % 2 === 0; // odd (0,2) left | even (1,3) right

            return (
              <div key={index} className="flex items-center w-full">
                {/* Left Side */}
                <div className="w-1/2 flex justify-end pr-6">
                  {isLeft ? (
                    <div className="bg-gray-800/60 rounded-xl p-6 shadow-lg text-right max-w-sm">
                      <h3 className="text-2xl font-semibold text-indigo-400 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-lg text-gray-300">{item.details}</p>
                    </div>
                  ) : (
                    <p className="text-xl font-bold text-gray-300">
                      {item.year}
                    </p>
                  )}
                </div>

                {/* Dot */}
                <div className="relative w-6 h-6 bg-indigo-500 rounded-full border-4 border-black z-10"></div>

                {/* Right Side */}
                <div className="w-1/2 flex justify-start pl-6">
                  {!isLeft ? (
                    <div className="bg-gray-800/60 rounded-xl p-6 shadow-lg text-left max-w-sm">
                      <h3 className="text-2xl font-semibold text-indigo-400 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-lg text-gray-300">{item.details}</p>
                    </div>
                  ) : (
                    <p className="text-xl font-bold text-gray-300">
                      {item.year}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
