'use client';  // Mark the component as a Client Component

import React, { useState } from 'react';
import './../app/page.module.css';

function CardSlider() {
  // State to manage selected country
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  // Explicitly typing the event parameter
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div className="relative bg-gradient-to-br from-red-900 via-red-900 to-orange-700 min-h-screen flex items-center justify-center p-6 relative">

      {/* Dropdown Kategori */}
      <div className="absolute top-6 right-6 z-50">
        <div className="relative">
          <label htmlFor="country-select" className="block text-sm font-medium text-white mb-2">
            Select an option
          </label>
          <select
            id="country-select"
            name="country"
            className="block w-48 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={selectedCountry}
            onChange={handleChange}
          >
            <option value="" disabled>
              Choose a country
            </option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="IN">India</option>
            <option value="AU">Australia</option>
            <option value="GB">United Kingdom</option>
          </select>
        </div>
      </div>

      {/* Container Slider */}
      <div className="w-full max-w-7xl relative overflow-x-auto flex gap-8 snap-x snap-mandatory scroll-smooth scrollbar-hide">
        
        {/* Card 1 */}
        <div className="flex flex-col max-w-[500px] snap-start bg-gradient-to-br from-gray-900 via-red-900 to-orange-800 shadow-2xl rounded-lg overflow-hidden">
  <img
    className="w-full h-auto object-cover rounded-lg"
    src="https://beritabalap.com/wp-content/uploads/2020/11/Banner-ICP-2020-700x400.jpg"
    alt="Team"
  />
  <div className="p-6">
    <h3 className="text-2xl font-semibold mb-2 text-white">Produk 1</h3>
    <p className="text-gray-200 mb-4">
      Deskripsi singkat produk 1. Produk ini menawarkan kualitas terbaik dengan harga yang terjangkau.
    </p>
    <p className="text-blue-600 font-bold text-lg mb-4">Rp 100.000</p>
    <button className="w-full py-2 px-4 text-sm font-medium rounded-md text-white bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 transition duration-150 ease-in-out">
      Beli Sekarang
    </button>
  </div>
</div>

  
        {/* Card 2 */}
        <div className="flex flex-col max-w-[500px] snap-start bg-gradient-to-br from-gray-900 via-red-900 to-orange-800 shadow-2xl rounded-lg overflow-hidden">
  <img
    className="w-full h-auto object-cover rounded-lg"
    src="https://beritabalap.com/wp-content/uploads/2020/11/Banner-ICP-2020-700x400.jpg"
    alt="Team"
  />
  <div className="p-6">
    <h3 className="text-2xl font-semibold mb-2 text-white">Produk 1</h3>
    <p className="text-gray-200 mb-4">
      Deskripsi singkat produk 1. Produk ini menawarkan kualitas terbaik dengan harga yang terjangkau.
    </p>
    <p className="text-blue-600 font-bold text-lg mb-4">Rp 100.000</p>
    <button className="w-full py-2 px-4 text-sm font-medium rounded-md text-white bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 transition duration-150 ease-in-out">
      Beli Sekarang
    </button>
  </div>
</div>
  
        {/* Card 3 */}
        <div className="flex flex-col max-w-[500px] snap-start bg-gradient-to-br from-gray-900 via-red-900 to-orange-800 shadow-2xl rounded-lg overflow-hidden">
  <img
    className="w-full h-auto object-cover rounded-lg"
    src="https://beritabalap.com/wp-content/uploads/2020/11/Banner-ICP-2020-700x400.jpg"
    alt="Team"
  />
  <div className="p-6">
    <h3 className="text-2xl font-semibold mb-2 text-white">Produk 1</h3>
    <p className="text-gray-200 mb-4">
      Deskripsi singkat produk 1. Produk ini menawarkan kualitas terbaik dengan harga yang terjangkau.
    </p>
    <p className="text-blue-600 font-bold text-lg mb-4">Rp 100.000</p>
    <button className="w-full py-2 px-4 text-sm font-medium rounded-md text-white bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 transition duration-150 ease-in-out">
      Beli Sekarang
    </button>
  </div>
</div>

      </div>
    </div>
  );
}

export default CardSlider;
