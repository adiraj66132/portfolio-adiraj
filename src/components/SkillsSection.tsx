import React from 'react';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  // Updated skills list with new skills from public folder
  const skills = [
    { name: "ReactJS", image: "react.png" },
    { name: "Redux", image: "redux.png" },
    { name: "TypeScript", image: "TypeScript.png" },
    { name: "JavaScript", image: "js.png" },
    { name: "Tailwind CSS", image: "tailwind.png" },
    { name: "shadcn/ui", image: "shadcn.png" },
    { name: "HTML5 / CSS3", image: "css.png" },
    { name: "Bootstrap", image: "bootstrap.png" },
    { name: "Next.js", image: "nextjs-icon.png" },
    { name: "Node.js", image: "node.png" },
    { name: "Express.js", image: "Express.png" },
    { name: "Socket.io", image: "Socket.io.png" },
    { name: "Python", image: "Python.png" },
    { name: "FastAPI", image: "FastAPI.png" },
    { name: "C/C++", image: "c++.png" },
    { name: "Rust", image: "rust.png" },
    { name: "MongoDB", image: "MongoDB.png" },
    { name: "MySQL", image: "MySQL.png" },
    { name: "PostgresSQL", image: "PostgresSQL.png" },
    { name: "Supabase", image: "Supabase.png" },
    { name: "Firebase", image: "Firebase.png" },
    { name: "NPM", image: "NPM.png" },
    { name: "Vercel", image: "Vercel.png" },
    { name: "Git", image: "git.png" },
    { name: "GitHub", image: "GitHub.png" },
    { name: "Figma", image: "figma.png" },
    { name: "Canva", image: "Canva.png" },
    { name: "Ant Design", image: "Ant Design.png" },
    { name: "Postman", image: "Postman.png" },
  ];

  // Split skills into two rows
  const mid = Math.ceil(skills.length / 2);
  const skillsRows = [skills.slice(0, mid), skills.slice(mid)];

  // Combine both rows for a single seamless marquee
  const allSkills = [...skillsRows[0], ...skillsRows[1]];

  // Updated SkillCard for new skill structure (bigger logos, reduced gap, hover effect, aria-label)
  const SkillCard = ({ skill }: { skill: { name: string; image: string } }) => (
    <div
      className="flex flex-col items-center justify-center min-w-[150px] mx-2 group"
      aria-label={skill.name}
    >
      <div className="w-20 h-20 mb-3 flex items-center justify-center rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-blue-400/40"
        style={{ willChange: 'transform' }}
      >
        <img
          src={`/${skill.image}`}
          alt={skill.name}
          className="w-16 h-16 object-contain drop-shadow-md"
          loading="lazy"
        />
      </div>
      <span className="text-white font-semibold text-base text-center mt-1 tracking-wide">
        {skill.name}
      </span>
    </div>
  );

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Crafting digital experiences with cutting-edge technologies and creative passion
          </p>
        </div>
        {/* Single Seamless Marquee Row */}
        <div className="w-full flex justify-center overflow-x-hidden">
          <div
            className={`marquee flex flex-nowrap items-center gap-4 py-6`}
            style={{
              width: `${allSkills.length * 150 * 2 + 16 * allSkills.length * 2}px`,
              minWidth: '100vw',
              maxWidth: 'none',
            }}
          >
            {[...allSkills, ...allSkills].map((skill, index) => (
              // key is set on the element, not passed as a prop
              <div key={skill.name + '-' + index}>
                <SkillCard skill={skill} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .marquee {
          display: flex;
          will-change: transform;
          animation: marquee-left 24s linear infinite;
        }
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .scrollbar-thin {
          scrollbar-width: thin;
        }
        .scrollbar-thumb-blue-700\/40::-webkit-scrollbar-thumb {
          background: rgba(29, 78, 216, 0.4);
        }
        .scrollbar-track-gray-800\/40::-webkit-scrollbar-track {
          background: rgba(31, 41, 55, 0.4);
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;
