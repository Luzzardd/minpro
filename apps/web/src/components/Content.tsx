'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Content = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  // Removed: const [slidePosition, setSlidePosition] = useState(0)
  // Removed: const handlePrev = () => setSlidePosition(prev => prev - 100)

  return (
    <div className="bg-black backdrop-filter backdrop-blur-sm text-white py-16">
      <div className="container mx-auto text-center">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-300/80 to-gray-100/80 font-racing"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          F1 2024 Best Moments
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-300 mb-8 font-tech"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Experience the thrill of Formula 1 at iconic circuits around the world
        </motion.p>
        <motion.div 
          className="relative"
          // Removed animate prop: animate={{ x: `${slidePosition}%` }}
          transition={{ type: 'spring', stiffness: 120, damping: 20, duration: 0.8 }}
        >
          <div className="overflow-hidden" ref={ref}>
            <ImageCollage controls={controls} />
          </div>
          {/* Removed:
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
            <button onClick={handlePrev} className="bg-red-600 text-white p-2 rounded-r-md">Prev</button>
          </div>
          */}
        </motion.div>
      </div>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Racing+Sans+One&display=swap');
        .font-racing {
          font-family: 'Racing Sans One', cursive;
        }
        .font-tech {
          font-family: 'Orbitron', sans-serif;
        }
      `}</style>
    </div>
  )
}

const ImageCollage = ({ controls }) => {
  const images = [
    { src: "https://th.bing.com/th/id/R.caa0a8dfd59d33aa88c548b209b4f93b?rik=lvmkyTfcGbYCQg&riu=http%3a%2f%2fthepodiumfinish.net%2fwp-content%2fuploads%2f2024%2f03%2fmax-verstappen-scaled.jpg&ehk=b5aT%2b6Glipo5QFkSq60EHmT0Toz8boUib7rxPYGOS74%3d&risl=&pid=ImgRaw&r=0", alt: "Max Verstappen", description: "Max Verstappen Roars for First 2024 Triumph in Bahrain" },
    { src: "https://media.formula1.com/image/upload/f_auto,c_limit,w_960,q_auto/f_auto/q_auto/fom-website/2024/Summer%20Break%202024/Writers%20On%20Mid%202024%20Formula%201%20header%20template", alt: "F1 Car on Track", description: "With an action-packed first half of the season behind us as F1 heads into its summer break, now feels like a good time to look back at what's happened in the opening 14 races – and what could still happen in the remaining 10. Will Buxton, Lawrence Barretto, Alex Jacques and David Tremayne reflect on the 2024 campaign so far and share their predictions for what might happen next." },
    { src: "https://media.formula1.com/image/upload/f_auto,c_limit,w_960,q_auto/t_16by9Centre/f_auto/q_auto/fom-website/2025/Miscellaneous/Formula%201%20header%20template%20Hamilton%20livery", alt: "F1 Pit Stop", description: "'It's what you've brought' – Wolff tells Hamilton Mercedes will continue with black on car livery" },
    { src: "https://media.formula1.com/image/upload/t_16by9Centre/f_auto/q_auto/v1682606473/Teams_1920x1080.jpg", alt: "F1 Race Start", description: "Who are the F1 teams? Formula 1 is a team sport. It needs to be to change all 4 tyres on a car in under 2 seconds! F1 teams design and build their cars and get them ready to race. Each has their own history. Each has their own unique approach. All want to be the fastest. But who should you root for? " },
    { src: "https://media.formula1.com/image/upload/t_16by9South/f_auto/q_auto/v1709392049/trackside-images/2024/F1_Grand_Prix_of_Bahrain/2053149561.jpg", alt: "F1 Car Close-up", description: "Start lights How does the F1 weekend work? What's F1 Sprint? And why is it called Formula 1? You've got questions – we've got answers..." },
    { src: "https://media.formula1.com/image/upload/t_16by9South/f_auto/q_auto/v1709459664/trackside-images/2024/F1_Grand_Prix_of_Bahrain/2055023690.jpg", alt: "F1 Podium Celebration", description: "Get up to speed F1 is fast! Day or night. Rain or shine. Our helpful guides explain everything you need to know about... everything you need to know!" },
    { src: "https://media.formula1.com/image/upload/f_auto,c_limit,w_960,q_auto/f_auto/q_auto/fom-website/Campaign/BGs/BGT%20F2%20F3%20Cars", alt: "F1 Car in Motion", description: "Capturing the speed and grace of F1" },
    { src: "https://images.unsplash.com/photo-1547834626-8a1e97824a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", alt: "F1 Car Detail", description: "The art and science of aerodynamics" },
    { src: "https://images.unsplash.com/photo-1516051733211-c05c8e8ed3d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", alt: "F1 Night Race", description: "The spectacle of F1 under the lights" },
    { src: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", alt: "F1 Steering Wheel", description: "The command center of an F1 car" },
  ]

  return (
    <motion.div 
      className="grid grid-cols-6 grid-rows-4 gap-0 h-[600px]"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.1
          }
        }
      }}
    >
      {images.map((image, index) => (
        <motion.div 
          key={index} 
          className={`relative overflow-hidden group ${
            index === 0 ? 'col-span-2 row-span-2' :
            index === 1 ? 'col-span-2 row-span-2' :
            index === 2 ? 'col-span-2 row-span-2' :
            index === 3 ? 'col-span-3 row-span-2' :
            index === 4 ? 'col-span-3 row-span-2' :
            ''
          }`}
          variants={{
            hidden: { 
              opacity: 0, 
              scale: 0.8, 
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              rotate: Math.random() * 30 - 15
            },
            visible: { 
              opacity: 1, 
              scale: 1, 
              x: 0, 
              y: 0, 
              rotate: 0,
              transition: { 
                type: "spring",
                stiffness: 100,
                damping: 15
              }
            }
          }}
        >
          <Image src={image.src || "/placeholder.svg"} alt={image.alt} layout="fill" objectFit="cover" />
          <motion.div 
            className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4"
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.p 
              className="text-white text-sm text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              {image.description}
            </motion.p>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default Content

