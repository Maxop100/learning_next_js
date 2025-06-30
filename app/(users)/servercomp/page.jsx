// app/layout.js or app/layout.tsx (if TypeScript)
"use client";

import { Roboto, Work_Sans } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400'], // Optional: specify weights
  variable: '--font-roboto',
});

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-worksans',
});

 const metadata = {
  title: {
    default: 'Server Component Page',
    template: '%s | MyApp',
  },
  description: 'A Next.js application with a custom layout and navigation',
  icons: {
    icon: '/MK.png', // Corrected path (must be inside /public)
  },
  keywords: ['Next.js', 'Custom Layout', 'React'],
  authors: [{ name: 'Your Name', url: 'https://localhost:3000' }],
};

// components/MyButton.jsx


export default function MyButton() {
  return (
    <button
      className="p-4 bg-amber-400"
      onClick={() => alert("Clicked!")}
    >
      Click me
    </button>
  );
}
