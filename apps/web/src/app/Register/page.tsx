import Link from "next/link"

export default function Register() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat relative bg-[url('https://www.racefans.net/wp-content/uploads/2018/09/racefansdotnet-20180930-200940-16.jpg')] before:content-[''] before:absolute before:inset-0 before:bg-black before:bg-opacity-40">
      <div className="w-full max-w-md">
        <div className="backdrop-blur-lg bg-white bg-opacity-10 rounded-2xl shadow-xl overflow-hidden p-6 space-y-6">
          <div className="flex justify-center mb-8">
            <svg
              className="w-20 h-20 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
              ></path>
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-center text-white mb-6">Join the Race</h2>

          <div className="space-y-4">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-red-400">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
              </span>
              <input
                type="text"
                placeholder="First Name"
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-transparent border border-gray-600 focus:border-white focus:ring-2 focus:ring-red-500 text-white placeholder-gray-400"
              />
            </div>

            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-red-400">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
              </span>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-transparent border border-gray-600 focus:border-white focus:ring-2 focus:ring-red-500 text-white placeholder-gray-400"
              />
            </div>

            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-red-400">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </span>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-transparent border border-gray-600 focus:border-white focus:ring-2 focus:ring-red-500 text-white placeholder-gray-400"
              />
            </div>

            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-red-400">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  ></path>
                </svg>
              </span>
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-transparent border border-gray-600 focus:border-white focus:ring-2 focus:ring-red-500 text-white placeholder-gray-400"
              />
            </div>

            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-red-400">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </span>
              <input
                type="text"
                placeholder="Referral Code (Optional)"
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-transparent border border-gray-600 focus:border-white focus:ring-2 focus:ring-red-500 text-white placeholder-gray-400"
              />
            </div>
          </div>

          <button className="w-full bg-red-600 text-white rounded-lg px-4 py-2 font-semibold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-300 flex items-center justify-center cursor-default">
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            Start Your Engine
          </button>

          <div className="text-center text-white text-sm">
            Already in the race?{" "}
            <span className="text-red-400 font-semibold">
              <Link href="/Login">Log in</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

