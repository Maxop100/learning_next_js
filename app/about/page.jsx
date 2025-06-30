import React from 'react';
import "../globals.css"; // Import global styles
import Link from 'next/link'; // Import Link component from Next.js

export const metadata = {
    title: 'About Page',
    description: 'Learn more about our Next.js application on this page.',
};

const About = async ()=>{
    return(
        <html>
            <body className="flex align-middle justify-center  h-screen flex-col bg-gray-100">
                <div className="flex md:flex-row flex-col items-center md:pl-[400px] md:items-center  gap-3">
                <h1 className='text-4xl font-bold flex justify-center align-middle'>About Page</h1>
                <p className="flex align-middle justify-center">This is the about page of our Next.js application.</p>
                
                <button className="bg-amber-600 p-2 rounded-2xl transition-colors duration-300 hover:bg-amber-700  w-30 flex justify-center align-middle "><Link href="/">Go to Home</Link></button>
                </div>
                
            </body>
        </html>
    )



}


export default About;