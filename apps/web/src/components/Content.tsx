"use client"

import React, { useEffect } from "react"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const Content = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <div className="bg-black backdrop-filter backdrop-blur-sm text-white py-8 md:py-16">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-300/80 to-gray-100/80 font-racing"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          F1 2024 Best Moments
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-8 font-tech"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Experience the thrill of Formula 1 at iconic circuits around the world
        </motion.p>
        <motion.div className="relative" transition={{ type: "spring", stiffness: 120, damping: 20, duration: 0.8 }}>
          <div className="overflow-hidden" ref={ref}>
            <ImageCollage controls={controls} />
          </div>
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
    {
      src: "/content1.jpg",
      alt: "Max Verstappen",
      description: "Max Verstappen Roars for First 2024 Triumph in Bahrain",
    },
    { src: "/content2.jpg", alt: "F1 Car on Track", description: "Action-packed first half of the 2024 season" },
    { src: "/content3.jpg", alt: "F1 Pit Stop", description: "Mercedes continues with black on car livery" },
    { src: "/content4.jpg", alt: "F1 Race Start", description: "Who are the F1 teams?" },
    { src: "/content5.jpg", alt: "F1 Car Close-up", description: "How does the F1 weekend work?" },
  ]

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 lg:grid-rows-4 gap-4 lg:gap-0 h-auto lg:h-[600px]"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {images.map((image, index) => (
        <motion.div
          key={index}
          className={`relative overflow-hidden group h-64 sm:h-auto ${
            index === 0
              ? "lg:col-span-2 lg:row-span-2"
              : index === 1
                ? "lg:col-span-2 lg:row-span-2"
                : index === 2
                  ? "lg:col-span-2 lg:row-span-2"
                  : index === 3
                    ? "lg:col-span-3 lg:row-span-2"
                    : index === 4
                      ? "lg:col-span-3 lg:row-span-2"
                      : ""
          }`}
          variants={{
            hidden: {
              opacity: 0,
              scale: 0.8,
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              rotate: Math.random() * 30 - 15,
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
                damping: 15,
              },
            },
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
              className="text-white text-sm md:text-base text-center"
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

