'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, ChevronRight, ChevronLeft } from 'lucide-react';

function CardSlider() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentBreakpoint, setCurrentBreakpoint] = useState('sm');

  useEffect(() => {
    const handleResize = () => {
      setCurrentBreakpoint(window.innerWidth >= 768 ? 'md' : 'sm');
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const totalSlides = races.length;
      const cardWidth = currentBreakpoint === 'md' ? 326 : 284;
      const slidesToShow = Math.floor(
        sliderRef.current.clientWidth / cardWidth,
      );
      const maxSlide = totalSlides - slidesToShow;

      if (direction === 'left') {
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      } else {
        setCurrentSlide((prev) => Math.min(prev + 1, maxSlide));
      }
    }
  };

  const races = [
    {
      id: 1,
      name: 'FORMULA 1 BAHRAIN GRAND PRIX 2024',
      date: 'October 13, 2024 - 2:00 PM',
      image:
        '/bahrain.jpg',
      price: 299,
      flag: '/flagbahrain.jpg',
    },
    {
      id: 2,
      name: 'FORMULA 1 STC SAUDI ARABIAN GRAND PRIX 2024',
      date: 'September 8, 2024 - 2:00 PM',
      image:
        '/saudiarabia.jpg',
      price: 320,
      flag: '/flagsaudiarabia.jpg',
    },
    {
      id: 3,
      name: 'FORMULA 1 AUSTRALIAN GRAND PRIX 2024',
      date: 'March 21, 2024 - 3:00 PM',
      image:
        '/australia.jpg',
      price: 350,
      flag: '/flagaustralia.jpg',
    },
    {
      id: 4,
      name: 'FORMULA 1 LENOVO JAPANESE GRAND PRIX 2024',
      date: 'September 22, 2024 - 8:00 PM',
      image:
        '/japan.jpg',
      price: 400,
      flag: '/flagjapan.jpg',
    },
    {
      id: 5,
      name: 'FORMULA 1 HEINEKEN CHINESE GRAND PRIX 2024',
      date: 'June 2, 2024 - 3:00 PM',
      image:
        '/china.jpg',
      price: 380,
      flag: '/flagchina.jpg',
    },
    {
      id: 6,
      name: 'FORMULA 1 CRYPTO.COM MIAMI GRAND PRIX 2024',
      date: 'July 7, 2024 - 3:00 PM',
      image:
        '/miami.jpg',
      price: 450,
      flag: '/flagmiami.jpg',
    },
    {
      id: 7,
      name: "FORMULA 1 AWS GRAN PREMIO DEL MADE IN ITALY E DELL'EMILIA-ROMAGNA 2024",
      date: 'June 9, 2024 - 4:00 PM ',
      image:
        '/itali.jpg',
      price: 390,
      flag: '/flagitali.jpg',
    },
    {
      id: 8,
      name: 'FORMULA 1 GRAND PRIX DE MONACO 2024',
      date: 'May 26, 2024 - 2:00 PM',
      image:
        '/monaco.jpg',
      price: 500,
      flag: '/flagmonaco.jpg',
    },
    {
      id: 9,
      name: 'FORMULA 1 PIRELLI GRAND PRIX DU CANADA 2024',
      date: 'November 24, 2024 - 2:00 PM',
      image:
        '/canada.jpg',
      price: 420,
      flag: '/flagcanada.jpg',
    },
    {
      id: 10,
      name: 'FORMULA 1 ARAMCO GRAN PREMIO DE ESPAÑA 2024',
      date: 'November 17, 2024 - 2:00 PM',
      image:
        '/spain.jpg',
      price: 370,
      flag: '/flagspain.jpg',
    },
    {
      id: 11,
      name: 'FORMULA 1 MSC CRUISES AUSTRIAN GRAND PRIX 2024',
      date: 'November 3, 2024 - 2:00 PM',
      image:
        '/austrian.jpg',
      price: 360,
      flag: '/flagaustrian.jpg',
    },
    {
      id: 12,
      name: 'FORMULA 1 HEINEKEN SILVER LAS VEGAS GRAND PRIX 2024',
      date: 'October 27, 2024 - 2:00 PM',
      image:
        '/lasvegas.jpg',
      price: 410,
      flag: '/flagusa.jpg',
    },
  ];

  return (
    <div className="relative text-white py-20 backdrop-blur-sm bg-black">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gray-300/80 to-gray-100/80 font-racing">
            FORMULA 1 EXPERIENCE
          </h2>
          <p className="text-xl text-gray-300 font-tech">
            Experience the thrill of Formula 1 at iconic circuits worldwide
          </p>
        </motion.div>
        <div className="mb-8 flex justify-between items-center">
          <div className="flex space-x-4">
            <button
              onClick={() => scroll('left')}
              className="px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-md hover:from-red-700 hover:to-red-800 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-md hover:from-red-700 hover:to-red-800 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          <button
            onClick={() => alert('Redirecting to ticket purchase page...')}
            className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-md hover:from-red-700 hover:to-red-800 transition-colors duration-300 shadow-md hover:shadow-lg flex items-center font-racing text-lg"
          >
            Reserve Your Seat
          </button>
        </div>
        <div className="overflow-hidden" ref={sliderRef}>
          <div
            className="grid grid-flow-col auto-cols-[280px] md:auto-cols-[320px] gap-4 md:gap-6 pb-8 transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * (currentBreakpoint === 'md' ? 326 : 284)}px)`,
              width: `${races.length * (currentBreakpoint === 'md' ? 326 : 284)}px`,
            }}
          >
            {races.map((race) => (
              <motion.div
                key={race.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <RaceCard race={race} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Racing+Sans+One&family=Audiowide&display=swap');
        .font-racing {
          font-family: 'Racing Sans One', cursive;
        }
        .font-tech {
          font-family: 'Orbitron', sans-serif;
        }
        .font-audiowide {
          font-family: 'Audiowide', cursive;
        }
      `}</style>
    </div>
  );
}

interface Race {
  id: number;
  name: string;
  date: string;
  image: string;
  price: number;
  flag: string;
}

function RaceCard({ race }: { race: Race }) {
  const getYear = (dateString: string): string => {
    const date = new Date(dateString.split(' - ')[0]);
    return isNaN(date.getFullYear())
      ? 'Year not available'
      : date.getFullYear().toString();
  };

  return (
    <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 w-[280px] h-[400px] flex flex-col border border-transparent backdrop-blur-sm p-5">
      <div className="h-[200px] relative">
        <Image
          src={race.image || '/placeholder.svg'}
          alt={`${race.name} Grand Prix`}
          fill
          className="object-cover object-center"
        />
        <div className="absolute top-2 left-2 rounded-full overflow-hidden">
          <Image
            src={race.flag || '/placeholder.svg'}
            alt={`${race.name} flag`}
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
      </div>
      <div className="space-y-4 flex-grow">
        <div>
          <h3 className="text-lg font-bold text-white font-audiowide leading-tight">
            {race.name}
          </h3>
          <p className="text-blue-300 font-tech text-sm mt-1">
            {getYear(race.date)}
          </p>
        </div>
        <p className="text-gray-300 flex items-center font-tech text-sm">
          <Calendar className="w-4 h-4 mr-2 text-blue-400" />
          {race.date}
        </p>
      </div>
      <div className="mt-auto pt-4 border-t border-gray-700">
        <div className="flex justify-between items-center mb-3">
          <span className="text-gray-400 font-tech text-sm">Starting from</span>
          <span className="text-2xl font-bold text-white font-racing">
            {typeof race.price === 'number' && !isNaN(race.price)
              ? `$${race.price.toFixed(2)}`
              : 'Price unavailable'}
          </span>
        </div>
        <button className="w-full px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-md hover:from-red-700 hover:to-red-800 transition-colors duration-300 font-racing tracking-wide flex items-center justify-center">
          View more
          <ChevronRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
}

export default CardSlider;