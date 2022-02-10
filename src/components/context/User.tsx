import {useContext, useState} from "react";
import { UserContext } from "./UserContext";


const User = () => {

    const userContext = useContext(UserContext)
   
    const handleLogin = () => {
            userContext.setUser({
                name: "cj",
                email: "cj@gmail.com"
            })
    };
    const handleLogout = () => {
           userContext.setUser(null)
    }

    return (
        <div>
         <button onClick={handleLogin}>Login</button>
         <button onClick={handleLogout}>Logout</button>
         <div>User's name is {userContext.user?.name} </div>
         <div>User's email is {userContext.user?.email}</div>
        </div>
    )
}

export default User;