
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, BarChart3, Globe, Smartphone } from 'lucide-react';

const HighlightsSection = () => {
  const highlights = [
    {
      id: 1,
      title: "Frontend Excellence",
      description: "React, Next.js, TypeScript",
      icon: Code,
      gradient: "from-blue-500 to-cyan-500",
      span: "col-span-1 md:col-span-2",
      type: "progress"
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "Figma, Adobe Creative Suite",
      icon: Palette,
      gradient: "from-pink-500 to-purple-500",
      span: "col-span-1",
      type: "scale"
    },
    {
      id: 3,
      title: "Performance",
      description: "95% faster load times",
      icon: Zap,
      gradient: "from-yellow-500 to-orange-500",
      span: "col-span-1",
      type: "chart"
    },
    {
      id: 4,
      title: "Cost Optimization",
      description: "60% reduction in hosting costs",
      icon: BarChart3,
      gradient: "from-green-500 to-emerald-500",
      span: "col-span-1 md:col-span-2",
      type: "barChart"
    },
    {
      id: 5,
      title: "SEO Optimization",
      description: "Top rankings achieved",
      icon: Globe,
      gradient: "from-indigo-500 to-blue-500",
      span: "col-span-1",
      type: "movement"
    },
    {
      id: 6,
      title: "Mobile First",
      description: "Responsive design mastery",
      icon: Smartphone,
      gradient: "from-purple-500 to-pink-500",
      span: "col-span-1",
      type: "scale"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const ProgressBar = ({ gradient }: { gradient: string }) => (
    <motion.div
      className="h-2 bg-gray-700 rounded-full overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.div
        className={`h-full bg-gradient-to-r ${gradient}`}
        initial={{ width: 0 }}
        whileInView={{ width: "85%" }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true }}
      />
    </motion.div>
  );

  const BarChart = () => (
    <div className="flex items-end space-x-2 h-16">
      {[40, 70, 30, 90, 60].map((height, index) => (
        <motion.div
          key={index}
          className="bg-gradient-to-t from-green-500 to-emerald-400 rounded-sm flex-1"
          initial={{ height: 0 }}
          whileInView={{ height: `${height}%` }}
          transition={{ duration: 1, delay: index * 0.1 }}
          viewport={{ once: true }}
        />
      ))}
    </div>
  );

  const MovementDemo = () => (
    <div className="flex space-x-4">
      <motion.div
        className="w-16 h-8 bg-red-500 rounded flex items-center justify-center text-xs font-bold"
        animate={{
          x: [0, -5, 5, -3, 3, 0],
          rotate: [0, -2, 2, -1, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        BAD
      </motion.div>
      <motion.div
        className="w-16 h-8 bg-green-500 rounded flex items-center justify-center text-xs font-bold"
        animate={{
          y: [0, -2, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        GOOD
      </motion.div>
    </div>
  );

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Highlights
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Showcasing expertise across modern web technologies and design principles
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {highlights.map((highlight) => {
            const IconComponent = highlight.icon;
            
            return (
              <motion.div
                key={highlight.id}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                }}
                className={`${highlight.span} p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 group cursor-pointer`}
              >
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`p-3 rounded-xl bg-gradient-to-r ${highlight.gradient}`}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  <motion.div
                    className="w-2 h-2 rounded-full bg-green-400"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                </div>

                <h3 className="text-xl font-semibold text-white mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {highlight.description}
                </p>

                {highlight.type === "progress" && <ProgressBar gradient={highlight.gradient} />}
                {highlight.type === "chart" && (
                  <div className="flex items-center space-x-2">
                    <motion.div
                      className="w-8 h-8 rounded-full bg-yellow-500"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                    <span className="text-sm text-yellow-400">Optimizing...</span>
                  </div>
                )}
                {highlight.type === "barChart" && <BarChart />}
                {highlight.type === "movement" && <MovementDemo />}
                {highlight.type === "scale" && (
                  <motion.div
                    className="flex space-x-2"
                    whileHover="hover"
                  >
                    {[1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        className={`w-4 h-4 rounded-full bg-gradient-to-r ${highlight.gradient}`}
                        variants={{
                          hover: {
                            scale: [1, 1.3, 1],
                            transition: {
                              duration: 0.3,
                              delay: i * 0.1,
                            },
                          },
                        }}
                      />
                    ))}
                  </motion.div>
                )}

                <motion.div
                  className={`mt-4 h-1 bg-gradient-to-r ${highlight.gradient} rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HighlightsSection;
