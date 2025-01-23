'use client'

import Image from "next/image"

export default function F1Ticket() {
  return (
    <div className="justify-center w-full max-w-4xl h-64 bg-gradient-to-r from-gray-800/90 to-gray-900/90 text-white overflow-hidden rounded-lg shadow-xl flex">
      <div className="absolute inset-0 bg-[url('/imageticket.jpg')] bg-cover bg-center opacity-20"></div>
      <div className="relative p-6 flex-1 flex z-10">
        <div className="flex-1 flex flex-col justify-between">
          {/* Left Column */}
          <div>
            {/* Top Section with Event Info */}
            <div className="flex justify-between items-start mb-4">
              <div className="space-y-1">
                <div className="text-xs">North East Asia - Sharing</div>
                <h1 className="text-xl font-bold">FORMULA 1</h1>
                <h2 className="text-lg font-semibold text-[#29c4a2]"></h2>FORMULA 1 AUSTRALIAN GRAND PRIX 2024
                <div className="text-sm">MELBOURNE</div>
                <div className="text-sm">March 21, 2024</div>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-white bg-opacity-10 rounded px-2 py-1 text-xs">(15) YEARS ANNIVERSARY</div>
                <Image
                  src="/logoevent.jpg"
                  alt="Formula 1 "
                  width={90}
                  height={40}
                  className="opacity-80"
                />
              </div>
            </div>

            {/* Warning Section */}
            <div className="flex items-center gap-2 mb-4 bg-red-500 bg-opacity-10 p-2 rounded">
              <div className="w-6 h-6 rounded-full border-2 border-red-500 flex items-center justify-center text-red-500">
                ⚠
              </div>
              <span className="text-xs">NO OUTSIDE FOOD ALLOWED | GATES OPEN AT 9AM ONWARDS</span>
            </div>
          </div>

          {/* Footer Text */}
          <div className="text-center font-mono text-sm">SEE YOU AGAIN IN MALAYSIA FOR UMY 2014</div>
        </div>

        <div className="flex-1 flex flex-col justify-between pl-6">
          {/* Right Column */}

          {/* Ticket Details */}
          <div className="space-y-2">
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <div className="text-xs text-gray-400">Gate:</div>
                <div className="font-mono">Gate K1</div>
              </div>
              <div>
                <div className="text-xs text-gray-400">Block:</div>
                <div className="font-mono">GOLD - BLOCK K</div>
              </div>
              <div>
                <div className="text-xs text-gray-400">Row:</div>
                <div className="font-mono">L</div>
              </div>
              <div>
                <div className="text-xs text-gray-400">Seat:</div>
                <div className="font-mono">14</div>
              </div>
            </div>

            {/* Barcode Section */}
            <div className="pt-2 border-t border-gray-700">
              <div className="font-mono text-xs mb-1">ONE TICKET</div>
              <div className="bg-white p-2 rounded">
                <div className="flex items-center justify-between h-12 w-full">
                  {[...Array(30)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-full ${i % 3 === 0 ? "w-1 bg-black" : "w-[1px] bg-black"} ${
                        i % 2 === 0 ? "h-full" : "h-3/4 self-end"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
              <div className="font-mono text-xs mt-1">B04-013C 139262616</div>
            </div>
          </div>
        </div>
      </div>

      {/* Red Stripe Decoration */}
      <div className="absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-red-600 to-transparent opacity-20" />
    </div>
  )
}

