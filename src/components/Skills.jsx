import { FaCode, FaDatabase, FaTools } from "react-icons/fa";

function Skills() {
  return (
    <section id="skills" className="bg-[#0F172A] text-white py-28">
      <div className="max-w-7xl mx-auto px-8">
        {/* Heading */}

        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold">
            Skills & <span className="text-purple-500">Expertise</span>
          </h2>

          <p className="text-gray-400 text-xl mt-4">
            Technologies and tools I work with
          </p>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-8">
          {/* Programming */}

          <div className="bg-[#141E35] border border-purple-700 rounded-3xl p-8 hover:shadow-[0_0_35px_rgba(168,85,247,.35)] duration-300">
            <div className="bg-purple-900 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
              <FaCode className="text-purple-400 text-3xl" />
            </div>

            <h3 className="text-3xl font-bold mb-6">Programming</h3>

            <ul className="space-y-4 text-gray-300 text-lg">
              <li>• Python</li>

              <li>• JavaScript</li>

              <li>• HTML5</li>

              <li>• CSS3</li>

              <li>• React.js</li>

              <li>• Node.js</li>

              <li>• Django</li>
            </ul>
          </div>

          {/* Database */}

          <div className="bg-[#141E35] border border-purple-700 rounded-3xl p-8 hover:shadow-[0_0_35px_rgba(168,85,247,.35)] duration-300">
            <div className="bg-purple-900 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
              <FaDatabase className="text-purple-400 text-3xl" />
            </div>

            <h3 className="text-3xl font-bold mb-6">Database</h3>

            <ul className="space-y-4 text-gray-300 text-lg">
              <li>• MySQL</li>

              <li>• REST APIs</li>
            </ul>
          </div>

          {/* Tools */}

          <div className="bg-[#141E35] border border-purple-700 rounded-3xl p-8 hover:shadow-[0_0_35px_rgba(168,85,247,.35)] duration-300">
            <div className="bg-purple-900 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
              <FaTools className="text-purple-400 text-3xl" />
            </div>

            <h3 className="text-3xl font-bold mb-6">Tools & Technologies</h3>

            <ul className="space-y-4 text-gray-300 text-lg">
              <li>• Git</li>

              <li>• GitHub</li>

              <li>• VS Code</li>

              <li>• PyCharm</li>

              <li>• MS Office</li>

              <li>• MS Excel</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
