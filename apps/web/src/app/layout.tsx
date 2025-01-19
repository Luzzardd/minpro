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
      <body>
        {children}
      </body>
    </html>
  )
}

