import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

function Experience() {
  const experience = [
    {
      title: "Web Development Intern",
      company: "Cognifyz Technologies",
      duration: "April 2025 - May 2025",
      description: [
        "Developed responsive web pages using HTML, CSS and JavaScript.",
        "Built reusable React.js components.",
        "Improved website performance and user experience.",
        "Collaborated with mentors on real-world development tasks.",
      ],
    },
  ];

  const education = [
    {
      degree: "B.E. Computer Science & Engineering",
      institute: "Visvesvaraya Technological University",
      duration: "2022 - 2026",
      grade: "CGPA: 7.81",
    },
    {
      degree: "Intermediate (12th)",
      institute: "Bihar School Examination Board",
      duration: "2020 - 2022",
      grade: "2nd Division",
    },
    {
      degree: "Matriculation (10th)",
      institute: "Bihar School Examination Board",
      duration: "2019 - 2020",
      grade: "1st Division",
    },
  ];

  return (
    <section id="experience" className="bg-[#0F172A] text-white py-28">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold">
            Experience & <span className="text-purple-500">Education</span>
          </h2>

          <p className="text-gray-400 text-xl mt-4">
            My professional journey and academic background
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Experience */}

          <div>
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <FaBriefcase className="text-purple-500" />
              Experience
            </h3>

            {experience.map((item, index) => (
              <div
                key={index}
                className="bg-[#141E35] border border-purple-700 rounded-3xl p-8 mb-8 hover:shadow-[0_0_35px_rgba(168,85,247,.35)] duration-300"
              >
                <h3 className="text-2xl font-bold">{item.title}</h3>

                <p className="text-purple-500 mt-2">{item.company}</p>

                <p className="text-gray-400 mt-1">{item.duration}</p>

                <ul className="mt-6 space-y-3 text-gray-300">
                  {item.description.map((point, i) => (
                    <li key={i}>✔ {point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}

          <div>
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <FaGraduationCap className="text-purple-500" />
              Education
            </h3>

            {education.map((item, index) => (
              <div
                key={index}
                className="bg-[#141E35] border border-purple-700 rounded-3xl p-8 mb-8 hover:shadow-[0_0_35px_rgba(168,85,247,.35)] duration-300"
              >
                <h3 className="text-2xl font-bold">{item.degree}</h3>

                <p className="text-purple-500 mt-2">{item.institute}</p>

                <div className="flex justify-between mt-4 text-gray-400">
                  <span>{item.duration}</span>
                  <span>{item.grade}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
