'use client';

import Image from 'next/image';
import { Flag, Calendar, Trophy, Users, Instagram, Twitter, Facebook, Youtube, Linkedin } from 'lucide-react';

interface Sponsor {
  name: string;
  logo: string;
}

const SponsorLogo: React.FC<{ sponsor: Sponsor; size?: string }> = ({ sponsor, size = 'normal' }) => (
  <div className={`transform hover:scale-105 transition-all duration-300 aspect-[2/1] ${
    size === 'small' ? 'w-4/5 mx-auto' : 
    size === 'extra-small' ? 'w-3/5 mx-auto' : 
    size === 'tiny' ? 'w-1/2 mx-auto' : ''
  }`}>
    <div className="w-full h-full bg-white flex items-center justify-center rounded-lg overflow-hidden p-2">
      <Image
        src={sponsor.logo || "/placeholder.svg"}
        alt={sponsor.name}
        width={size === 'small' ? 80 : size === 'extra-small' ? 60 : size === 'tiny' ? 40 : 100}
        height={size === 'small' ? 40 : size === 'extra-small' ? 30 : size === 'tiny' ? 20 : 50}
        className="object-contain w-full h-full"
      />
    </div>
  </div>
);

export const Footer: React.FC = () => {
  const sponsors: Sponsor[] = [
  { name: "Red Bull", logo: "/Redbulfooter.jpg" },
  { name: "Ferrari", logo: "/ferarifooter.jpg" },
  { name: "Mercedes", logo: "/mercedesfooter.jpg" },
  { name: "McLaren", logo: "/McLarenfooter.jpg" },
  { name: "Aston Martin", logo: "/astonmartinfooter.jpg" },
  { name: "Alpine", logo: "/alpinefooter.jpg" },
  { name: "Williams", logo: "/brotherfooter.jpg" },
  { name: "AlphaTauri", logo: "/alphataurifooter.jpg" },
  { name: "Alfa Romeo", logo: "/alfaromeofooter.jpg" },
  { name: "Haas", logo: "/hassfooter.jpg" },
  { name: "Pirelli", logo: "/pirellifooter.jpg" },
  { name: "DHL", logo: "/dhlfooter.jpg" },
  { name: "Aramco", logo: "/aramcofooter.jpg" },
  { name: "AWS", logo: "/awsfooter.jpg" },
  { name: "Rolex", logo: "/rolexfooter.jpg" },
  { name: "Heineken", logo: "/heinekenfooter.jpg" },
  // Add more sponsors as needed
  ];

  return (
    <footer className="relative bg-black backdrop-blur-sm text-white py-16">
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="flex flex-col items-center md:flex-row justify-between mb-12">
          <div className="flex items-center justify-center mb-8 md:mb-0 w-full md:w-auto h-16">
            <Image
              src="https://vectorseek.com/wp-content/uploads/2023/08/Fia-Formula-One-World-Championship-Logo-Vector.svg--300x124.png"
              alt="Formula 1 Logo"
              width={150}
              height={62}
              className="mb-4 md:mb-0"
            />
          </div>
          <div className="flex justify-center space-x-8 mb-8 md:mb-0 w-full md:w-auto">
            <a href="#" className="text-gray-300 hover:text-red-500 transition-colors duration-200">
              <Instagram className="w-8 h-8" />
            </a>
            <a href="#" className="text-gray-300 hover:text-red-500 transition-colors duration-200">
              <Twitter className="w-8 h-8" />
            </a>
            <a href="#" className="text-gray-300 hover:text-red-500 transition-colors duration-200">
              <Facebook className="w-8 h-8" />
            </a>
            <a href="#" className="text-gray-300 hover:text-red-500 transition-colors duration-200">
              <Youtube className="w-8 h-8" />
            </a>
            <a href="#" className="text-gray-300 hover:text-red-500 transition-colors duration-200">
              <Linkedin className="w-8 h-8" />
            </a>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-800">
          <h3 className="text-center text-4xl font-racing mb-8 text-transparent bg-clip-text bg-gradient-to-r from-gray-300/80 to-gray-100/80">OFFICIAL SPONSORS</h3>
          <div className="flex flex-col gap-4 pb-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 py-4">
              {sponsors.map((sponsor, index) => (
                <div key={index} className="aspect-[2/1] bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-2 flex items-center justify-center w-full h-20">
                  <Image
                    src={sponsor.logo || "/placeholder.svg"}
                    alt={sponsor.name}
                    width={80}
                    height={40}
                    className="object-contain w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="mailto:contact@racetrack.com" className="flex items-center hover:text-red-500 text-gray-300">
              <Calendar className="w-4 h-4 mr-2" />
              contact@racetrack.com
            </a>
            <a href="#" className="flex items-center hover:text-red-500 text-gray-300">
              <Trophy className="w-4 h-4 mr-2" />
              RaceTrack
            </a>
            <a href="#" className="flex items-center hover:text-red-500 text-gray-300">
              <Users className="w-4 h-4 mr-2" />
              @RaceTrack
            </a>
          </div>
          <div className="text-center mt-4">
            <p className="font-racing text-sm text-gray-400">&copy; 2023 RaceTrack. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

<style jsx>{`
  .font-racing {
    font-family: 'Racing Sans One', sans-serif;
  }
`}</style>
