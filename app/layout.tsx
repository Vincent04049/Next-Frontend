import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cars Hub',
  description: 'Discover the best cars in the town'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode   
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
