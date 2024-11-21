
import React from "react";
import { FaBullhorn, FaPaintBrush, FaCode, FaSearch } from "react-icons/fa";

function Services() {
  const servicesData = [
    {
      icon: <FaBullhorn />,
      title: "branding",
      description:
        "Enhance your brand identity with compelling strategies and visuals that resonate with your audience.",
    },
    {
      icon: <FaPaintBrush />,
      title: "design",
      description:
        "Create modern, user-friendly designs tailored to deliver seamless user experiences.",
    },
    {
      icon: <FaCode />,
      title: "development",
      description:
        "Build efficient, scalable web solutions with clean and maintainable code.",
    },
    {
      icon: <FaSearch />,
      title: "SEO",
      description:
        "Optimize your web presence to rank higher and drive organic traffic to your site.",
    },
  ];

  return (
    <>
      <section id="services" className="py-20 px-6 md:px-12 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="text-center">
          <h4 className="text-white text-4xl lg:text-5xl font-caveat">
            <span>
              <span className="text-purple-500 capitalize">w</span>hat{" "}
              <span className="text-purple-500 capitalize">I</span>{" "}
              <span className="text-purple-500 capitalize">d</span>o{" "}
              <span className="text-purple-500 capitalize">f</span>or{" "}
              <span className="text-purple-500 capitalize">c</span>lients
            </span>
          </h4>
          <p className="mt-4 lg:mt-6 mx-auto w-[90%] lg:w-[60%] text-gray-300 text-sm lg:text-lg leading-7">
            I offer a range of services designed to enhance your brand and
            digital presence, leveraging creativity, technical expertise, and
            strategic insights to achieve your goals.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="rounded-xl p-6 bg-gray-800 shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-700 text-center"
            >
              <div className="text-6xl text-purple-500 mb-6">{service.icon}</div>
              <h4 className="text-xl text-white capitalize mb-4">{service.title}</h4>
              <p className="text-sm text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Services;
