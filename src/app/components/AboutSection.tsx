
import React from 'react';
import Button from './Button';
import Image from 'next/image';
import { caveat } from '../font';

function AboutSection() {
  return (
    <>
      <section
        id="about"
        className="w-full py-20 px-6 sm:px-10 bg-gradient-to-r from-[#2b305e] to-[#5a67d8] flex flex-col md:flex-row items-center justify-center"
      >
      
        <div className="w-full md:w-1/2 px-4 flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0">
          <p className={`${caveat.className} text-4xl sm:text-5xl md:text-6xl text-white`}>YUMNA NASIR</p>
          <p className={`${caveat.className} text-lg sm:text-xl md:text-2xl mt-4 mb-8 text-white`}>
            Freelance Web Developer
          </p>
          <p className="text-base sm:text-lg md:text-xl text-white mb-6">
            I specialize in creating stunning, user-friendly websites and applications. With expertise in React, Next.js, and modern web technologies, I turn ideas into digital reality. Let’s collaborate to build something amazing!
          </p>
          <Button textName="Contact Me" />
        </div>

   
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <Image
            src="/myImage/pro-pic.png"
            alt="Yumna Nasir Profile Picture"
            width={500}
            height={450}
            className="rounded-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section>

      <section className="bg-gray-800 py-12 px-6" id="skills">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto">
        
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-white">Professional Skills</h2>
            <p className="text-gray-200 mb-6">
              I have honed a variety of skills across the following technologies.
            </p>
            {[
              { name: 'HTML5', color: 'bg-red-500', percentage: '95%' },
              { name: 'Next.js', color: 'bg-gray-500', percentage: '90%' },
              { name: 'TypeScript', color: 'bg-blue-600', percentage: '75%' },
              { name: 'Git', color: 'bg-red-600', percentage: '85%' },
              { name: 'GitHub', color: 'bg-black', percentage: '80%' },
              { name: 'Figma', color: 'bg-purple-500', percentage: '70%' },
              { name: 'Node.js', color: 'bg-green-600', percentage: '75%' },
              { name: 'CSS 3', color: 'bg-blue-500', percentage: '85%' },
              { name: 'JavaScript', color: 'bg-yellow-500', percentage: '65%' },
              { name: 'UX/UI', color: 'bg-green-500', percentage: '85%' },
            ].map((skill, idx) => (
              <div key={idx} className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <span className="text-lg font-medium text-white">{skill.name}</span>
                </div>
                <div className="relative flex-1 bg-gray-300 h-2 mx-4 rounded-full">
                  <div className={`absolute top-0 left-0 h-full ${skill.color} rounded-full`} style={{ width: skill.percentage }}></div>
                </div>
                <div>
                  <span className="text-lg font-medium text-white">{skill.percentage}</span>
                </div>
              </div>
            ))}
          </div>

          <div>
            <Image
              src="/myImage/work3.jpg"
              alt="Skills image"
              className="rounded-lg shadow-lg"
              width={400}
              height={500}
              layout="responsive"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutSection;





    