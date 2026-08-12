import { FaDownload, FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import profile from "../assets/profile.png";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#0F172A] text-white flex items-center pt-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-purple-500 text-xl font-semibold mb-4">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Aman <span className="text-purple-500">Kumar</span>
          </h1>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-gray-300">
            Software Developer &
            <br />
            <span className="text-purple-500">Full Stack Engineer</span>
          </h2>

          <p className="mt-8 text-gray-400 text-lg leading-8 max-w-xl">
            Passionate Computer Science Engineer specializing in React.js,
            Python, Java, and MySQL. I love building responsive web
            applications, AI-powered solutions, and solving real-world problems
            through technology.
          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-10">
            <div className="flex gap-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl border border-purple-500 font-semibold"
              >
                View Resume
              </a>

              <a
                href="/resume.pdf"
                download="Aman_Kumar_Resume.pdf"
                className="bg-gradient-to-r from-purple-600 to-fuchsia-500 px-6 py-3 rounded-xl font-semibold"
              >
                Download Resume
              </a>
            </div>

            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer border border-purple-500 hover:bg-purple-600 transition-all duration-300 px-8 py-4 rounded-xl flex items-center gap-3 font-semibold"
            >
              <FaPlay />
              View Projects
            </Link>
          </div>
        </motion.div>

        {/* Right Section */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          {/* Glow */}

          <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-purple-600 rounded-full blur-[120px] opacity-30"></div>

          <div>
            <img
              src={profile}
              alt="Aman"
              className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-8 border-purple-600 shadow-2xl"
            />
          </div>

          {/* Floating Card */}

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="absolute bottom-4 right-0 bg-[#141E35] border border-purple-600 rounded-2xl px-6 py-4 shadow-xl"
          >
            <p className="text-gray-400 text-sm">Available for</p>

            <h3 className="text-purple-400 font-bold text-xl">
              New Projects 🚀
            </h3>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
