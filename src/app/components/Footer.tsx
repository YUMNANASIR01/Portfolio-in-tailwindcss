

import React from 'react';
import { FaFacebookF, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-[#0a0908] py-10 text-center text-white">
  
      <div className="max-w-4xl mx-auto">
        <p className="text-lg md:text-xl font-[Caveat]">
          © 2024&nbsp;<span className="text-purple-500">YUMNA NASIR</span>. All rights reserved.
        </p>
        <p className="text-sm mt-2 text-gray-400">
          Designed and developed by Yumna Nasir.
        </p>

      
        <div className="mt-6 flex justify-center gap-6">
          <Link href="https://www.facebook.com/" passHref>
            <FaFacebookF
              size={24}
              className="text-white hover:text-purple-500 transition-colors duration-300 cursor-pointer"
            />
          </Link>
          <Link href="https://www.twitter.com/" passHref>
            <FaXTwitter
              size={24}
              className="text-white hover:text-purple-500 transition-colors duration-300 cursor-pointer"
            />
          </Link>
          <Link href="https://www.instagram.com/accounts/login/?hl=en" passHref>
            <FaInstagram
              size={24}
              className="text-white hover:text-purple-500 transition-colors duration-300 cursor-pointer"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/yumna-nasir-4382132b5/" passHref>
            <FaLinkedin
              size={24}
              className="text-white hover:text-purple-500 transition-colors duration-300 cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;






