import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'React-Hook-Form'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} linear`}>{children}</body>
    </html>
  )
}