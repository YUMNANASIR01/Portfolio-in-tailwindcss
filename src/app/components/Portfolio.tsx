
import Image from "next/image";
import { caveat } from "../font";
import Link from "next/link";

function Portfolio() {
  return (
    <>
      <section
        id="portfolio"
        className="w-full py-24 px-6 text-center bg-gradient-to-b from-gray-900 via-black to-gray-800"
      >
        <h4 className={`${caveat.className} text-white text-4xl lg:text-5xl`}>
          <span className="text-purple-500">M</span>y{" "}
          <span className="text-purple-500">W</span>orks
        </h4>

        <p className="w-[90%] lg:w-[70%] mt-4 mx-auto text-sm lg:text-lg leading-6 text-gray-300">
          I am a skilled frontend and backend developer with experience in
          building responsive, user-friendly interfaces using React, Next.js,
          and Tailwind CSS. On the backend, I’m proficient in creating RESTful
          APIs with Node.js and managing databases like MongoDB. My full-stack
          projects prioritize performance, scalability, and seamless user
          experiences.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            {
              link: "https://multipage-website-viro.vercel.app/",
              src: "/myImage/project-0.jpeg",
              description:
                "Transformed a Figma template into a responsive fashion website layout using Next.js. The modern design attracts fashion enthusiasts with engaging elements.",
            },

            {
              link: "https://hackathon-project-fawn.vercel.app/",
              src: "/myImage/project-3.jpeg",
              description:
                "Transformed a Figma template into a responsive fashion website layout using Next.js. The modern design attracts fashion enthusiasts with engaging elements.",
            },

            {
              link: "https://project-by-html-and-css.vercel.app/",
              src: "/myImage/project-2.jpeg",
              description:
                "Elegant design using HTML and CSS, focusing on clean structure and responsive layout for seamless user engagement.",
            },
            {
              link: "https://html-and-css-mu.vercel.app/",
              src: "/myImage/project-5.jpeg",
              description:
                "Yumna’s portfolio showcases her frontend skills with a modern layout and interactive design, making her expertise stand out.",
            },
            {
              link: "https://dynamic-routing-rho-wine.vercel.app/",
              src: "/myImage/project-6.jpeg",
              description:
                "Implemented a country details page in Next.js using dynamic routing to display specific information for each country.",
            },
            {
              link: "https://tailwindcss-calculator-chts.vercel.app/",
              src: "/myImage/project-1.jpeg",
              description:
                "Visually appealing and functional calculator design with smooth interactions and a modern interface.",
            },
            {
              link: "https://assingment-4-bxbb.vercel.app/",
              src: "/myImage/project-4.jpeg",
              description:
                "Figma template to Next.js with interactive features like 'Download Resume' and fully functional navigation links.",
            }, 
            {
              link: "https://count-down-timer-tawny.vercel.app/",
              src: "/myImage/project9.jpeg",
              description:
                "A countdown timer is a device or software feature that counts down from a specified time to zero. It is commonly used for tracking time remaining in an event, task, or deadline.",
            }, 
            {
              link: "https://todo-list-jet-six-43.vercel.app/",
              src: "/myImage/project10.jpeg",
              description:
            "A to-do list is a tool for organizing and prioritizing tasks that need to be completed. It helps improve productivity by providing a clear overview of responsibilities and deadlines."
            }, 
            


            {
              link: "https://github.com/YUMNANASIR01/Countdown_Timer.git",
              src: "/myImage/work1.jpg",
              description:        
            "A countdown timer project is a tool that counts down from a specified time, alerting users when the time expires. It’s commonly used for events, deadlines, or tasks requiring precise timing and can be customized for various applications.",
            },
           {
              link: "https://github.com/YUMNANASIR01/oop_my_bank.git",
              src: "/myImage/work2.jpg",
              description:
                "A bank application project allows users to manage their accounts, check balances, transfer funds, and track transaction history securely. It provides a user-friendly interface and robust security features for seamless financial management..",
            },
            {
              link: "https://github.com/YUMNANASIR01/Adventure-Game.git",
              src: "/myImage/work3.jpg",
              description:
                "An adventure game project involves creating an interactive experience where players explore virtual worlds, solve puzzles, and complete missions. It focuses on storytelling, gameplay mechanics, and player choices to create an engaging and immersive experience.",
            },
            {
              link: "https://github.com/YUMNANASIR01/students_Management_system.git",
              src: "/myImage/work4.jpg",
              description:
                "A student management project is a system designed to track and manage student information, including personal details, grades, and attendance.Tt helps educators and administrators efficiently organize and monitor student progress and performance.",
            },
            {
              link: "https://github.com/YUMNANASIR01/Word_counter_project.git",
              src: "/myImage/work5.jpg",
              description:
                "A word counter project is a tool that calculates the number of words, characters, and sometimes sentences in a given text. It's useful for meeting word limits and optimizing content, often with real-time tracking and analysis features.",
            },
            {
              link: "https://github.com/YUMNANASIR01/Todos_list.git",
              src: "/myImage/work6.jpg",
              description:
                "A to-do list is a simple tool for organizing tasks, helping users prioritize and track their responsibilities. It improves productivity by providing a clear structure for completing tasks efficiently and staying focused.",
            },




          ].map(({ link, src, description }, index) => (
            <div
              key={index}
              className="flex flex-col bg-gray-800 rounded-xl shadow-lg transition-transform transform hover:scale-105 border-x-2"
            >
              <Link href={link}>
                <div className="overflow-hidden rounded-t-xl">
                  <Image
                    src={src}
                    alt={`Project ${index + 1}`}
                    width={500}
                    height={300}
                    className="w-full h-auto transition-transform transform hover:scale-110"
                  />
                </div>
              </Link>
              <p className="p-4 text-gray-300 text-sm lg:text-base">
                {description}
              </p>
            </div>
          ))}

        </div>
      </section>
    </>
  );
}

export default Portfolio;

              
                
                
               
            