"use client";

import { use } from "react";

const singleProfile =  (props) => {
    const User =  use(props.params);
    console.log(User);
    return <h1>user = {User.postId} && UserID = {User.username}</h1>

}

export default singleProfile;