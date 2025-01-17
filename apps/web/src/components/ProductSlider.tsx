import React from 'react';
import './../app/page.module.css'

function CardSlider() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      {/* Container Slider */}
      <div className="w-full max-w-5xl overflow-x-auto flex gap-4 snap-x snap-mandatory scroll-smooth scrollbar-hide">
        
        {/* Card 1 */}
        <div className="min-w-[240px] snap-start bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://source.unsplash.com/600x400?product"
            alt="Product 1"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Produk 1</h3>
            <p className="text-gray-600 mb-3">
              Deskripsi singkat produk 1.
            </p>
            <p className="text-blue-600 font-bold mb-2">Rp 100.000</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Beli Sekarang
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="min-w-[240px] snap-start bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://source.unsplash.com/600x400?product,technology"
            alt="Product 2"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Produk 2</h3>
            <p className="text-gray-600 mb-3">
              Deskripsi singkat produk 2.
            </p>
            <p className="text-blue-600 font-bold mb-2">Rp 150.000</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Beli Sekarang
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="min-w-[240px] snap-start bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://source.unsplash.com/600x400?shoes"
            alt="Product 3"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Produk 3</h3>
            <p className="text-gray-600 mb-3">
              Deskripsi singkat produk 3.
            </p>
            <p className="text-blue-600 font-bold mb-2">Rp 200.000</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Beli Sekarang
            </button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="min-w-[240px] snap-start bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://source.unsplash.com/600x400?fashion"
            alt="Product 4"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Produk 4</h3>
            <p className="text-gray-600 mb-3">
              Deskripsi singkat produk 4.
            </p>
            <p className="text-blue-600 font-bold mb-2">Rp 250.000</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Beli Sekarang
            </button>
          </div>
        </div>

        {/* Card 5 */}
        <div className="min-w-[240px] snap-start bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://source.unsplash.com/600x400?mobile"
            alt="Product 5"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Produk 5</h3>
            <p className="text-gray-600 mb-3">
              Deskripsi singkat produk 5.
            </p>
            <p className="text-blue-600 font-bold mb-2">Rp 300.000</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Beli Sekarang
            </button>
          </div>
        </div>

        {/* Card 6 */}
        <div className="min-w-[240px] snap-start bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://source.unsplash.com/600x400?gaming"
            alt="Product 6"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Produk 6</h3>
            <p className="text-gray-600 mb-3">
              Deskripsi singkat produk 6.
            </p>
            <p className="text-blue-600 font-bold mb-2">Rp 350.000</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Beli Sekarang
            </button>
          </div>
        </div>

        {/* Card 7 */}
        <div className="min-w-[240px] snap-start bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://source.unsplash.com/600x400?bag"
            alt="Product 7"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Produk 7</h3>
            <p className="text-gray-600 mb-3">
              Deskripsi singkat produk 7.
            </p>
            <p className="text-blue-600 font-bold mb-2">Rp 400.000</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Beli Sekarang
            </button>
          </div>
        </div>

        {/* Card 8 */}
        <div className="min-w-[240px] snap-start bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://source.unsplash.com/600x400?watch"
            alt="Product 8"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Produk 8</h3>
            <p className="text-gray-600 mb-3">
              Deskripsi singkat produk 8.
            </p>
            <p className="text-blue-600 font-bold mb-2">Rp 450.000</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Beli Sekarang
            </button>
          </div>
        </div>

        {/* Card 9 */}
        <div className="min-w-[240px] snap-start bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://source.unsplash.com/600x400?cosmetic"
            alt="Product 9"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Produk 9</h3>
            <p className="text-gray-600 mb-3">
              Deskripsi singkat produk 9.
            </p>
            <p className="text-blue-600 font-bold mb-2">Rp 500.000</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Beli Sekarang
            </button>
          </div>
        </div>

        {/* Card 10 */}
        <div className="min-w-[240px] snap-start bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://source.unsplash.com/600x400?accessories"
            alt="Product 10"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Produk 10</h3>
            <p className="text-gray-600 mb-3">
              Deskripsi singkat produk 10.
            </p>
            <p className="text-blue-600 font-bold mb-2">Rp 550.000</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Beli Sekarang
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CardSlider;
