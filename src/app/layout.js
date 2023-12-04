import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/Header'
import { Container } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The News Hub',
  description: 'This is the home page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className={inter.className}>
        <Header/>
      <Navbar/>
       <Container className='min-h-screen'>
       {children}
       </Container >
        <Footer/>
        </body>
    </html>
  )
}
