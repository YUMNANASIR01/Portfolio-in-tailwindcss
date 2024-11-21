

import React from "react";
import Image from "next/image";

function Testimonials() {
  const testimonials = [
    {
      src: "/myImage/pic1.jpg",
      alt: "Alice",
      title: "Alice",
      role: "JavaScript Developer",
    },
    {
      src: "/myImage/pic2.jpg",
      alt: "Ben",
      title: "Ben",
      role: "Android Developer",
    },
    {
      src: "/myImage/pic3.jpg",
      alt: "Charlie",
      title: "Charlie",
      role: "iOS Developer",
    },
  ];

  return (
    <>
      <section id="testimonials" className="bg-[#0a0908] py-20 px-4 md:px-8">
        <div className="text-center">
          <h4 className="text-white text-4xl lg:text-5xl font-caveat font-bold mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              What Other People Say
            </span>
          </h4>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((person, index) => (
            <div
              key={index}
              className="p-6 bg-[#1a1a1a] rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-purple-500">
                <Image
                  src={person.src}
                  alt={person.alt}
                  width={150}
                  height={150}
                  className="w-full h-full object-cover"
                />
              </div>
              <h5 className="mt-6 text-xl text-white">{person.title}</h5>
              <p className="mt-2 text-purple-500">{person.role}</p>
              <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore, dolorum odio magni possimus corrupti molestiae labore
                voluptatum ut autem.
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Testimonials;
