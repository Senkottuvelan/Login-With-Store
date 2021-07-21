import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./userSlice";
import "./Login.css";


const Login = () => {
   const [name, setName] = useState("")
   const [password, setPassword] = useState("")
   
   const dispatch = useDispatch();
   const handleSubmit=(event)=>{
       event.preventDefault();
       dispatch(login({
        name:name,
        password:password,
        loggedIn:true,
       }));

   }
  return (
    
      
        <form onSubmit={event=>handleSubmit(event)}>
          <div className="Login-Box">
            <h1>LOGIN</h1>
            <input
              id="name"
              type="text"
              className="TextBox"
              placeholder="Name"
              value={name}
              onChange={event=>setName(event.target.value)}
            ></input>
            <input
              id="password"
              type="password"
              className="TextBox"
              placeholder="Password"
              value={password}
              onChange={event =>setPassword(event.target.value)}
            ></input>
           <button type="submit" className="Login_ME">Login</button>
          </div>
          
        </form>
      
    
  );
};

export default Login;
