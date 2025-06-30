const singleProfile =async (props)=>{
    console.log(props);
    const User =await props.params;
    console.log(User);
    return<h1>User={User.username}</h1>

}


export default singleProfile;