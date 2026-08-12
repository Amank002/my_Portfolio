import { FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  return (
    <section id="projects" className="bg-[#0F172A] text-white py-28">
      <div className="max-w-7xl mx-auto px-8">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold">
            Featured <span className="text-purple-500">Projects</span>
          </h2>

          <p className="text-gray-400 text-xl mt-5">
            Innovative solutions built with modern technologies
          </p>
        </div>

        {/* Card */}

        <div className="bg-[#141E35] border border-purple-700 rounded-3xl p-10 hover:shadow-[0_0_40px_rgba(168,85,247,.35)] duration-300">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-4xl font-bold">
                Airline Reservation & Database Management System
              </h3>

              <p className="text-purple-500 mt-3">
                March 2024 – September 2024
              </p>
            </div>

            <FaExternalLinkAlt
              size={28}
              className="text-purple-500 cursor-pointer"
            />
          </div>

          <p className="text-gray-300 text-xl leading-9 mt-10">
            Engineered a full-stack Airline Reservation System optimizing
            booking workflow, authentication, passenger management and database
            operations.
          </p>

          {/* Features */}

          <div className="grid md:grid-cols-2 gap-10 mt-12">
            <div>
              <h4 className="text-2xl font-semibold mb-5">Key Features</h4>

              <ul className="space-y-4 text-gray-300">
                <li>• User authentication</li>

                <li>• Secure login system</li>

                <li>• Session management</li>
              </ul>
            </div>

            <div>
              <h4 className="text-2xl font-semibold mb-5">More Features</h4>

              <ul className="space-y-4 text-gray-300">
                <li>• Ticket booking</li>

                <li>• Responsive UI</li>

                <li>• Admin dashboard</li>
              </ul>
            </div>
          </div>

          {/* Technologies */}

          <div className="mt-14">
            <h4 className="text-2xl font-semibold mb-5">Technologies Used</h4>

            <div className="flex flex-wrap gap-4">
              {["HTML", "CSS", "JavaScript", "React", "MySQL", "PHP"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="bg-purple-900 px-5 py-2 rounded-full text-purple-300"
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Highlights */}

          <div className="mt-14">
            <h4 className="text-2xl font-semibold mb-5">Project Highlights</h4>

            <ul className="space-y-5 text-gray-300">
              <li>→ Booking and cancellation system</li>

              <li>→ Secure login & session handling</li>

              <li>→ Optimized database queries</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
