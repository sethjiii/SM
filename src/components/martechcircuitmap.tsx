"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  SiHubspot,
  SiGoogleanalytics,
  SiWebflow
} from "react-icons/si";
import { FaEnvelope } from "react-icons/fa"; // Use a generic envelope icon for Klaviyo

const tools = [
  {
    name: "Webflow",
    description: "Your CMS & front-end platform",
    icon: <SiWebflow className="text-blue-500" />, x: 50, y: 100
  },
  {
    name: "GA4",
    description: "Track user behavior and page performance",
    icon: <SiGoogleanalytics className="text-orange-500" />, x: 200, y: 80
  },
  {
    name: "HubSpot",
    description: "CRM and marketing automation",
    icon: <SiHubspot className="text-pink-500" />, x: 350, y: 120
  },
  {
    name: "Klaviyo",
    description: "Email and SMS marketing platform",
    icon: <FaEnvelope className="text-green-500" />, x: 500, y: 100
  },
];

const lineVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (custom: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1, delay: custom * 0.5 },
  }),
};

export default function MartechCircuitMap() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="relative w-full h-screen bg-gray-950 text-white px-4 py-12 flex flex-col justify-center items-center overflow-hidden">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        See How Your Martech Stack Fires Like a Neural Network
      </motion.h2>

      <svg className="absolute top-0 left-0 w-full h-full z-0" xmlns="http://www.w3.org/2000/svg">
        <motion.line
          x1="70" y1="110" x2="220" y2="90"
          stroke="cyan" strokeWidth="2"
          variants={lineVariants}
          initial="hidden"
          whileInView="visible"
          custom={0}
          viewport={{ once: true }}
        />
        <motion.line
          x1="220" y1="90" x2="370" y2="130"
          stroke="cyan" strokeWidth="2"
          variants={lineVariants}
          initial="hidden"
          whileInView="visible"
          custom={1}
          viewport={{ once: true }}
        />
        <motion.line
          x1="370" y1="130" x2="520" y2="110"
          stroke="cyan" strokeWidth="2"
          variants={lineVariants}
          initial="hidden"
          whileInView="visible"
          custom={2}
          viewport={{ once: true }}
        />
      </svg>

      {tools.map((tool, idx) => (
        <motion.div
          key={tool.name}
          className="absolute z-10 flex flex-col items-center gap-1 cursor-pointer"
          style={{ left: tool.x, top: tool.y }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: idx * 0.5 }}
          onMouseEnter={() => setHovered(idx)}
          onMouseLeave={() => setHovered(null)}
        >
          <div className="relative text-3xl">
            {tool.icon}
            {hovered === idx && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: -20 }}
                exit={{ opacity: 0 }}
                className="absolute -top-14 left-1/2 -translate-x-1/2 px-3 py-2 bg-gray-800 text-sm rounded shadow-lg text-white whitespace-nowrap"
              >
                <strong>{tool.name}</strong><br />
                <span className="text-xs text-gray-300">{tool.description}</span>
              </motion.div>
            )}
          </div>
          <div className="text-sm text-white/70">{tool.name}</div>
        </motion.div>
      ))}
    </div>
  );
}
