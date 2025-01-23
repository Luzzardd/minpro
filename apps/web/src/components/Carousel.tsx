"use client"

import { useState, useEffect } from "react"
import { UserCircle } from "lucide-react"
import { GiCheckeredFlag, GiTicket, GiCalendar } from "react-icons/gi"
import Image from "next/image"
import Link from "next/link"

interface CarouselItem {
  id: number
  image: string
  alt: string
  title: string
  description: string
}

const items: CarouselItem[] = [
  {
    id: 1,
    image: "/carausel1.jpg",
    alt: "Red Racing Car",
    title: "If you have started, finish it until the end",
    description: "If you no longer go for a gap that exists, you no longer a racing driver",
  },
  {
    id: 2,
    image: "/carausel2.jpg",
    alt: "F1 Car on Track",
    title: "Formula 1",
    description: "World Championship racers from all over the world, compete and race their vehicles to win.",
  },
  {
    id: 3,
    image: "/carausel3.jpg",
    alt: "Pit Stop Action",
    title: "The most popular",
    description: "The greatest competition and put on an exciting show.",
  },
]

export default function EnhancedCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isNavbarVisible, setIsNavbarVisible] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
    }, 5000)

    const progressBar = document.querySelector(".bg-red-500") as HTMLElement
    if (progressBar) {
      progressBar.style.width = "0%"
      void progressBar.offsetWidth // force reflow to reset the animation
      progressBar.style.width = "100%"
    }

    return () => clearInterval(interval)
  }, [currentIndex])

  useEffect(() => {
    const timer = setTimeout(() => setIsNavbarVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length)
      } else if (event.key === "ArrowRight") {
        nextSlide()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide()
    }

    if (touchStart - touchEnd < -75) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length)
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <nav
        className={`absolute top-0 left-0 right-0 z-10 text-white p-4 transition-all duration-500 ease-in-out ${
          isNavbarVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent pointer-events-none"></div>
        <div className="container mx-auto flex justify-between items-center relative w-full px-4 py-2">
          <Link href="/" className="text-2xl font-bold tracking-wider flex items-center">
            <Image src="/logof1.png" alt="F1 Racing Logo" width={100} height={30} className="object-contain" />
          </Link>
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
          <div
            className={`md:flex space-x-6 items-center justify-end ${isMobileMenuOpen ? "flex flex-col absolute top-full right-0 bg-black/90 p-4 space-y-4" : "hidden"}`}
          >
            <NavIcon
              href="/create-event"
              label="Create Event"
              icon={GiCheckeredFlag}
              gradient="from-pink-400 to-pink-600"
            />
            <NavIcon href="/Tickets" label="Tickets" icon={GiTicket} gradient="from-violet-400 to-violet-600" />
            <NavIcon href="/EventList" label="Event List" icon={GiCalendar} gradient="from-amber-400 to-amber-600" />
            <NavIcon href="/Login" label="Login" icon={UserCircle} gradient="from-emerald-400 to-emerald-600" />
          </div>
        </div>
      </nav>

      <div
        className="relative w-full h-full"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-800">
          <div
            className="h-full bg-red-500 transition-all duration-[5s] ease-linear"
            style={{ width: `${((currentIndex + 1) / items.length) * 100}%` }}
          />
        </div>
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item) => (
            <div key={item.id} className="w-full h-full flex-shrink-0 relative">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.alt}
                fill
                className="object-cover brightness-75"
                sizes="100vw"
                priority={currentIndex === item.id - 1}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                <div className="relative text-center text-white px-4 max-w-lg">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 sm:mb-3 md:mb-5 animate-fade-in-up tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-gray-300/80 to-gray-100/80 font-racing">
                    {item.title}
                  </h2>
                  <p className="text-sm sm:text-base md:text-xl animate-fade-in-up animation-delay-300 font-light tracking-wide text-gray-300 font-tech">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

interface NavIconProps {
  href: string
  label: string
  icon: React.ElementType
  gradient: string
}

function NavIcon({ href, label, icon: Icon, gradient }: NavIconProps) {
  return (
    <Link href={href} className="flex flex-col items-center transition-all duration-300 group">
      <div
        className={`p-2 rounded-full bg-transparent group-hover:bg-gradient-to-br ${gradient} transition-all duration-300`}
      >
        {typeof Icon === "function" ? (
          <Icon className="w-6 h-6 text-white group-hover:text-white transition-colors duration-300" />
        ) : (
          <Icon size={24} className="text-white group-hover:text-white transition-colors duration-300" />
        )}
      </div>
      <span className="text-xs font-medium mt-1 transition-all duration-300 text-shadow group-hover:text-white">
        {label}
      </span>
    </Link>
  )
}

