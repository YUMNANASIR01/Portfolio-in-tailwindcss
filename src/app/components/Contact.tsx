
"use client";
import React, { useState } from 'react';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { sendEmail } from '../utils/emailService';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      to_name: "Yumna Nasir",
      from_name: name,
      from_email: email,
      message: message
    };

    try {
      await sendEmail(templateParams);
      alert("Email sent successfully");
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('EmailJs Error', error);
      alert("Failed to send email");
    }
  }

  return (
    <section id="contact" className="py-20 px-4 md:px-12 bg-[#1a1a1a]">
  <div className="text-center text-white max-w-4xl mx-auto">
    <h4 className="text-3xl md:text-4xl lg:text-5xl font-[Caveat]">
      <span>
        <span className="text-[purple]">C</span>ontact{' '}
        <span className="text-[purple]">M</span>e
      </span>
    </h4>
    <p className="w-[95%] lg:w-[75%] mt-4 md:mt-6 mx-auto text-sm md:text-lg leading-6 md:leading-7">
      Feel free to reach out! Whether you have a question or want to start a project, I’m just a message away.
    </p>
  </div>

  <div className="mt-10 md:mt-16 flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-20 max-w-6xl mx-auto">
    <div className="flex flex-col gap-8 w-full lg:w-1/3 text-start">
      <div className="flex items-start gap-4">
        <MdEmail className="text-2xl md:text-3xl text-[purple]" />
        <div>
          <p className="text-base md:text-lg text-white font-medium">
            Have a question?
          </p>
          <p className="text-[purple] mt-1">I’m here to help you.</p>
          <p className="text-[#a9927d] mt-2">
            Email me at{' '}
            <a
              href="mailto:yumnanasir719@gmail.com"
              className="text-[purple] underline hover:text-purple-300"
            >
              yumnanasir719@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <MdLocationOn className="text-2xl md:text-3xl text-[purple]" />
        <div>
          <p className="text-base md:text-lg text-white font-medium">
            Current Location
          </p>
          <p className="text-[purple] mt-1">Pakistan, Karachi</p>
          <p className="text-[#a9927d] mt-2">Serving clients worldwide</p>
        </div>
      </div>
    </div>

    <form
      onSubmit={handleSubmit}
      className="w-full lg:w-2/3 bg-[#222222] p-6 md:p-8 rounded-lg shadow-lg"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <input
          className="p-3 md:p-4 rounded-lg bg-[#333333] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="p-3 md:p-4 rounded-lg bg-[#333333] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <input
        className="p-3 md:p-4 mt-4 md:mt-6 w-full rounded-lg bg-[#333333] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        type="text"
        name="subject"
        id="subject"
        placeholder="Subject"
        autoComplete="off"
      />
      <textarea
        className="p-3 md:p-4 mt-4 md:mt-6 w-full rounded-lg bg-[#333333] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-[8rem] md:min-h-[10rem]"
        name="message"
        id="message"
        placeholder="Your Message"
        autoComplete="off"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

<button
  type="submit"
  className="py-4 px-6 mt-4 md:mt-6 rounded-md text-xs md:text-sm font-medium text-white bg-[#333333] hover:bg-[#ae9292] transition-all duration-300"
>
  Send Message
</button>

    </form>
  </div>
</section>

  );
}

export default Contact;
