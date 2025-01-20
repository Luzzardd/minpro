import './globals.css'
import type { Metadata } from 'next'
import { Footer } from '@/components/Footer'
import { LogIn } from 'lucide-react'


export const metadata: Metadata = {
  title: 'Auth Pages',
  description: 'Simple login and registration pages',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        
        {children}
        <Footer/>
      </body>
    </html>
  )
}

