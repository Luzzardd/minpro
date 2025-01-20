import Link from 'next/link'
import { UserCircle, Lock, ArrowRight } from 'lucide-react'
import { Poppins } from 'next/font/google'
import { Montserrat } from 'next/font/google'



const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const montserrat = Montserrat({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Login() {
  return (
    <div 
      className={`min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat relative ${poppins.className}`}
      style={{ backgroundImage: "url('https://cdn.racingnews365.com/2024/_1800x945_crop_center-center_75_none/XPB_1209903_HiRes.jpg?v=1706002336')" }}
    >
      <div className="absolute inset-0 bg-black/20" />
      <div className="max-w-md w-full space-y-8 p-4 relative z-10">
        <div className={`backdrop-blur-lg bg-white bg-opacity-10 rounded-2xl shadow-xl overflow-hidden p-6 space-y-6 ${montserrat.className}`}>
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-3 tracking-tight drop-shadow-md">Welcome Back</h1>
            <p className="text-xl text-white/90">Sign in to your account</p>
          </div>
          <form className="mt-8 space-y-6">
            <div className="space-y-4">
              <div className="relative">
                <UserCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500" size={20} />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="block w-full pl-10 pr-3 py-2 border-0 rounded-md text-white bg-white/10 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white/20 transition duration-150 ease-in-out"
                  placeholder="Email address"
                />
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500" size={20} />
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="block w-full pl-10 pr-3 py-2 border-0 rounded-md text-white bg-white/10 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white/20 transition duration-150 ease-in-out"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out"
              >
                <a href='/'>Sign in</a>
                <ArrowRight className="ml-2 h-5 w-5 text-white group-hover:translate-x-1 transition-transform duration-150 ease-in-out" />
              </button>
            </div>
          </form>
          <div className="mt-6 text-center">
            <Link 
              href="/Register" 
              className="font-medium text-white/90 hover:text-orange-300 transition duration-150 ease-in-out"
            >
              Dont have an account? <span className="text-red-500">Register</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

