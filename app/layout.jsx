import Header from '@/components/Header'
import '../styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'VA-Web',
  description: 'Powered By Va-Web',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className='mt-[32px]'>
          {children}
        </div>
      </body>
    </html>
  )
}
