import '../globals.css';
import { Roboto } from 'next/font/google';
import { Work_Sans } from 'next/font/google';
import React from 'react';
import Link from 'next/link';
import NavbarToggle from '../NavbarToggle/NavbarToggle';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable:"--font-roboto",
});

export const metadata = {
  title: {
    default: 'Home Page',
    template: '%s | MyApp'
  },
  description: 'A Next.js application with a custom layout and navigation',
  icons: {
    icon: './MK.png'
  },
  keywords: ['Next.js', 'Custom Layout', 'React'],
  authors: [{ name: 'Your Name', url: 'https://localhost:3000' }]
};


const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable:"--font-work-sans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <header className='flex flex-col md:flex-row justify-between items-center p-4 bg-gray-100'>
          <h1 className='text-green-500 text-2xl font-bold'>MaNish</h1>
          <nav className="hidden md:flex  justify-between items-center p-4 bg-gray-100 text-black">
            
            <ul className={`${workSans.className} flex gap-10 p-6`}>
              <li className="hover:text-green-600 transition-colors duration-300">
                <Link href="/">Home</Link>
              </li>
              
              <li className="hover:text-green-600 transition-colors duration-300">
                <Link href="/contact">Contact</Link>
              </li>
              
            <li className="hover:text-green-600 transition-colors duration-300">
              <Link href="/service">Service</Link>
            </li>
            <li className="hover:text-green-600 transition-colors duration-300">
              <Link href="/about">About</Link>
            </li>
            
          </ul>
          
          
        </nav>
        <NavbarToggle />


        <button className='bg-blue-500 hidden md:block hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:scale-105 transition-transform duration-300'>
            Login/signup
          </button>
        
        </header>
        {children}
      </body>
    </html>
  );
}
