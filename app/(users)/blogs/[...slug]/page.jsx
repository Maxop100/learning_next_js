 const Blog = async (props) =>{
    const { slug } =await props.params;
    console.log("slug:", slug);
    return<>
    <h1>ecom-{slug.join(", ")}</h1>
    </>
}

export default Blog;