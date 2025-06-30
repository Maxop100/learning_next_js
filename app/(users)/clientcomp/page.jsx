"use client";

import { useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/posts";

const ClientComp = () => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setPostData(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Client Component</h1>
      <button
        className="bg-amber-400 text-black p-5"
        onClick={() => alert("Button clicked on client comp!")}
      >
        Click me
      </button>
      <ul className="grid grid-cols-3 gap-5">
        {postData.map((curElem) => (
          <li key={curElem.id}>{curElem.title}</li>
        ))}
      </ul>
    </>
  );
};

export default ClientComp;
