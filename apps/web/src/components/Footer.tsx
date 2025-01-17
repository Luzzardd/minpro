'use client'

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-red-600 via-orange-600 to-yellow-500 text-white py-16">
      {/* Latar belakang dengan efek transparansi */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Bagian logo */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="flex items-center mb-8 md:mb-0">
            <span className="font-racing text-2xl tracking-wider text-white">MotoEvents</span>
          </div>
          <div className="flex space-x-6 mb-8 md:mb-0">
            <a href="#" className="text-white hover:text-yellow-500 transition-colors duration-200">
              Instagram
            </a>
            <a href="#" className="text-white hover:text-yellow-500 transition-colors duration-200">
              Twitter
            </a>
            <a href="#" className="text-white hover:text-yellow-500 transition-colors duration-200">
              Facebook
            </a>
          </div>
        </div>

        {/* Bagian Official Sponsors */}
        <div className="pt-12">
          <h3 className="text-center text-3xl font-racing mb-12 text-white">Official Sponsors</h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="transform hover:scale-105 transition-all duration-300">
                <div className="w-[120px] h-[60px] bg-white/20 flex items-center justify-center text-white font-racing">
                  Sponsor {i}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bagian Kontak dan Hak Cipta */}
        <div className="mt-8 pt-8">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="mailto:contact@motoevents.com" className="flex items-center hover:text-yellow-500 text-white">
              contact@motoevents.com
            </a>
            <a href="#" className="flex items-center hover:text-yellow-500 text-white">
              MotoEvents
            </a>
            <a href="#" className="flex items-center hover:text-yellow-500 text-white">
              @MotoEvents
            </a>
            <a href="#" className="flex items-center hover:text-yellow-500 text-white">
              Official MotoEvents
            </a>
          </div>
          <div className="text-center mt-4">
            <p className="font-racing text-sm text-white">&copy; 2023 MotoEvents. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
