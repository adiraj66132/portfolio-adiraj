
import React from 'react';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skills = [
    { name: "ReactJS", icon: "⚛️", color: "from-blue-400 to-cyan-500" },
    { name: "Tailwind CSS", icon: "🎨", color: "from-cyan-400 to-blue-500" },
    { name: "HTML5 / CSS3", icon: "🌐", color: "from-orange-400 to-red-500" },
    { name: "Bootstrap", icon: "🅱️", color: "from-purple-400 to-purple-600" },
    { name: "Angular", icon: "🅰️", color: "from-red-500 to-red-600" },
    { name: "Express.js", icon: "⚡", color: "from-gray-400 to-gray-600" },
    { name: "Python", icon: "🐍", color: "from-yellow-400 to-blue-500" },
    { name: "C/C++", icon: "💻", color: "from-blue-500 to-purple-600" },
    { name: "Rust", icon: "🦀", color: "from-orange-500 to-red-600" },
    { name: "Node.js", icon: "🟢", color: "from-green-400 to-green-600" },
    { name: "Firebase", icon: "🔥", color: "from-yellow-400 to-orange-500" },
    { name: "npm", icon: "📦", color: "from-red-500 to-pink-500" },
  ];

  const SkillCard = ({ skill, index }: { skill: any, index: number }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.05, 
        y: -10,
        transition: { duration: 0.3 }
      }}
      className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-gray-500/50 transition-all duration-500"
    >
      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl" 
           style={{ background: `linear-gradient(135deg, ${skill.color.split(' ')[1]} 0%, ${skill.color.split(' ')[3]} 100%)` }} />
      
      <div className="relative z-10 flex flex-col items-center text-center space-y-4">
        <motion.div 
          className="text-4xl"
          whileHover={{ scale: 1.2, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          {skill.icon}
        </motion.div>
        
        <h3 className="text-white font-semibold text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
          {skill.name}
        </h3>
        
        <motion.div 
          className="w-full h-1 bg-gray-700 rounded-full overflow-hidden"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.5, delay: index * 0.1 + 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Skills & Technologies
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Crafting digital experiences with cutting-edge technologies and creative passion
          </motion.p>
        </motion.div>

        {/* Moving Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"
        >
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </motion.div>

        {/* Floating Animation Container */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-center"
          >
            <p className="text-gray-500 text-sm">Scroll to explore more</p>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="mt-2"
            >
              ↓
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
