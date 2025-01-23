'use client'

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, AlertCircle, Mail, Lock } from "lucide-react"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
})

export default function Login() {
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    setEmailError("")
    setPasswordError("")

    if (!email) {
      setEmailError("Email is required")
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email address")
    }

    if (!password) {
      setPasswordError("Password is required")
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long")
    }

    if (!emailError && !passwordError) {
      console.log("Login attempt with:", { email, password })
    }
  }

  return (
    <div
      className={`min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat relative ${poppins.className}`}
      style={{
        backgroundImage:
          "url('https://cdn.racingnews365.com/2024/_1800x945_crop_center-center_75_none/XPB_1209903_HiRes.jpg?v=1706002336')",
      }}
    >
      <div className="absolute inset-0 bg-black/20" />
      <div className="max-w-md w-full p-4 relative z-10">
        <div className="bg-white bg-opacity-20 rounded-lg p-6 space-y-4">
          <h1 className="text-3xl font-bold text-white text-center">Welcome Back</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500" size={20} />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="w-full pl-10 p-2 rounded bg-white bg-opacity-20 text-white placeholder-white"
                required
              />
              {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500" size={20} />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full pl-10 p-2 rounded bg-white bg-opacity-20 text-white placeholder-white"
                required
              />
              {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
            </div>
            <button type="submit" className="w-full p-2 bg-red-500 text-white rounded hover:bg-red-600">
              Sign in
            </button>
          </form>
          <p className="text-center text-white">
            Dont have an account?{" "}
            <Link href="/Register" className="text-red-500">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

