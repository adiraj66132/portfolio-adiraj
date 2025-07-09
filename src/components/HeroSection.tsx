import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Star {
  x: number;
  y: number;
  z: number;
  originalX: number;
  originalY: number;
  brightness: number;
  twinkleOffset: number;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  angle: number;
  speed: number;
  opacity: number;
}

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const mousePos = useRef({ x: 0, y: 0 });
  const [stars, setStars] = useState<Star[]>([]);
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);
  
  const { scrollYProgress } = useScroll();
  const nameY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  const subtitleY = useTransform(scrollYProgress, [0, 0.3], [0, -30]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize stars with parallax depth
    let localStars: Star[] = [];
    let localShootingStars: ShootingStar[] = [];
    const initStars = () => {
      localStars = [];
      for (let i = 0; i < 200; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        localStars.push({
          x,
          y,
          z: Math.random() * 2000, // more depth for parallax
          originalX: x,
          originalY: y,
          brightness: Math.random(),
          twinkleOffset: Math.random() * Math.PI * 2,
        });
      }
    };
    initStars();

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      const time = Date.now() * 0.001;
      // Parallax effect based on mouse X
      const parallax = (mousePos.current.x / window.innerWidth - 0.5) * 100;
      // Draw stars with color cycling and parallax
      for (let i = 0; i < localStars.length; i++) {
        const star = localStars[i];
        const twinkle = Math.sin(time * 2 + star.twinkleOffset + i) * 0.5 + 0.5;
        const brightness = star.brightness * twinkle;
        const size = (brightness * 2 + 0.5) * (2000 / (star.z + 2000));
        const px = star.x + parallax * (star.z / 2000);
        const py = star.y;
        ctx.globalAlpha = brightness;
        ctx.fillStyle = `hsl(${200 + Math.sin(time + i) * 60}, 100%, ${70 + brightness * 30}%)`;
        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fill();
      }
      // Shooting stars (more frequent, colored)
      if (Math.random() < 0.01) {
        localShootingStars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * 0.5,
          length: 40 + Math.random() * 60,
          angle: Math.PI / 4 + (Math.random() - 0.5) * Math.PI / 6,
          speed: 8 + Math.random() * 8,
          opacity: 1,
        });
      }
      localShootingStars = localShootingStars.filter((shootingStar) => {
        shootingStar.x += Math.cos(shootingStar.angle) * shootingStar.speed;
        shootingStar.y += Math.sin(shootingStar.angle) * shootingStar.speed;
        shootingStar.opacity -= 0.025;
        if (shootingStar.opacity > 0) {
          const gradient = ctx.createLinearGradient(
            shootingStar.x,
            shootingStar.y,
            shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.length,
            shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.length
          );
          gradient.addColorStop(0, `rgba(0, 255, 255, ${shootingStar.opacity})`);
          gradient.addColorStop(1, 'rgba(0, 255, 255, 0)');
          ctx.globalAlpha = 1;
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 2.5;
          ctx.beginPath();
          ctx.moveTo(shootingStar.x, shootingStar.y);
          ctx.lineTo(
            shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.length,
            shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.length
          );
          ctx.stroke();
          return true;
        }
        return false;
      });
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const nameVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.8,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  // Parallax/tilt effect for text
  const textRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!textRef.current) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 30; // tilt range
      const y = (e.clientY / innerHeight - 0.5) * 30;
      textRef.current.style.transform = `perspective(800px) rotateY(${-x}deg) rotateX(${y}deg)`;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: 'radial-gradient(ellipse at center, #1a1a2e 0%, #000000 100%)' }}
      />
      
      <div className="relative z-10 text-center" ref={textRef} style={{ transition: 'transform 0.3s cubic-bezier(.25,.8,.25,1)' }}>
        <motion.div
          variants={nameVariants}
          initial="hidden"
          animate="visible"
          style={{ y: nameY }}
          className="mb-6"
        >
          <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            {"Adiraj".split("").map((letter, index) => (
              <motion.span key={index} variants={letterVariants} className="inline-block">
                {letter}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        <motion.div
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
          style={{ y: subtitleY }}
          className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          {["Full", "Stack", "Developer", "&", "Creative", "Technologist"].map((word, index) => (
            <motion.span key={index} variants={wordVariants} className="inline-block mr-3">
              {word}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mt-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            Explore My Work
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
