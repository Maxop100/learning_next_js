import "../globals.css";
import React from "react";



export const metadata = {
  title: 'Admin Page',
  description: 'Manage the application settings and user accounts from this page.',
};

export default async function Admin({children}) {
  return (
    <html>
        <body>
      <h1 className="flex align-middle justify-center text-4xl mt-30">Admin Page</h1>
      <p className="flex align-middle justify-center">This is the admin page of our Next.js application.</p>
      </body>
    </html>
  );
}