import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='bg-black text-white flex flex-col items-center justify-center h-screen '>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className="p-5 h-4 auto bg-amber-400" href="/">Return Home</Link>
    </div>
  )
}