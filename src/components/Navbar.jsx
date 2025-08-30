export default function Navbar() {
  const linksLeft = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
  ];

  const linksRight = [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full py-4 flex justify-center items-center z-50 text-white bg-transparent">
      <div className="flex items-center space-x-10">
        {/* Left Links */}
        <ul className="flex space-x-6">
          {linksLeft.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-indigo-400 transition">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Center Name */}
        <h1 className="text-2xl md:text-3xl font-extrabold px-6 tracking-wide">
          Zaigham <span className="text-indigo-400">Nasir</span>
        </h1>

        {/* Right Links */}
        <ul className="flex space-x-6">
          {linksRight.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-indigo-400 transition">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
