'use client'
import React from 'react';
import Link from 'next/link';
import { IoMenu, IoClose } from "react-icons/io5";
import { caveat } from '../font';

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="sticky top-0 z-50">
      <header className="bg-[#1e2a47] shadow-md shadow-[#1e2a47] font-bold">
        <nav className="flex justify-between items-center p-3 md:px-8 pt-3">
      
          <div>
            <Link href="/">
              <p className={`${caveat.className} text-3xl font-semibold text-white`}>
                <span className="text-blue-600">Y</span>UMNA{" "}
                <span className="text-blue-600">N</span>ASIR
              </p>
            </Link>
          </div>

       
          <ul className="hidden lg:flex items-center text-3xl font-medium space-x-8">
            {["Home", "About", "Portfolio", "Services", "Testimonials", "Contact"].map((item, index) => (
              <li key={index}>
                <Link href={`/${item === "Home" ? "" : `#${item.toLowerCase()}`}`}>
                  <span className="text-lg text-white hover:text-blue-300 transition-colors duration-300">
                    {item}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

       
          <IoMenu
            size={30}
            color="white"
            className="lg:hidden cursor-pointer"
            onClick={toggleMenu}
          />

        
          {isOpen && (
            <div className="fixed inset-0 bg-blue-800 flex flex-col items-center justify-center space-y-6 z-40">
              <IoClose
                size={30}
                color="white"
                className="absolute top-6 right-6 cursor-pointer"
                onClick={toggleMenu}
              />
              {["Home", "About", "Portfolio", "Services", "Testimonials", "Contact"].map((item, index) => (
                <Link key={index} href={`/${item === "Home" ? "" : `#${item.toLowerCase()}`}`}>
                  <span
                    className="text-2xl font-semibold text-white hover:text-blue-400 transition-colors duration-300"
                    onClick={toggleMenu} 
                  >
                    {item}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </nav>
      </header>
    </div>
  );
}

export default Navbar;


