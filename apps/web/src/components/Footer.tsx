'use client'
import { FlagIcon, InstagramIcon, TwitterIcon, FacebookIcon, YoutubeIcon, MailIcon } from 'lucide-react'

export const Footer = () => {
  return <footer className="relative bg-gradient-to-br from-primary via-secondary to-accent text-primary-foreground py-16">
  <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-10"></div>
  <div className="container mx-auto px-4 relative z-10">
    <div className="flex flex-col md:flex-row justify-between items-center mb-12">
      <div className="flex items-center mb-8 md:mb-0">
        <FlagIcon className="mr-3 h-8 w-8" />
        <span className="font-racing text-2xl tracking-wider">MotoEvents</span>
      </div>
      <div className="flex space-x-6 mb-8 md:mb-0">
        <a href="#" className="hover:text-accent transition-colors duration-200"><InstagramIcon className="h-6 w-6" /></a>
        <a href="#" className="hover:text-accent transition-colors duration-200"><TwitterIcon className="h-6 w-6" /></a>
        <a href="#" className="hover:text-accent transition-colors duration-200"><FacebookIcon className="h-6 w-6" /></a>
      </div>
    </div>

    <div className="border-t border-primary-foreground/20 pt-12">
      <h3 className="text-center text-3xl font-racing mb-12">Official Sponsors</h3>
      <div className="flex flex-wrap justify-center items-center gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="transform hover:scale-105 transition-all duration-300">
            <div className="w-[120px] h-[60px] bg-primary/20 flex items-center justify-center text-primary font-racing">
              Sponsor {i}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="mt-8 pt-8 border-t border-primary-foreground/20">
      <div className="flex flex-wrap justify-center gap-4 text-sm">
        <a href="mailto:contact@motoevents.com" className="flex items-center hover:text-accent">
          <MailIcon className="w-4 h-4 mr-2" />
          contact@motoevents.com
        </a>
        <a href="#" className="flex items-center hover:text-accent">
          <FacebookIcon className="w-4 h-4 mr-2" />
          MotoEvents
        </a>
        <a href="#" className="flex items-center hover:text-accent">
          <InstagramIcon className="w-4 h-4 mr-2" />
          @MotoEvents
        </a>
        <a href="#" className="flex items-center hover:text-accent">
          <YoutubeIcon className="w-4 h-4 mr-2" />
          Official MotoEvents
        </a>
      </div>
      <div className="text-center mt-4">
        <p className="font-racing text-sm">&copy; 2023 MotoEvents. All rights reserved.</p>
      </div>
    </div>
  </div>
</footer>

};
