import './globals.css'
import type { Metadata } from 'next'

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
      <body className="min-h-screen bg-gray-100 flex items-center justify-center">
        <main className="w-full max-w-md">{children}</main>
      </body>
    </html>
  )
}

