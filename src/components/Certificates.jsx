import { FaCertificate, FaAward } from "react-icons/fa";

function Certificates() {
  const certificates = [
    {
      title: "Python Programming Certificate",
      provider: "Udemy",
      year: "2025",
      description:
        "Completed comprehensive Python programming covering fundamentals, OOP, data structures, and projects.",
    },
    {
      title: "Microsoft Azure AI Essentials",
      provider: "LinkedIn Learning",
      year: "2024",
      description:
        "Learned Azure AI services, Machine Learning concepts, and cloud-based AI solutions.",
    },
    {
      title: "Web Development Internship",
      provider: "Cognifyz Technologies",
      year: "2025",
      description:
        "Completed a Web Development Internship using HTML, CSS, JavaScript and React.js.",
    },
    {
      title: "IBM Datathon Participation",
      provider: "IBM SkillsBuild",
      year: "2025",
      description:
        "Participated in IBM Datathon and developed a predictive customer retention dashboard.",
    },
  ];

  return (
    <section id="certificates" className="bg-[#0F172A] text-white py-28">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold">
            Certificates & <span className="text-purple-500">Achievements</span>
          </h2>

          <p className="text-gray-400 text-xl mt-4">
            Professional certifications and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((item, index) => (
            <div
              key={index}
              className="bg-[#141E35] border border-purple-700 rounded-3xl p-8 hover:shadow-[0_0_35px_rgba(168,85,247,.35)] duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-2xl bg-purple-900 flex items-center justify-center">
                  {index % 2 === 0 ? (
                    <FaCertificate className="text-purple-400 text-3xl" />
                  ) : (
                    <FaAward className="text-purple-400 text-3xl" />
                  )}
                </div>

                <div>
                  <h3 className="text-2xl font-bold">{item.title}</h3>

                  <p className="text-purple-500 mt-2">
                    {item.provider} • {item.year}
                  </p>
                </div>
              </div>

              <p className="text-gray-300 mt-8 leading-8">{item.description}</p>

              <button className="mt-8 text-purple-500 hover:text-purple-300 font-semibold">
                ✔ Verified Certificate
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
