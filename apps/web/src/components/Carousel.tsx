'use client';

import { useState, useEffect } from 'react';
import {
  Home,
  Search,
  Bell,
  UserCircle,
  Flag,
  Gauge,
  Trophy,
  Users,
  Clock,
  Map,
  HardHatIcon as Helmet,
} from 'lucide-react';
import Image from 'next/image';
import { HeaderOnly } from './HeaderNoLogin';

interface CarouselItem {
  id: number;
  image: string;
  alt: string;
  title: string;
  description: string;
}

const items: CarouselItem[] = [
  {
    id: 1,
    image:
      'https://motorsportmagazine.b-cdn.net/wp-content/uploads/2023/03/Red-lights-on-ahead-of-2023-F1-Bahrain-Grand-Prix-start.jpg',
    alt: 'Red Racing Car',
    title: 'If you have started,finish it until the end',
    description:
      'If you no longer go for a gap that exists,you no longer a racing driver',
  },
  {
    id: 2,
    image:
      'https://library.sportingnews.com/styles/twitter_card_120x120/s3/2024-02/F1%20drivers%20photocall%202024%20022324.jpg?itok=syymE6OE',
    alt: 'F1 Car on Track',
    title: 'Formula 1',
    description:
      'World Championship racers from all over world,compete and race their vehicles to win.',
  },
  {
    id: 3,
    image:
      'https://sportskhabri.com/wp-content/uploads/2024/05/EMILIA-ROMAGNA-GRAND-PRIX-2024-REVIEW.jpg',
    alt: 'Pit Stop Action',
    title: 'The most popular',
    description: 'The graetest competition and put on an exciting show.',
  },
];

export default function EnhancedCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000); // Change slide every 5 seconds

    // Reset progress bar
    const progressBar = document.querySelector('.bg-red-500') as HTMLElement;
    if (progressBar) {
      progressBar.style.width = '0%';
      void progressBar.offsetWidth; // Trigger reflow
      progressBar.style.width = '100%';
    }

    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    const timer = setTimeout(() => setIsNavbarVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        setCurrentIndex(
          (prevIndex) => (prevIndex - 1 + items.length) % items.length,
        );
      } else if (event.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide();
    }

    if (touchStart - touchEnd < -75) {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + items.length) % items.length,
      );
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Navbar */}
      <nav
        className={`absolute top-0 left-0 right-0 z-10 text-white p-4 md:p-6 transition-all duration-500 ease-in-out ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent pointer-events-none"></div>
        <div className="container mx-auto flex justify-between items-center relative">
          <a
            href="#"
            className="text-2xl font-bold tracking-wider flex items-center text-shadow"
          >
            <Image
              src="https://vectorseek.com/wp-content/uploads/2023/08/Fia-Formula-One-World-Championship-Logo-Vector.svg-.png"
              alt="F1 Racing Logo"
              width={150}
              height={40}
              className="object-contain"
            />
          </a>
          <div className="flex space-x-4 md:space-x-8">
            <NavIcon
              href="#"
              icon={Flag}
              label="Races"
              gradient="from-red-400 to-red-600"
            />
            <NavIcon
              href="#"
              icon={Gauge}
              label="Stats"
              gradient="from-blue-400 to-blue-600"
            />
            <NavIcon
              href="#"
              icon={Trophy}
              label="Champions"
              gradient="from-yellow-400 to-yellow-600"
            />
            <NavIcon
              href="#"
              icon={Clock}
              label="Schedule"
              gradient="from-green-400 to-green-600"
            />
            <NavIcon
              href="#"
              icon={Map}
              label="Circuits"
              gradient="from-purple-400 to-purple-600"
            />
            <NavIcon 
              href='/Login'
              icon={Helmet}
              label="Account"
              gradient="from-orange-400 to-orange-600"
            />
          </div>
        </div>
      </nav>

      {/* Carousel */}
      <div
        className="relative w-full h-full"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Progress bar */}
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
                src={item.image || '/placeholder.svg'}
                alt={item.alt}
                fill
                className="object-cover brightness-75"
                sizes="100vw"
                priority={currentIndex === item.id - 1}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                <div className="relative text-center text-white px-4 max-w-lg">
                  <h2 className="text-5xl md:text-6xl font-extrabold mb-3 md:mb-5 animate-fade-in-up tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-gray-300/80 to-gray-100/80 font-racing">
                    {item.title}
                  </h2>
                  <p className="text-base md:text-xl animate-fade-in-up animation-delay-300 font-light tracking-wide text-gray-300 font-tech">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
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
      <style jsx>{`
        .text-shadow {
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }
        .drop-shadow {
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}

interface NavIconProps {
  href: string;
  icon: React.ElementType;
  label: string;
  gradient: string;
}

function NavIcon({ href, icon: Icon, label, gradient }: NavIconProps) {
  return (
    <a
      href={href}
      className="group flex flex-col items-center transition-all duration-300"
    >
      <div className="relative p-3 rounded-full bg-black/30 backdrop-blur-md transition-all duration-300 group-hover:bg-black/50 group-hover:shadow-lg overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
        ></div>
        <Icon
          size={24}
          className="relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
        />
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
      </div>
      <span className="text-xs mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 text-shadow">
        {label}
      </span>
    </a>
  );
}