'use client'

import { useState, useEffect } from 'react'

interface CarouselItem {
  id: number
  image: string
  alt: string
}

const items: CarouselItem[] = [
    { 
      id: 1, 
      image: 'https://picsum.photos/800/400?random=1', 
      alt: 'Slide 1' 
    },
    { 
      id: 2, 
      image: 'https://picsum.photos/800/400?random=2', 
      alt: 'Slide 2' 
    },
    { 
      id: 3, 
      image: 'https://picsum.photos/800/400?random=3', 
      alt: 'Slide 3' 
    },
  ];

export default function AutoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item) => (
            <div key={item.id} className="w-full flex-shrink-0">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.alt}
                className="w-full h-[calc(65vh-4rem)] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-8 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
