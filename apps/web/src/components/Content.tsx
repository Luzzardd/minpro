import React from 'react'
const Content = () => {
  return (
    <>
  <div className="relative w-full max-w-2xl p-4 md:p-8 mt-10 md:mt-20 flex flex-col md:flex-row items-center justify-center md:justify-start">
      <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gray-200 rounded-lg shadow-md flex items-center justify-center z-0 mb-4 md:mb-0">
        <span className="text-gray-600 font-medium">IMG</span>
      </div>
      <div className="md:absolute md:right-[-150px] lg:right-[-300px] md:top-1/2 md:transform md:-translate-y-1/2 w-full md:w-[500px] lg:w-[700px] h-40 md:h-52 bg-gray-300 rounded-lg shadow-md flex items-center justify-center z-10 mt-4 md:mt-0">
        <span className="text-gray-700 font-medium">Short Description</span>
      </div>
  </div>
  <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="relative w-full max-w-2xl mx-auto mt-10 md:mt-20">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start">
          <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gray-200 rounded-lg shadow-md flex items-center justify-center z-0 mb-4 md:mb-0">
            <span className="text-gray-600 font-medium">IMG</span>
          </div>
          <div className="w-full md:w-[500px] lg:w-[700px] h-40 md:h-52 bg-gray-300 rounded-lg shadow-md flex items-center justify-center z-10 mt-4 md:mt-0 md:absolute md:right-[-150px] lg:right-[-300px] md:top-1/2 md:transform md:-translate-y-1/2">
            <span className="text-gray-700 font-medium">Short Description</span>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Content



//<div className="flex items-center justify-center min-h-screen bg-gray-100">
//  <div className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-full sm:w-96 h-96">
//    <div className="relative w-full h-full overflow-hidden rounded-t-lg">
//      <img
//        src="https://picsum.photos/800/400?random=1"
//        className="w-full h-full object-cover"
//        alt="Random image"
//      />
//    </div>
//  </div>
//</div>