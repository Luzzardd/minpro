"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import styles from './page.module.css'
import AutoCarousel from '@/components/Carousel'
import Content from '@/components/Content'
import ProductSlider from '@/components/ProductSlider'
export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const response = await fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      const data = await response.json();
      setError(data.message);
    } else {
      // Handle successful login (e.g., redirect or update UI)
      console.log("Login successful");
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md text-center">
      <h1 className="text-2xl font-bold mb-6">Login</h1>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="block w-full py-2 px-4 border border-gray-300 rounded-md"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full py-2 px-4 border border-gray-300 rounded-md"
          required
        />
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="block w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Login
        </button>
      </form>
      <div className="mt-4">
        <Link href="/Register" className="text-sm text-blue-600 hover:underline">
          Don&apos;t have an account? Register
        </Link>
      </div>
    </div>
  );
}

export function HomePage() {
  return (
    <>
    <AutoCarousel/>
    <Content/>
    <ProductSlider/>
    </>
  );
}
