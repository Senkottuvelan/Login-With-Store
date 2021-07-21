import React from 'react'
import { useDispatch } from 'react-redux'
import "./Logout.css"
import { logout } from './userSlice'
const Logout=() =>{
    const dispatch = useDispatch()
    const handleLogout=(event)=>{
        event.preventDefault();
        dispatch(logout());
        
    }
    return (
        <div className="Logout">
           <h1>Hello <span className="User_Name">Cortex</span></h1> 
           <button className="Logout_Button" onClick={event=>handleLogout(event)}>Logout</button>
        </div>
    )
}

export default Logout
