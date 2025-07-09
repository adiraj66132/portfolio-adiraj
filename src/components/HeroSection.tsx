
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

    // Initialize stars
    const initStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < 150; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        newStars.push({
          x,
          y,
          z: Math.random() * 1000,
          originalX: x,
          originalY: y,
          brightness: Math.random(),
          twinkleOffset: Math.random() * Math.PI * 2,
        });
      }
      setStars(newStars);
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

      // Update and draw stars
      setStars(prevStars => {
        return prevStars.map(star => {
          // Mouse gravity effect
          const dx = mousePos.current.x - star.originalX;
          const dy = mousePos.current.y - star.originalY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const force = Math.min(100 / (distance + 100), 2);
          
          const newX = star.originalX + dx * force * 0.1;
          const newY = star.originalY + dy * force * 0.1;

          // Twinkling effect
          const twinkle = Math.sin(time * 2 + star.twinkleOffset) * 0.5 + 0.5;
          const brightness = star.brightness * twinkle;
          
          // Draw star
          const size = (brightness * 2 + 0.5) * (1000 / (star.z + 1000));
          ctx.globalAlpha = brightness;
          ctx.fillStyle = `hsl(${200 + brightness * 60}, 100%, ${70 + brightness * 30}%)`;
          ctx.beginPath();
          ctx.arc(newX, newY, size, 0, Math.PI * 2);
          ctx.fill();

          return { ...star, x: newX, y: newY };
        });
      });

      // Shooting stars
      if (Math.random() < 0.005) {
        setShootingStars(prev => [...prev, {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * 0.5,
          length: 20 + Math.random() * 80,
          angle: Math.PI / 4 + (Math.random() - 0.5) * Math.PI / 4,
          speed: 5 + Math.random() * 10,
          opacity: 1,
        }]);
      }

      // Update and draw shooting stars
      setShootingStars(prevShootingStars => {
        return prevShootingStars.filter(shootingStar => {
          shootingStar.x += Math.cos(shootingStar.angle) * shootingStar.speed;
          shootingStar.y += Math.sin(shootingStar.angle) * shootingStar.speed;
          shootingStar.opacity -= 0.02;

          if (shootingStar.opacity > 0) {
            const gradient = ctx.createLinearGradient(
              shootingStar.x,
              shootingStar.y,
              shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.length,
              shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.length
            );
            
            gradient.addColorStop(0, `rgba(255, 255, 255, ${shootingStar.opacity})`);
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
            
            ctx.globalAlpha = 1;
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 2;
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
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

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

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: 'radial-gradient(ellipse at center, #1a1a2e 0%, #000000 100%)' }}
      />
      
      <div className="relative z-10 text-center">
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
