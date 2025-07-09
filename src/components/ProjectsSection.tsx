import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Data Analysis Tool",
      description: "A Python-based data analysis tool for processing and visualizing large datasets.",
      technologies: ["Python", "Pandas", "Matplotlib"],
      gradient: "from-blue-500 to-purple-600",
      github: "https://github.com/adiraj66132/Data-Analysis-Tool"
    },
    {
      id: 2,
      title: "Inventory Management System",
      description: "A simple and interactive Inventory Management System built in C using the ncurses library.",
      technologies: ["C/C++"],
      gradient: "from-green-500 to-teal-600",
      github: "https://github.com/adiraj66132/Inventory-Management-System"
    },
    {
      id: 3,
      title: "Algorithm Visualizer",
      description: "An interactive tool for visualizing various algorithms implemented in C++.",
      technologies: ["C++", "SFML", "Algorithms"],
      gradient: "from-purple-500 to-pink-600",
      github: "https://github.com/adiraj66132/algorithm-visualizer"
    },
    {
      id: 4,
      title: "BTD Union: The Elite Squad",
      description: "A concept site for Bloons Tower Defense Union, showcasing dynamic UI design and smooth transitions",
      technologies: ["Vite", "TypeScript", "Tailwind CSS", "React", "shadcn/ui"],
      gradient: "from-orange-500 to-red-600",
      github: "https://github.com/adiraj66132/btd-union"
    },
    {
      id: 5,
      title: "GTA-6 Demo App",
      description: "GTA 6 Demo Page – A sleek and interactive concept demo built with modern web technologies.",
      technologies: ["Vite", "TypeScript", "Tailwind CSS", "React", "shadcn/ui"],
      gradient: "from-indigo-500 to-blue-600",
      github: "https://github.com/adiraj66132/GTA6-DEMO-WEBAPP"
    },
    {
      id: 6,
      title: "🏁 Porsche GT3 Dark Display",
      description: "A high-performance, dark-themed digital cluster UI inspired by the Porsche 911 GT3 RS.",
      technologies: ["Vite", "TypeScript", "Tailwind CSS", "React", "shadcn/ui"],
      gradient: "from-gray-600 to-gray-800",
      github: "https://github.com/adiraj66132/porsche"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of innovative solutions and creative implementations
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.07,
                rotateY: 8,
                z: 50,
                boxShadow: "0 12px 32px 0 rgba(80, 120, 255, 0.18)",
              }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
              className="group relative"
            >
              <div className="relative p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 h-full">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                
                {/* Project number indicator */}
                <motion.div
                  className={`absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r ${project.gradient} rounded-full flex items-center justify-center text-white text-sm font-bold`}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  {project.id}
                </motion.div>

                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

         

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs font-medium hover:bg-gray-600 transition-colors duration-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex space-x-4 mt-auto">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.12, backgroundColor: '#2563eb' }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </motion.a>
                  </div>
                </div>

                {/* Animated border */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20`}
                  style={{
                    background: `linear-gradient(45deg, transparent, transparent, rgba(59, 130, 246, 0.1), transparent, transparent)`,
                    backgroundSize: '200% 200%',
                  }}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/adiraj66132"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 hover:border-gray-600 text-white rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/25"
          >
            <Github className="w-6 h-6" />
            <span className="text-lg font-medium">View All Projects on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
