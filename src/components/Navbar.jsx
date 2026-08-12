import { Link } from "react-scroll";
import icon from "../assets/icon.png";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#111827]/90 backdrop-blur-lg border-b border-purple-900">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">
        <h1>
          <img src={icon} alt="icon logo" className="w-12 h-12" />
        </h1>

        <ul className="hidden md:flex gap-10 text-lg">
          <li>
            <button>
              <Link to="home" smooth duration={500}>
                Home
              </Link>
            </button>
          </li>

          <li>
            <button>
              <Link to="projects" smooth duration={500}>
                Projects
              </Link>
            </button>
          </li>

          <li>
            <button>
              <Link to="skills" smooth duration={500}>
                Skills
              </Link>
            </button>
          </li>

          <li>
            <button>
              <Link to="certificates" smooth duration={500}>
                Certificates
              </Link>
            </button>
          </li>

          <li>
            <button>
              <Link to="experience" smooth duration={500}>
                Experience
              </Link>
            </button>
          </li>
        </ul>

        <button>
          {" "}
          <Link
            to="contact"
            smooth
            duration={500}
            className="bg-linear-to-r from-purple-600 to-fuchsia-500 px-6 py-3 rounded-xl font-semibold hover:scale-105 duration-300"
          >
            Contact Me
          </Link>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
