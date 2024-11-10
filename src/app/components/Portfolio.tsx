
import React from "react";
import Image from "next/image";
import { caveat } from "../font";
import Link from "next/link";

function Portfolio() {
  return (
    <>
      <div>
        <section id="portfolio" className="w-full py-36 px-8 text-center bg-[#0a0908]">
          <h4 className={`${caveat.className} text-white text-4xl lg:text-5xl`}>
            <span className="text-[purple]">M</span>y{" "}
            <span className="text-[purple]">W</span>orks
          </h4>

          <p className="w-[90%] lg:w-[80%] mt-6 mx-auto text-sm lg:text-lg leading-6">
            I am a skilled frontend and backend developer with experience in building responsive, user-friendly interfaces using React, Next.js, and Tailwind CSS...
          </p>

          <div className="w-full mt-24 grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-28">
            <div className="flex flex-col">
              <div className="w-full rounded-3xl overflow-hidden transition-all duration-[0.9s]">
                <Link href={"https://github.com/YUMNANASIR01/Multipage-website.git"}>
                  <Image
                    src="/myImage/project-0.jpeg"
                    alt="Laptop, Phone and Camera"
                    width={500}
                    height={500}
                    className="w-full rounded-3xl transition-all duration-[0.9s] hover:scale-110 hover:-rotate-[5deg]"
                  />
                </Link>
              </div>
              <p className="mt-6 text-xl">
                I transformed this Figma template into a responsive fashion website layout using Next.js. The design is clean and modern, with a bold header and engaging "Explore Now" call-to-action, perfect for attracting fashion enthusiasts.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="w-full rounded-3xl overflow-hidden transition-all duration-[0.9s]">
                <Link href={"https://project-by-html-and-css.vercel.app/"}>
                  <Image
                    src="/myImage/project-2.jpeg"
                    alt="Laptop, Phone and Camera"
                    width={500}
                    height={500}
                    className="w-full rounded-3xl transition-all duration-[0.9s] hover:scale-110 hover:-rotate-[5deg]"
                  />
                </Link>
              </div>
              <p className="mt-6 text-xl">
                I created this elegant design using HTML and CSS, focusing on clean structure and responsive layout. The design emphasizes user engagement with bold typography and visually appealing elements, ensuring a seamless browsing experience across all devices.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="w-full rounded-3xl overflow-hidden transition-all duration-[0.9s]">
                <Link href={"https://html-and-css-mu.vercel.app/"}>
                  <Image
                    src="/myImage/project-5.jpeg"
                    alt="Laptop, Phone and Camera"
                    width={500}
                    height={500}
                    className="w-full rounded-3xl transition-all duration-[0.9s] hover:scale-110 hover:-rotate-[5deg]"
                  />
                </Link>
              </div>
              <p className="mt-6 text-xl">
                Yumna’s portfolio features an amazing, modern layout that highlights her skills as a frontend developer. The bold design and interactive buttons create an engaging experience, making her work and expertise stand out effectively.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="w-full rounded-3xl overflow-hidden transition-all duration-[0.9s]">
                <Link href={"https://dynamic-routing-rho-wine.vercel.app/"}>
                  <Image
                    src="/myImage/project-6.jpeg"
                    alt="Laptop, Phone and Camera"
                    width={500}
                    height={500}
                    className="w-full rounded-3xl transition-all duration-[0.9s] hover:scale-110 hover:-rotate-[5deg]"
                  />
                </Link>
              </div>
              <p className="mt-6 text-xl">
                I implemented a country details page in Next.js, using dynamic routing to display specific information for each country. You can click on a country and see details like its name, capital, population, and more.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="w-full h-full rounded-3xl overflow-hidden transition-all duration-[0.9s]">
                <Link href={"https://tailwindcss-calculator-chts.vercel.app/"}>
                  <Image
                    src="/myImage/project-1.jpeg"
                    alt="Laptop, Phone and Camera"
                    width={900}
                    height={500}
                    className="w-full rounded-3xl transition-all duration-[0.9s] hover:scale-110 hover:-rotate-[5deg]"
                  />
                </Link>
              </div>
              <p className="mt-6 text-xl">
                This design will make the calculator visually appealing, functional, and friendly to use, with smooth interactions.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="w-full rounded-3xl overflow-hidden transition-all duration-[0.9s]">
                <Link href={"https://assingment-4-ak6d.vercel.app/"}>
                  <Image
                    src="/myImage/project-4.jpeg"
                    alt="Laptop, Phone and Camera"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover rounded-3xl transition-all duration-[0.9s] hover:scale-110 hover:-rotate-[5deg]"
                  />
                </Link>
              </div>
              <p className="mt-6 text-xl">
                Figma template to Next.js, Interactive elements like the "Download Resume" button and navigation links are now fully functional.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Portfolio;



