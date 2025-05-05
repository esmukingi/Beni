"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <motion.div
    id="contact"
      className="min-h-screen bg-[#030014] text-white flex flex-col items-center px-6 py-20 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-purple-700 opacity-30 blur-[150px] rounded-full z-0"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-500 opacity-30 blur-[150px] rounded-full z-0"></div>

      {/* Heading */}
      <motion.h1
        className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 z-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Contact Me
      </motion.h1>

      {/* Description */}
      <motion.p
        className="text-lg text-gray-400 mb-10 text-center max-w-2xl z-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        I’d love to hear from you! Whether it’s a project, opportunity, or just to say hi — feel free to reach out through the info below or find me on social media.
      </motion.p>

      {/* Contact Info */}
      <motion.div
        className="flex flex-col md:flex-row gap-10 text-lg text-gray-300 z-10 mb-16"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <div className="flex items-center gap-3">
          <FaPhoneAlt className="text-purple-500" /> <span>+250 787 979 333</span>
        </div>
        <div className="flex items-center gap-3">
          <FaEnvelope className="text-cyan-500" /> <span>ngobokaben@gmail.com</span>
        </div>
        <div className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-pink-500" /> <span>Gatsata, Kigali, Rwanda</span>
        </div>
      </motion.div>

      {/* Social Media */}
      <motion.div
        className="flex gap-6 text-2xl mb-20 z-10"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <a href="https://github.com/ngobokaben" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-purple-500 transition" />
        </a>
        <a href="https://linkedin.com/in/NGOBOKA Alain Beni" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-cyan-500 transition" />
        </a>
        <a href="https://instagram.com/Shema Herve" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-pink-500 transition" />
        </a>
      </motion.div>

      {/* Google Map */}
      <motion.div
        className="w-full max-w-4xl h-[400px] mb-20 z-10 shadow-lg rounded-lg overflow-hidden"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <iframe
          src="https://maps.google.com/maps?q=Gatsata,%20Kigali,%20Rwanda&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
