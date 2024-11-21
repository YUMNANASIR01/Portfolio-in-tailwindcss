import React from 'react';
import { FaFacebookF, FaLinkedin } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"
import Button from './Button'
import Link from 'next/link'
import Image from 'next/image'

function HeroSection() {
  return (
    <section className="bg-[#1a1a2e] w-full py-24 px-6 md:px-16 flex flex-col md:flex-row items-center justify-center">
      <div className="w-full md:w-1/2 max-w-2xl text-left mb-8 md:mb-0">
        <h1 className="text-3xl md:text-4xl font-bold text-white mt-10 md:mt-20 ml-4 md:ml-20">
          Hey! I&apos;m <span className="text-blue-400">Yumna Nasir</span>
        </h1>
        <h2 className="text-2xl md:text-3xl mt-4 font-medium text-white ml-4 md:ml-20">
          <span className="text-blue-400">I</span>&#39;m a{' '}
          <span className="text-blue-400">Frontend Web Developer</span>
        </h2>
        <p className="mt-6 text-base md:text-lg text-gray-300 leading-relaxed ml-4 md:ml-20">
          I can build user interfaces for websites <br />
          and applications using <span className="text-blue-400">React JS</span> and{' '}
          <span className="text-blue-400">Next.js</span>. <br />
          I love frontend development.
        </p>

        <div className="mt-6 md:mt-10 ml-4 md:ml-20">
          <Button textName="Hire Me" />
        </div>

        <div className="mt-8 md:mt-12 flex gap-6 md:gap-8 ml-4 md:ml-16">
          <Link href="https://www.facebook.com/" passHref>
            <FaFacebookF
              size={24}
              className="text-white hover:text-blue-400 transition-colors duration-300 cursor-pointer"
            />
          </Link>
          <Link href="https://www.twitter.com/" passHref>
            <FaXTwitter
              size={24}
              className="text-white hover:text-blue-400 transition-colors duration-300 cursor-pointer"
            />
          </Link>
          <Link href="https://www.instagram.com/accounts/login/?hl=en" passHref>
            <FaInstagram
              size={24}
              className="text-white hover:text-blue-400 transition-colors duration-300 cursor-pointer"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/yumna-nasir-4382132b5/" passHref>
            <FaLinkedin
              size={24}
              className="text-white hover:text-blue-400 transition-colors duration-300 cursor-pointer"
            />
          </Link>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <Image
          src="/myImage/pro-pic.png" 
          alt="Yumna Nasir Profile Picture"
          width={500}
          height={300}
          className="rounded-full transform hover:scale-105 transition-transform duration-300 mr-30"
        />
      </div>
    </section>
  );
}

export default HeroSection;













