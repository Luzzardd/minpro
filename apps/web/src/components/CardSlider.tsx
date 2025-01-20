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
      date: '28 Feb - 02 Mar',
      image:
        'https://assets.quintevents.com/m/3c8309ba58064714/72_DPI_WEB-F1E-Bahrain-2024-Atmosphere-1.jpg',
      price: 299,
      flag: 'https://d2xpg1khvwxlf1.cloudfront.net/production/images/original/11782-F1-Experiences-Bahrain-Flag-06a6d123b66b68e5e8cc2551a6766558.jpg',
    },
    {
      id: 2,
      name: 'FORMULA 1 STC SAUDI ARABIAN GRAND PRIX 2024',
      date: '06 - 08 Mar',
      image:
        'https://assets.quintevents.com/m/168cfd4e02668ef4/72_DPI_WEB-F1E-Saudi-Arabia-2023-Circuit-14.jpg',
      price: 320,
      flag: 'https://d2xpg1khvwxlf1.cloudfront.net/production/images/original/35997-saudia-flag-ed3f609dedf1ae67ce77c11a4f9029ec.jpg',
    },
    {
      id: 3,
      name: 'FORMULA 1 AUSTRALIAN GRAND PRIX 2024',
      date: '21 - 23 Mar',
      image:
        'https://assets.quintevents.com/m/6f05a5421dc6c34f/72_DPI_WEB-F1E-Australia-2024-Melbourne-Walk-01.jpg',
      price: 350,
      flag: 'https://d2xpg1khvwxlf1.cloudfront.net/production/images/original/11779-F1-Experiences-Australia-Flag-4814265bf3693e1de8a5e3dd3804df00.jpg',
    },
    {
      id: 4,
      name: 'FORMULA 1 LENOVO JAPANESE GRAND PRIX 2024',
      date: '04 - 06 Apr',
      image:
        'https://assets.quintevents.com/m/5ea45cd1135f5e5f/72_DPI_WEB-F1E-Japan-2024-Atmosphere-2.jpg',
      price: 400,
      flag: 'https://d2xpg1khvwxlf1.cloudfront.net/production/images/original/11787-F1-Experiences-Japan-Flag-5970d6f199ed3fd21b15948d02626d55.jpg',
    },
    {
      id: 5,
      name: 'FORMULA 1 HEINEKEN CHINESE GRAND PRIX 2024',
      date: '18 - 20 Apr',
      image:
        'https://assets.quintevents.com/m/6ec073b5a3c98a00/72_DPI_WEB-F1E-China-2024-Atmosphere-05.jpg',
      price: 380,
      flag: 'https://d2xpg1khvwxlf1.cloudfront.net/production/images/original/11781-F1-Experiences-China-Flag-68290c466ab81d52e528de49945283e3.gif',
    },
    {
      id: 6,
      name: 'FORMULA 1 CRYPTO.COM MIAMI GRAND PRIX 2024',
      date: '02 - 04 May',
      image:
        'https://assets.quintevents.com/m/7e6472eba46ae3b6/72_DPI_WEB-F1E-Miami-2022-Atmosphere-1.jpg',
      price: 450,
      flag: 'https://d2xpg1khvwxlf1.cloudfront.net/production/images/original/11786-F1-Experiences-United-States-Flag-a02dcc4cdc47edb9ac2cdd960c6a11f7.jpg',
    },
    {
      id: 7,
      name: "FORMULA 1 AWS GRAN PREMIO DEL MADE IN ITALY E DELL'EMILIA-ROMAGNA 2024",
      date: '16 - 18 May',
      image:
        'https://assets.quintevents.com/m/5f12fdcdeb09ca8/72_DPI_WEB-F1E-Imola-2024-City-Atmosphere.jpg',
      price: 390,
      flag: 'https://d2xpg1khvwxlf1.cloudfront.net/production/images/original/11789-F1-Experiences-Italy-Flag-4f122d0ebc49ea69ac8b91c6867226c5.jpg',
    },
    {
      id: 8,
      name: 'FORMULA 1 GRAND PRIX DE MONACO 2024',
      date: '23 - 25 May',
      image:
        'https://assets.quintevents.com/m/1627a5c7473efc15/72_DPI_WEB-F1E-Monaco-2024-Circuit-02.jpg',
      price: 500,
      flag: 'https://d2xpg1khvwxlf1.cloudfront.net/production/images/original/11796-F1-Experiences-Monaco-Flag-af29faae5e17f8e0cfb1df7b76554a53.jpg',
    },
    {
      id: 9,
      name: 'FORMULA 1 PIRELLI GRAND PRIX DU CANADA 2024',
      date: '06 - 08 Jun',
      image:
        'https://assets.quintevents.com/m/411e00aa17b5593d/72_DPI_auto-F1E-Canada-2023-Grandstand-24-1.jpg',
      price: 420,
      flag: 'https://d2xpg1khvwxlf1.cloudfront.net/production/images/original/11795-F1-Experiences-Canada-Flag-7cbf4f47837145f98657e0b0040375c5.jpg',
    },
    {
      id: 10,
      name: 'FORMULA 1 ARAMCO GRAN PREMIO DE ESPAÑA 2024',
      date: '20 - 22 Jun',
      image:
        'https://assets.quintevents.com/m/2cc0cce9453d8dfb/72_DPI_WEB-F1E-Spain-2024-Barcelona-City.jpg',
      price: 370,
      flag: 'https://d2xpg1khvwxlf1.cloudfront.net/production/images/original/11797-F1-Experiences-Spain-Flag-520905b7bb1a264177bcd630b71b84b2.gif',
    },
    {
      id: 11,
      name: 'FORMULA 1 MSC CRUISES AUSTRIAN GRAND PRIX 2024',
      date: '27 - 29 Jun',
      image:
        'https://assets.quintevents.com/m/575b826a25787f45/72_DPI_WEB-F1E-Austria-2024-Circuit-Atmosphere-16.jpg',
      price: 360,
      flag: 'https://d2xpg1khvwxlf1.cloudfront.net/production/images/original/11793-F1-Experiences-Austria-Flag-f40682caa57d76676396c13bf0c9846c.gif',
    },
    {
      id: 12,
      name: 'FORMULA 1 HEINEKEN SILVER LAS VEGAS GRAND PRIX 2024',
      date: '04 - 06 Jul',
      image:
        'https://assets.quintevents.com/m/6979609dc0a11b38/72_DPI_WEB-F1E-Las-Vegas-2023-Circuit-Car.jpg',
      price: 410,
      flag: 'https://via.placeholder.com/40',
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
          Book Now
          <ChevronRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
}

export default CardSlider;
