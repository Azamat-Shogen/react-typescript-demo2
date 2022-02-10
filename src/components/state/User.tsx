import {useState} from "react";

type AuthUser = {
    name: string;
    email: string;
}

const User = () => {
    const [user, setUser] = useState<AuthUser | null>(null );
    // const [user, setUser] = useState<AuthUser>( {} as AuthUser );


    const handleLogin = () => {
      setUser({
          name: "Jimmy",
          email: "jimmy@gmail.com"
      })
    };
    const handleLogout = () => {
        setUser(null)
    }

    return (
        <div>
         <button onClick={handleLogin}>Login</button>
         <button onClick={handleLogout}>Logout</button>
         <div>User's name is {user?.name} </div>
         <div>User's email is {user?.email} </div>
        </div>
    )
}

export default User;