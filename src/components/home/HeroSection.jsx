import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaShip, FaPlane, FaTruck, FaArrowRight } from 'react-icons/fa';

const statsData = [
  { value: '15+', label: 'Years Experience' },
  { value: '30K+', label: 'Shipments Completed' },
  { value: '50+', label: 'Countries Served' },
  { value: '99%', label: 'Satisfied Clients' }
];

const StatCounter = ({ value, label }) => {
  return (
    <motion.div 
      className="text-center lg:text-left flex-1 min-w-[120px]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className="text-3xl md:text-4xl font-bold text-white mb-1"
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        {value}
      </motion.div>
      <div className="text-base text-blue-100 font-medium">{label}</div>
    </motion.div>
  );
};

export default function HeroSection() {
  return (
    <section className="bg-transpoto-800 text-white pt-20 pb-12 md:pt-24 md:pb-16 relative overflow-hidden">
      {/* Animation Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-transpoto-900 via-transpoto-800 to-transpoto-700 overflow-hidden">
        {/* Enhanced sun with dynamic glow and rays */}
        <div className="absolute left-[10%] top-[15%] z-10">
          {/* Main sun disc with enhanced glow */}
          <motion.div
            className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-200 to-yellow-400 relative"
            style={{ 
              boxShadow: '0 0 40px 5px rgba(253, 224, 71, 0.6), 0 0 80px 20px rgba(250, 204, 21, 0.4), 0 0 120px 30px rgba(250, 204, 21, 0.2)',
              filter: 'blur(0.5px)'
            }}
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.9, 1, 0.9]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut"
            }}
          >
            {/* Inner sun core glow */}
            <motion.div 
              className="absolute inset-[15%] rounded-full bg-white"
              animate={{ 
                opacity: [0.7, 0.9, 0.7]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut"
              }}
            />
          </motion.div>
          
          {/* Dynamic sun rays */}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30) % 360;
            const length = 30 + (i % 3) * 10;
            const width = 1 + (i % 2);
            const delay = i * 0.2;
            
            return (
              <motion.div
                key={`sunray-${i}`}
                className="absolute bg-yellow-100 origin-bottom"
                style={{
                  height: length,
                  width: width,
                  left: '50%',
                  top: '50%',
                  transform: `translate(-50%, -100%) rotate(${angle}deg)`,
                  transformOrigin: 'bottom center',
                  opacity: 0.4,
                  filter: 'blur(0.5px)'
                }}
                animate={{
                  height: [length, length + 10, length],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 4,
                  delay: delay,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            );
          })}
        </div>
        
        {/* Enhanced sky with multi-layered gradients for depth and atmosphere */}
        <div className="absolute top-0 left-0 w-full h-[65%] bg-gradient-to-b from-blue-300 via-blue-400 to-blue-500 opacity-30" />
        <div className="absolute top-0 left-0 w-full h-[65%] bg-gradient-to-br from-indigo-300/20 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 w-full h-[65%] bg-gradient-to-tr from-transparent via-purple-300/10 to-transparent" />
        
        {/* Atmospheric haze */}
        <motion.div 
          className="absolute top-[30%] left-0 w-full h-[15%] bg-white/5 blur-md"
          animate={{ opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Distant mountains silhouette */}
        <div className="absolute top-[35%] left-0 w-full h-[10%]" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1440 320\'%3E%3Cpath fill=\'%23334155\' fill-opacity=\'0.2\' d=\'M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z\'%3E%3C/path%3E%3C/svg%3E")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.4
        }} />
        
        {/* Parallax clouds - multiple layers for depth */}
        {/* Far clouds - slowest moving */}
        {[...Array(3)].map((_, i) => {
          const topPosition = 5 + (i * 8);
          const size = 120 + (i * 30);
          const opacity = 0.5 - (i * 0.1);
          const speed = 180 + (i * 20);
          const initialLeft = 15 + (i * 25);
          
          return (
            <motion.div 
              key={`far-cloud-${i}`}
              className="absolute blur-sm"
              style={{
                top: `${topPosition}%`,
                left: `${initialLeft}%`,
                width: size,
                height: size / 2,
                borderRadius: '50%',
                background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)',
                opacity: opacity,
                filter: 'blur(4px)'
              }}
              animate={{
                x: ["-10%", "110%"],
              }}
              transition={{
                x: {
                  duration: speed,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
            />
          );
        })}
        
        {/* Mid clouds - medium speed */}
        {[...Array(4)].map((_, i) => {
          const topPosition = 12 + (i * 6);
          const size = 80 + (i * 20);
          const opacity = 0.7 - (i * 0.1);
          const speed = 120 + (i * 15);
          const initialLeft = -10 - (i * 20);
          const direction = i % 2 === 0;
          
          return (
            <motion.div 
              key={`mid-cloud-${i}`}
              className="absolute"
              style={{
                top: `${topPosition}%`,
                left: direction ? `${initialLeft}%` : 'auto',
                right: !direction ? `${initialLeft}%` : 'auto',
                width: size,
                height: size / 2.5,
                borderRadius: '50%',
                background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 70%)',
                opacity: opacity,
                filter: 'blur(2px)'
              }}
              animate={{
                x: direction ? ["0%", "120%"] : ["0%", "-120%"],
              }}
              transition={{
                x: {
                  duration: speed,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
            />
          );
        })}
        
        {/* Near clouds - fastest moving */}
        {[...Array(3)].map((_, i) => {
          const topPosition = 8 + (i * 10);
          const size = 60 + (i * 15);
          const opacity = 0.9 - (i * 0.1);
          const speed = 90 + (i * 10);
          const initialLeft = 30 + (i * 30);
          const direction = i % 2 !== 0;
          
          return (
            <motion.div 
              key={`near-cloud-${i}`}
              className="absolute z-20"
              style={{
                top: `${topPosition}%`,
                left: direction ? `${initialLeft}%` : 'auto',
                right: !direction ? `${initialLeft}%` : 'auto',
                width: size,
                height: size / 3,
                borderRadius: '50%',
                background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 70%)',
                opacity: opacity,
                filter: 'blur(1px)'
              }}
              animate={{
                x: direction ? ["0%", "-130%"] : ["0%", "130%"],
              }}
              transition={{
                x: {
                  duration: speed,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
            />
          );
        })}
        
        {/* Light rays */}
        {[...Array(5)].map((_, i) => (
          <motion.div 
            key={`ray-${i}`}
            className="absolute bg-yellow-100 opacity-10"
            style={{ 
              height: 120 + (i * 40),
              width: 3 + (i * 1),
              top: '5%',
              left: `${10 + (i * 5)}%`,
              transformOrigin: 'top center',
              rotate: -10 + (i * 5)
            }}
            animate={{ 
              opacity: [0.05, 0.15, 0.05],
              height: [120 + (i * 40), 140 + (i * 40), 120 + (i * 40)]
            }}
            transition={{ 
              duration: 7 + (i * 2),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
        
        {/* Enhanced ocean with layered gradients and shimmer */}
        <motion.div 
          className="absolute bottom-0 left-0 w-full h-[40%] overflow-hidden"
          style={{ 
            background: 'linear-gradient(to bottom, rgba(37, 99, 235, 0.5), rgba(30, 64, 175, 0.9))',
            clipPath: 'polygon(0 15%, 100% 0%, 100% 100%, 0% 100%)',
          }}
          animate={{ 
            opacity: [0.9, 1, 0.9],
            backgroundPosition: ['0% 0%', '100% 10%', '0% 0%']
          }}
          transition={{ 
            opacity: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            backgroundPosition: { duration: 20, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          {/* Water shimmer effect */}
          <motion.div
            className="absolute inset-0 opacity-20"
            style={{ 
              backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.4) 0%, transparent 50%)',
              backgroundSize: '15% 30%',
              backgroundRepeat: 'repeat'
            }}
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Organic wave patterns with varied speeds and paths */}
          {[...Array(4)].map((_, i) => (
            <motion.div 
              key={`wave-${i}`}
              className="absolute left-0 w-[200%] h-[12px]"
              style={{ 
                bottom: 5 + (i * 15),
                backgroundImage: i % 2 === 0 
                  ? 'linear-gradient(90deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.2) 100%)'
                  : 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)',
                opacity: 0.6 - (i * 0.1),
                filter: 'blur(1px)'
              }}
              animate={{ 
                x: i % 2 === 0 ? ["-10%", "-60%", "-10%"] : ["-60%", "-10%", "-60%"],
                y: [0, i % 2 === 0 ? 3 : -3, 0]
              }}
              transition={{ 
                x: { duration: 20 - (i * 2), repeat: Infinity, ease: "easeInOut" },
                y: { duration: 5 + (i * 1), repeat: Infinity, ease: "easeInOut" }
              }}
            />
          ))}
          
          {/* Subtle ripples */}
          {[...Array(8)].map((_, i) => (
            <motion.div 
              key={`ripple-${i}`}
              className="absolute rounded-full bg-white opacity-0"
              style={{ 
                width: 4 + (i % 3) * 2,
                height: 4 + (i % 3) * 2,
                bottom: `${20 + (i * 8)}%`,
                left: `${10 + (i * 10)}%`,
              }}
              animate={{ 
                scale: [0, 2, 0],
                opacity: [0, 0.4, 0]
              }}
              transition={{ 
                duration: 4 + (i % 3),
                repeat: Infinity,
                delay: i * 2,
                ease: "easeOut"
              }}
            />
          ))}
        </motion.div>

        {/* 6 Ships with varied movements */}
        {[...Array(6)].map((_, i) => {
          // Determine ship properties based on index
          const isLarge = i < 3;
          const size = isLarge ? 5 + (i % 3) : 3 + (i % 2); // Larger sizes for better visibility
          
          // Better distribution across the entire scene
          const positions = [5, 20, 35, 50, 65, 80]; // Specific positions for better distribution
          const initialPosition = positions[i];
          const direction = i % 2 === 0;
          const speed = 15 + (i * 3); // Faster for more lively movement
          const delay = i * 2;
          
          // Varied vertical positions for depth
          const yOffsets = [15, 20, 25, 18, 22, 28]; // Specific depths for better distribution
          const yOffset = yOffsets[i];
          
          return (
            <motion.div
              key={`ship-${i}`}
              className="absolute z-10"
              style={{ 
                bottom: `${yOffset}%`, 
                left: `${initialPosition}%`,
                perspective: '1000px'
              }}
              animate={{ 
                x: ["0%", direction ? "35%" : "-35%"], // Longer distance for more lively movement
                y: [0, -3, 2, -2, 0], // More pronounced bobbing
                rotateY: [0, direction ? 5 : -5, 0], // More pronounced turning
                rotateZ: [-1, 1, -0.5, 0.5, -1] // More pronounced rocking
              }}
              transition={{
                x: { duration: speed, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", delay },
                y: { duration: 3 + (i % 3), ease: "easeInOut", repeat: Infinity },
                rotateY: { duration: 8, ease: "easeInOut", repeat: Infinity },
                rotateZ: { duration: 4, ease: "easeInOut", repeat: Infinity }
              }}
            >
              <div className="relative">
                {/* Ship shadow with dynamic opacity based on wave movement */}
                <motion.div 
                  className="absolute bottom-[-8px] w-full h-[3px] bg-black rounded-full transform -translate-x-1"
                  animate={{ 
                    opacity: [0.1, 0.25, 0.1],
                    filter: ["blur(1px)", "blur(3px)", "blur(1px)"],
                    width: ["100%", "110%", "100%"]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
                
                {/* Ship with 3D effect and subtle color variation */}
                <div className="relative transition-all transform-gpu">
                  <FaShip 
                    className={`text-${i % 2 === 0 ? 'white' : 'blue-50'} text-${size}xl filter drop-shadow-md`} 
                    style={{ transform: direction ? 'scaleX(1)' : 'scaleX(-1)' }}
                  />
                  
                  {/* Enhanced ship wake with dynamic properties */}
                  <motion.div
                    className="absolute -bottom-1 h-[2px] bg-gradient-to-r from-white via-white to-transparent rounded-full"
                    style={{
                      left: direction ? '-8px' : '8px',
                      transformOrigin: direction ? 'left' : 'right',
                      transform: direction ? 'scaleX(1)' : 'scaleX(-1)'
                    }}
                    animate={{ 
                      width: [size * 5, size * 15, size * 5], 
                      x: direction ? [0, -8, 0] : [0, 8, 0], 
                      opacity: [0.7, 0.4, 0.7],
                      filter: ["blur(0px)", "blur(1px)", "blur(0px)"]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 3, 
                      ease: "easeInOut" 
                    }}
                  />
                  
                  {/* Multiple wake ripples for more realistic water effect */}
                  {[...Array(isLarge ? 3 : 2)].map((_, wakeIndex) => (
                    <motion.div
                      key={`wake-${i}-${wakeIndex}`}
                      className="absolute h-[1px] bg-gradient-to-r from-transparent via-white to-transparent rounded-full"
                      style={{
                        bottom: -2 - wakeIndex,
                        left: direction ? '-12px' : '12px',
                        transformOrigin: direction ? 'left' : 'right',
                        transform: direction ? 'scaleX(1)' : 'scaleX(-1)',
                        opacity: 0.5 - (wakeIndex * 0.15)
                      }}
                      animate={{ 
                        width: [0, size * (15 + wakeIndex * 10), size * 5], 
                        x: direction ? [0, -20 - (wakeIndex * 15), -40 - (wakeIndex * 20)] : 
                                       [0, 20 + (wakeIndex * 15), 40 + (wakeIndex * 20)], 
                        opacity: [0, 0.3 - (wakeIndex * 0.1), 0] 
                      }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 3 + wakeIndex, 
                        ease: "easeOut",
                        delay: wakeIndex * 0.2
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* 5 Planes with varied movements */}
        {[...Array(5)].map((_, i) => {
          // Determine plane properties based on index
          const size = 3 + (i % 3); // Larger sizes for better visibility
          
          // Create specific flight paths for more realistic distribution
          const flightPaths = [
            { startX: 5, startY: 10, endX: 90, endY: 15, rotation: -5 },   // Left to right, high
            { startX: 80, startY: 20, endX: 10, endY: 25, rotation: 195 },  // Right to left, mid
            { startX: 15, startY: 30, endX: 70, endY: 25, rotation: -5 },   // Left to right, low
            { startX: 90, startY: 8, endX: 30, endY: 12, rotation: 195 },   // Right to left, highest
            { startX: 40, startY: 18, endX: 95, endY: 22, rotation: -5 }    // Left to right, mid-high
          ];
          
          const path = flightPaths[i];
          const direction = path.startX < path.endX;
          const flightDistance = Math.abs(path.endX - path.startX);
          const speed = 20 + (i * 3); // Faster for more lively movement
          const delay = i * 2;
          
          // Calculate a more dynamic curved flight path
          const midPointY = (path.startY + path.endY) / 2 - (direction ? 8 : -8); // More pronounced curve
          
          return (
            <motion.div
              key={`plane-${i}`}
              className="absolute z-20"
              style={{ 
                top: `${path.startY}%`, 
                left: `${path.startX}%`,
                transform: `rotate(${path.rotation}deg)`,
                perspective: '1000px'
              }}
              animate={{ 
                x: ["0%", direction ? `${flightDistance}%` : `-${flightDistance}%`],
                y: [
                  "0%", 
                  `${(path.endY - path.startY) * 0.3 - 5}%`, // More dynamic vertical movement
                  `${(path.endY - path.startY) * 0.7 + 3}%`, 
                  `${path.endY - path.startY}%`
                ],
                rotateY: [0, direction ? 5 : -5, 0], // More pronounced banking
                rotateZ: direction ? [-2, 2, -1, 0] : [2, -2, 1, 0] // More pronounced tilting
              }}
              transition={{
                x: { duration: speed, ease: "linear", repeat: Infinity, repeatType: "loop", delay },
                y: { 
                  duration: speed, 
                  ease: "easeInOut", 
                  repeat: Infinity, 
                  repeatType: "loop", 
                  delay 
                },
                rotateY: { duration: 6, ease: "easeInOut", repeat: Infinity }, // Faster banking
                rotateZ: { duration: 8, ease: "easeInOut", repeat: Infinity } // Faster tilting
              }}
            >
              <div className="relative">
                {/* Enhanced plane shadow with dynamic properties */}
                <motion.div 
                  className="absolute bottom-[-10px] left-[5px] bg-black rounded-full"
                  style={{ width: `${size * 10}px`, height: '2px' }}
                  animate={{ 
                    opacity: [0.05, 0.15, 0.05],
                    width: [`${size * 10}px`, `${size * 12}px`, `${size * 10}px`],
                    filter: ["blur(1px)", "blur(3px)", "blur(1px)"]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
                
                {/* Plane with subtle color variations */}
                <FaPlane 
                  className={`text-${i % 3 === 0 ? 'white' : i % 3 === 1 ? 'blue-50' : 'gray-100'} text-${size}xl drop-shadow-lg`} 
                />
                
                {/* Enhanced contrails with multiple layers */}
                {[...Array(3)].map((_, trailIndex) => (
                  <motion.div
                    key={`contrail-${i}-${trailIndex}`}
                    className="absolute h-[1px] bg-gradient-to-r from-transparent via-white to-transparent rounded-full"
                    style={{
                      bottom: -1 - (trailIndex * 0.5),
                      left: direction ? '-10px' : '10px',
                      transformOrigin: direction ? 'left' : 'right',
                      transform: direction ? 'scaleX(1)' : 'scaleX(-1)',
                      opacity: 0.7 - (trailIndex * 0.2)
                    }}
                    animate={{ 
                      width: [0, size * (20 + trailIndex * 10), size * 5], 
                      opacity: [0, 0.6 - (trailIndex * 0.15), 0], 
                      x: direction ? 
                        [0, -30 - (trailIndex * 20), -60 - (trailIndex * 30)] : 
                        [0, 30 + (trailIndex * 20), 60 + (trailIndex * 30)]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 2 + trailIndex, 
                      ease: "easeOut",
                      delay: trailIndex * 0.1
                    }}
                  />
                ))}
              </div>
            </motion.div>
          );
        })}

        {/* Enhanced road with detailed markings and texture */}
        <div className="absolute bottom-0 left-0 w-full h-[10%] bg-gradient-to-b from-transpoto-800/80 to-transpoto-900/90 backdrop-blur-sm z-5">
          {/* Road surface texture */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23ffffff\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }}></div>
          
          {/* Center road marking with dashed effect */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] overflow-hidden">
            <motion.div 
              className="absolute inset-0 w-[200%] h-full"
              style={{ 
                backgroundImage: 'linear-gradient(90deg, rgba(255,215,0,0.4) 50%, transparent 50%)',
                backgroundSize: '20px 100%'
              }}
              animate={{ x: ["-100%", "0%"] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
          </div>
          
          {/* Edge road markings */}
          <div className="absolute top-1/4 left-0 w-full h-[1px] bg-white opacity-20"></div>
          <div className="absolute bottom-1/4 left-0 w-full h-[1px] bg-white opacity-20"></div>
        </div>
        
        {/* 4 Trucks (2 big, 2 small) with varied movements */}
        {[...Array(4)].map((_, i) => {
          // Determine truck properties based on index
          const isBig = i < 2; // First 2 are big trucks, last 2 are small
          const size = isBig ? 5 : 3; // Increased sizes for better visibility
          
          // Better distribution across the road
          const positions = [8, 30, 55, 75]; // Specific positions for better distribution
          const initialPosition = positions[i];
          
          const direction = i % 2 === 0;
          const speed = 15 + (i % 3 * 3); // Faster for more lively movement
          const delay = i * 2;
          
          // Slight vertical offset for lane positioning
          const laneOffset = i % 2 === 0 ? 3.5 : 5.5; // Two lanes
          
          return (
            <motion.div
              key={`truck-${i}`}
              className="absolute z-10"
              style={{ 
                bottom: `${laneOffset}%`, // Lane positioning
                left: `${initialPosition}%`,
              }}
              animate={{ 
                x: ["0%", direction ? "70%" : "-70%"], // Even longer travel distance for more lively movement
                y: [0, -1, 0.5, -0.5, 0], // More pronounced vertical movement for road bumps
                rotate: [0, direction ? 0.8 : -0.8, 0, direction ? -0.8 : 0.8, 0] // More pronounced rotation for suspension effect
              }}
              transition={{
                x: { duration: speed, ease: "linear", repeat: Infinity, repeatType: "loop", delay },
                y: { duration: 0.6, ease: "easeInOut", repeat: Infinity }, // Faster bouncing
                rotate: { duration: 0.6, ease: "easeInOut", repeat: Infinity } // Faster rocking
              }}
            >
              <div className="relative">
                {/* Truck with color variations */}
                <FaTruck 
                  className={`text-${i === 0 ? 'blue-100' : i === 1 ? 'red-100' : i === 2 ? 'gray-100' : 'yellow-100'} text-${size}xl`} 
                  style={{ transform: direction ? 'scaleX(1)' : 'scaleX(-1)' }}
                />
                
                {/* Dynamic truck shadow with suspension effect */}
                <motion.div
                  className="absolute bg-black rounded-full"
                  style={{
                    bottom: -1,
                    left: '10%',
                    width: '80%',
                    height: '2px'
                  }}
                  animate={{ 
                    opacity: [0.1, 0.2, 0.1],
                    width: ["80%", "70%", "80%"],
                    filter: ["blur(1px)", "blur(2px)", "blur(1px)"]
                  }}
                  transition={{ 
                    duration: 0.8, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
                
                {/* Enhanced headlights with glow */}
                <motion.div
                  className="absolute h-2 bg-yellow-100 rounded-full"
                  style={{
                    bottom: size === 4 ? '30%' : '25%',
                    left: direction ? '0' : 'auto',
                    right: !direction ? '0' : 'auto',
                    transform: direction ? 'translateX(-1px)' : 'translateX(1px)',
                    boxShadow: '0 0 5px 2px rgba(255, 255, 200, 0.3)'
                  }}
                  animate={{ 
                    opacity: [0.7, 0.9, 0.7], 
                    width: isBig ? [4, 6, 4] : [2, 3, 2],
                    filter: ["blur(1px)", "blur(2px)", "blur(1px)"]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2, 
                    ease: "easeInOut" 
                  }}
                />
                
                {/* Subtle exhaust effect for big trucks */}
                {isBig && (
                  <motion.div
                    className="absolute bg-gray-400 rounded-full"
                    style={{
                      width: 2,
                      height: 2,
                      bottom: '40%',
                      left: direction ? 'auto' : '0',
                      right: direction ? '0' : 'auto',
                    }}
                    animate={{
                      y: [0, -10],
                      x: direction ? [-5, -15] : [5, 15],
                      opacity: [0.4, 0],
                      scale: [1, 3]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut"
                    }}
                  />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Semi-transparent overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-transpoto-900/80 to-transpoto-800/60 z-10"></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            className="lg:max-w-2xl w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl xl:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="block mb-2">Global Logistics</span>
              <span className="block text-blue-300">Simplified</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-100 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Your trusted logistics partner with global reach. We deliver efficient freight and transportation solutions for businesses worldwide.
            </motion.p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <motion.div 
                whileHover={{ scale: 1.03 }} 
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Link 
                  to="/contact" 
                  className="bg-white text-transpoto-800 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors text-center block flex items-center justify-center shadow-lg"
                >
                  Request a Quote <FaArrowRight className="ml-2" />
                </Link>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.03 }} 
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <Link 
                  to="/domestic-logistics" 
                  className="border-2 border-transpoto-400 text-white px-6 py-3 rounded-md font-semibold hover:bg-transpoto-700 hover:border-transpoto-500 transition-all text-center block"
                >
                  Our Services
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Service icons - adjusted for reduced hero section */}
        <div className="grid grid-cols-3 gap-5 md:gap-10 max-w-3xl mx-auto mt-14 mb-12 relative z-20">
          {[
            { icon: FaTruck, label: "Road Freight" },
            { icon: FaPlane, label: "Air Freight" },
            { icon: FaShip, label: "Sea Freight" }
          ].map((service, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + (index * 0.1), duration: 0.5 }}
            >
              <div className="bg-transpoto-700 mx-auto rounded-full w-24 h-24 md:w-28 md:h-28 flex items-center justify-center mb-4 shadow-lg">
                <service.icon className="text-4xl md:text-5xl text-blue-300" />
              </div>
              <p className="text-lg md:text-xl font-medium">{service.label}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Stats */}
        <motion.div 
          className="flex flex-wrap justify-around mt-8 pt-8 border-t border-transpoto-600/50 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {statsData.map((stat, index) => (
            <StatCounter key={index} value={stat.value} label={stat.label} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
