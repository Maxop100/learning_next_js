"use client";
import { useSearchParams } from "next/navigation";

 const ProductList = () => {
    const searchParams = useSearchParams();
   
    const pages = searchParams.get("pages");
    const category = searchParams.getAll("category");
    console.log("inside:", pages, category);
    const entries = Object.fromEntries(searchParams.entries());
    console.log("entries:", entries);
    return <>
    <h1> client-{category.join(", ")}</h1>

    </>
        
    
}

export default ProductList;