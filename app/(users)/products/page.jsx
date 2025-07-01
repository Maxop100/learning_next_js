import ProductList from "./productlist"; 
 
 const Products =async ({searchParams})=>{
    const searchParam = await searchParams;
    const Category = searchParam?.Category ||"all";
    const sort = searchParam?.sort ||"default";
    const page = searchParam?.page || 1;
    console.log("outer:", searchParam);

    return <div>
        <ProductList/>
        showing {Category} products sorted by {sort} on page {page}</div>
}

export default Products;