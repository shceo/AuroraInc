  import React from 'react';
  import { motion } from 'framer-motion';

  export default function Home() {
    return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900">
          <motion.div 
            className="absolute w-[800px] h-[800px] border-2 border-purple-300/20 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="absolute w-[600px] h-[600px] border-2 border-purple-300/30 rounded-full"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: -360,
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="absolute w-[400px] h-[400px] border-2 border-purple-300/40 rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              rotate: 360,
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          <div className="relative z-10 text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              From Great Ideas to a Great Future
            </motion.h1>
            <motion.p 
              className="text-xl text-purple-200 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Pioneering tomorrow's technology today through innovation and excellence
            </motion.p>
          </div>
        </div>
      </div>
    );
  }