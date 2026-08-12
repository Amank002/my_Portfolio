import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import icon from "../assets/icon.png";

function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#0A1022] text-white py-10 border-t border-purple-800">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
        <div>
          <h2>
            <img src={icon} alt="icon logo" className="w-12 h-12" />
          </h2>

          <p className="text-gray-400 mt-2">
            Full Stack Developer | Python Developer
          </p>
        </div>

        <div className="flex gap-5 mt-6 md:mt-0">
          <a
            href="https://github.com/Amank002"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-400"
          >
            <FaGithub size={26} />
          </a>

          <a
            href="https://www.linkedin.com/in/aman-kumar-7b37b7340"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-400"
          >
            <FaLinkedin size={26} />
          </a>

          <button
            onClick={scrollTop}
            className="bg-purple-600 p-3 rounded-full hover:bg-purple-700"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>

      <p className="text-center text-gray-500 mt-10">
        © 2026 Aman Kumar. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
