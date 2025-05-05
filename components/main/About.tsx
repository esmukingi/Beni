"use client";

import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';

const MotionLink = motion(Link); // Enable framer motion on Next.js Link

const About = () => {
  return (
    <motion.div
      id='about-me'
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center bg-[#030014] px-6 md:px-10 py-20 text-white"
    >
      {/* Title and Description */}
      <motion.div
        variants={slideInFromTop}
        className="w-full max-w-[900px] flex flex-col items-center text-center mb-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
          About Me
        </h2>
        <p className="text-base md:text-lg text-gray-400 max-w-[700px] mx-auto">
          Hi, I’m Alain Beni Ngoboka, a passionate Full-Stack Developer with a love for building responsive, interactive, and user-friendly web applications. I specialize in React, JavaScript, CSS, and other technologies to deliver high-quality software. I build both frontend and backend applications that are modern, clean, and scalable.
        </p>
      </motion.div>

      {/* Image and Experience */}
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="flex flex-col lg:flex-row gap-10 items-center justify-center mb-12"
      >
        {/* Profile Image */}
        <div className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] rounded-full overflow-hidden border-4 border-purple-500 shadow-lg">
          <Image
            src="/beni.png"
            alt="Alain Beni Ngoboka"
            width={250}
            height={250}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Experience List */}
        <div className="text-left max-w-[600px]">
          <h3 className="text-2xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
            My Experience
          </h3>
          <ul className="list-disc pl-5 text-gray-400 space-y-2">
            <li>Built full-stack apps using React and Node.js.</li>
            <li>Integrated REST APIs and Firebase backend services.</li>
            <li>Skilled in deploying websites and apps with Vercel and Netlify.</li>
            <li>Designed clean, responsive UIs with Tailwind CSS.</li>
            <li>Worked on both solo and team-based Agile projects.</li>
          </ul>
        </div>
      </motion.div>

      {/* "Hire Me!" Button */}
      <MotionLink
        href="#contact"
        variants={slideInFromRight(0.8)}
        className="py-3 px-8 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-lg font-semibold rounded-xl transition-all hover:bg-gradient-to-l hover:scale-105"
      >
        Hire Me!
      </MotionLink>
    </motion.div>
  );
};

export default About;
