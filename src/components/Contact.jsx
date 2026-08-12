import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="bg-[#0F172A] text-white py-28">
      <div className="max-w-7xl mx-auto px-8">
        {/* Heading */}

        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold">
            Contact <span className="text-purple-500">Me</span>
          </h2>

          <p className="text-gray-400 text-xl mt-4">
            Let's build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14">
          {/* Left Side */}

          <div>
            <div className="space-y-6">
              <div className="bg-[#141E35] border border-purple-700 rounded-2xl p-6 flex items-center gap-5">
                <FaEnvelope className="text-purple-500 text-3xl" />

                <div>
                  <h3 className="font-bold text-xl">Email</h3>

                  <p className="text-gray-400">amankum.tech2808@gmail.com</p>
                </div>
              </div>

              <div className="bg-[#141E35] border border-purple-700 rounded-2xl p-6 flex items-center gap-5">
                <FaPhone className="text-purple-500 text-3xl" />

                <div>
                  <h3 className="font-bold text-xl">Phone</h3>

                  <p className="text-gray-400">+91 8051093538</p>
                </div>
              </div>

              <div className="bg-[#141E35] border border-purple-700 rounded-2xl p-6 flex items-center gap-5">
                <FaMapMarkerAlt className="text-purple-500 text-3xl" />

                <div>
                  <h3 className="font-bold text-xl">Location</h3>

                  <p className="text-gray-400">Purnea, Bihar, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}

            <div className="flex gap-5 mt-10">
              <a
                href="https://github.com/Amank002"
                target="_blank"
                rel="noreferrer"
                className="bg-purple-700 w-14 h-14 rounded-full flex items-center justify-center hover:bg-purple-600 duration-300"
              >
                <FaGithub size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/aman-kumar-7b37b7340"
                target="_blank"
                rel="noreferrer"
                className="bg-purple-700 w-14 h-14 rounded-full flex items-center justify-center hover:bg-purple-600 duration-300"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Right Side */}

          <form className="bg-[#141E35] border border-purple-700 rounded-3xl p-10">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-[#0F172A] border border-purple-700 rounded-xl p-4 mb-6 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-[#0F172A] border border-purple-700 rounded-xl p-4 mb-6 outline-none"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full bg-[#0F172A] border border-purple-700 rounded-xl p-4 mb-6 outline-none"
            ></textarea>

            <button className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-xl font-semibold duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
