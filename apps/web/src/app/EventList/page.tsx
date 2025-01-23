"use client"

import Image from "next/image"
import Link from "next/link"
import { Search, ChevronDown, Menu } from "lucide-react"
import { useState } from "react"

interface ExploreCard {
  title: string
  description: string
  image: string
  link: string
  flag: string
  raceTime?: string
}

const exploreCards: ExploreCard[] = [
  {
    title: "FORMULA 1 AUSTRALIAN GRAND PRIX 2024",
    description: "Melbourne, Australia",
    image: "/australia.jpg",
    link: "/australian-gp",
    flag: "/flagaustralia.jpg",
    raceTime: "March 21, 2024 - 3:00 PM AEST",
  },
  {
    title: "FORMULA 1 GRAND PRIX DE MONACO 2024",
    description: "Monte Carlo, Monaco",
    image: "/monaco.jpg",
    link: "/monaco-gp",
    flag: "/flagmonaco.jpg",
    raceTime: "May 26, 2024 - 2:00 PM CEST",
  },
  {
    title: "FORMULA 1 CRYPTO.COM MIAMI GRAND PRIX 2024",
    description: "Miami, Florida",
    image: "/miami.jpg",
    link: "/british-gp",
    flag: "/flagmiami.jpg",
    raceTime: "July 7, 2024 - 3:00 PM BST",
  },
  {
    title: "FORMULA 1 STC SAUDI ARABIAN GRAND PRIX 2024",
    description: "Jeddah, Saudi Arabia",
    image: "/saudiarabia.jpg",
    link: "/saudiarabia-gp",
    flag: "/flagsaudiarabia.jpg",
    raceTime: "September 8, 2024 - 2:00 PM CEST",
  },
  {
    title: "FORMULA 1 LENOVO JAPANESE GRAND PRIX 2024",
    description: "Suzuka, Japan",
    image: "/japan.jpg",
    link: "/japanese-gp",
    flag: "/flagjapan.jpg",
    raceTime: "September 22, 2024 - 8:00 PM SGT",
  },
  {
    title: "FORMULA 1 BAHRAIN GRAND PRIX 2024",
    description: "Sakhir, Bahrain",
    image: "/bahrain.jpg",
    link: "/japanese-gp",
    flag: "/flagbahrain.jpg",
    raceTime: "October 13, 2024 - 2:00 PM JST",
  },
  {
    title: "FORMULA 1 HEINEKEN SILVER LAS VEGAS GRAND PRIX 2024",
    description: "Las Vegas, Nevada",
    image: "/lasvegas.jpg",
    link: "/lasvegas-gp",
    flag: "/flagusa.jpg",
    raceTime: "October 27, 2024 - 2:00 PM CDT",
  },
  {
    title: "FORMULA 1 MSC CRUISES AUSTRIAN GRAND PRIX 2024",
    description: "Spielberg, Austria",
    image: "/austrian.jpg",
    link: "/austrian-gp",
    flag: "/flagaustrian.jpg",
    raceTime: "November 3, 2024 - 2:00 PM CST",
  },
  {
    title: "FORMULA 1 ARAMCO GRAN PREMIO DE ESPAÑA 2024",
    description: "Barcelona, Spain",
    image: "/spain.jpg",
    link: "/spain-gp",
    flag: "/flagspain.jpg",
    raceTime: "November 17, 2024 - 2:00 PM BRT",
  },
  {
    title: "FORMULA 1 PIRELLI GRAND PRIX DU CANADA 2024",
    description: "Montréal, Canada",
    image: "/canada.jpg",
    link: "/canada-gp",
    flag: "/flagcanada.jpg",
    raceTime: "November 24, 2024 - 2:00 PM GST",
  },
  {
    title: "FORMULA 1 HEINEKEN CHINESE GRAND PRIX 2024",
    description: "Shangai, China",
    image: "/china.jpg",
    link: "/china-gp",
    flag: "/flagchina.jpg",
    raceTime: "June 2, 2024 - 3:00 PM CEST",
  },
  {
    title: "FORMULA 1 AWS GRAN PREMIO DEL MADE IN ITALY E DELL'EMILIA-ROMAGNA 2024",
    description: "Imola, Italy",
    image: "/itali.jpg",
    link: "/italy-gp",
    flag: "/flagitali.jpg",
    raceTime: "June 9, 2024 - 4:00 PM EDT",
  },
]

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-[#000000] text-white">
      {/* NavBar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-red-600/80 to-red-700/70 backdrop-blur-sm py-4 px-4 md:px-6 transition-all duration-300 ease-in-out shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 relative">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logoevent.jpg"
              alt="F1® Experiences"
              width={150}
              height={30}
              className="h-8 w-auto"
            />
          </Link>

          <div className="hidden md:flex flex-1 items-center justify-center">
            <div className="relative w-full max-w-xl group">
              <input
                type="search"
                placeholder="Search experiences..."
                className="w-full pl-12 pr-4 py-2 rounded-full bg-white/20 border-2 border-transparent text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300 ease-in-out text-sm"
              />
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 group-hover:text-white transition-colors duration-300"
                size={18}
              />
            </div>
          </div>

          <div className="hidden md:block relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center space-x-1 text-white hover:text-white/80 transition-colors duration-200"
            >
              <span>Categories</span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  {["Races", "Experiences", "Hospitality", "Packages"].map((item) => (
                    <Link
                      key={item}
                      href={`/${item.toLowerCase()}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <input
              type="search"
              placeholder="Search experiences..."
              className="w-full pl-12 pr-4 py-2 rounded-full bg-white/20 border-2 border-transparent text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300 ease-in-out text-sm mb-4"
            />
            <div className="space-y-2">
              {["Races", "Experiences", "Hospitality", "Packages"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="block px-4 py-2 text-sm text-white hover:bg-white/10 rounded-md"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] md:h-[60vh] md:min-h-[680px] flex items-center justify-center pt-16 md:pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${encodeURI("/event.jpg")})`,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 text-center">
            <h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
                style={{ animation: "slideDown 1s ease-out" }}
              >
                F1<sup className="text-[0.5em] align-super">®</sup> Experiences
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Explore More Section */}
      <section className="pt-0 pb-16 md:pb-24">
        <div className="h-16 md:h-24 bg-gradient-to-b from-black/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative -mt-8 md:-mt-12">
          <h2 className="text-4xl md:text-7xl font-extrabold tracking-tight text-center md:absolute md:-left-4 md:top-1/2 md:transform md:-translate-y-1/2 md:-rotate-90 md:origin-top-left md:whitespace-nowrap mb-8 md:mb-0">
            <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent px-2 md:px-4 py-1 md:py-2 relative z-10 inline-block">
              EXPLORE MORE
            </span>
            <span className="absolute inset-0 bg-black/20 blur-lg -z-10"></span>
          </h2>
          <div className="md:ml-16 pt-4 relative">
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-red-500 rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-500 rounded-full opacity-5 blur-3xl"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {exploreCards.map((card, index) => (
                <Link key={index} href={card.link} className="flex flex-col h-full">
                  <div className="group bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col h-full border border-gray-700">
                    <div className="relative aspect-[28/20]">
                      <Image src={card.image || "/placeholder.svg"} alt={card.title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4">
                        <div className="flex items-center">
                          <Image
                            src={card.flag || "/placeholder.svg"}
                            alt={`${card.title} flag`}
                            width={24}
                            height={16}
                            className="mr-2"
                          />
                          <span className="text-white font-semibold text-sm md:text-base">{card.title}</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 md:p-6 flex flex-col justify-between flex-grow bg-gradient-to-br from-gray-800 to-gray-900">
                      <div>
                        <h3 className="text-lg md:text-xl font-bold mb-2 text-white">{card.title}</h3>
                        <div className="w-12 md:w-16 h-1 bg-red-600 mb-3 md:mb-4"></div>
                        <p className="text-xs md:text-sm text-gray-300 mb-2">{card.description}</p>
                        <p className="text-xs text-gray-400">Race Time: {card.raceTime || "TBA"}</p>
                      </div>
                      <div className="flex items-center mt-4">
                        <button className="w-full bg-red-600 text-white px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ease-in-out hover:bg-red-700 hover:shadow-lg transform hover:-translate-y-1 group-hover:scale-105 text-center">
                          View More
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        @keyframes slideDown {
          0% { transform: translateY(-100%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </main>
  )
}

