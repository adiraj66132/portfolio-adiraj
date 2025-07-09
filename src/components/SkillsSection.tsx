
import React from 'react';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  const frontendSkills = [
    { name: "ReactJS", level: 5 },
    { name: "Tailwind CSS", level: 5 },
    { name: "HTML5 / CSS3", level: 5 },
    { name: "Bootstrap", level: 4 },
    { name: "Angular", level: 4 },
    { name: "Express.js", level: 5 },
  ];

  const backendSkills = [
    { name: "Python", level: 5 },
    { name: "C/C++", level: 5 },
    { name: "Rust", level: 3 },
    { name: "Node.js", level: 3 },
    { name: "Firebase", level: 2 },
    { name: "npm", level: 4 },
  ];

  const SkillBar = ({ skill, index }: { skill: { name: string; level: number }, index: number }) => (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <motion.span 
          className="text-white font-medium"
          whileHover={{ scale: 1.05, color: "#60a5fa" }}
        >
          {skill.name}
        </motion.span>
        <span className="text-gray-400 text-sm">{skill.level}/5</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${(skill.level / 5) * 100}%` }}
          transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );

  const FloatingSkill = ({ skill, index }: { skill: { name: string; level: number }, index: number }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1, y: -5 }}
      animate={{
        y: [0, -10, 0],
        rotate: [0, 2, -2, 0],
      }}
      transition={{
        duration: 3 + index * 0.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-600 rounded-xl p-4 text-center hover:border-blue-500 transition-all duration-300"
    >
      <h3 className="text-white font-medium mb-2">{skill.name}</h3>
      <div className="flex justify-center space-x-1">
        {Array.from({ length: 5 }, (_, i) => (
          <motion.div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i < skill.level ? 'bg-blue-500' : 'bg-gray-600'
            }`}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3, delay: (index * 0.1) + (i * 0.1) }}
            viewport={{ once: true }}
          />
        ))}
      </div>
    </motion.div>
  );

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Mastering the art of both frontend beauty and backend power
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Frontend Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                Frontend
              </span>
            </h3>
            {frontendSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </motion.div>

          {/* Backend Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Backend
              </span>
            </h3>
            {backendSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </motion.div>
        </div>

        {/* Floating Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            Interactive Skills Overview
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[...frontendSkills, ...backendSkills].map((skill, index) => (
              <FloatingSkill key={`floating-${skill.name}`} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
