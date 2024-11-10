import React from 'react'
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Button from './Button';
import Link from 'next/link';

function HeroSection() {
  return (
    <>
      <section className='bg-[#0a0908] w-full text-center pt-[7.5rem]'>
        <p className='text-[2rem]'>Hey! I&apos;m <span className='text-[purple]'>YUMNA NASIR</span></p>

        <p className='text-[2rem]'>
          <span className='text-[purple]'>I</span>&#39;m <span className='text-[purple]'>A F</span>ront <span className='text-[purple]'>E</span>nd <span className='text-[purple]'>W</span>eb <span className='text-[purple]'>D</span>eveloper
        </p>

        <p className='mt-[1.25rem] mb-[2rem] text-[1.125rem]'>
          I can build user interface for web sites and applications with <span className='text-[purple]'>React JS</span> and <span className='text-[purple]'>Next.Js</span><br />
          I love the front end development.
        </p>

        <Button textName={"Hire Me"}/>

        <div className='mt-[3.125rem] m-auto sm:w-[60%] lg:w-[30%] lg:px-[1.5rem] py-1 flex gap-[3.125rem] justify-center items-center lg:h-[52px] bg-[#771c66] rounded-full'>
          <Link href={'https://www.facebook.com/'}> <FaFacebookF size={30} color='white' className='cursor-pointer'/></Link>
          <Link href={''}>  <FaXTwitter size={30} color='white' className='cursor-pointer'/></Link>
          <Link href={'https://www.instagram.com/accounts/login/?hl=en'}>
            <FaInstagram size={30} color='white' className='cursor-pointer'/>
          </Link>
          <Link href={'https://www.linkedin.com/in/yumna-nasir-4382132b5/'}> 
            <FaLinkedin size={30} color='white' className='cursor-pointer'/>
          </Link>
        </div>
        <br />
        <br />
      </section>
    </>
  )
}

export default HeroSection
