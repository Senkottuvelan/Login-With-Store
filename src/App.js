
import React from "react";
import { useSelector } from "react-redux";
import Login from "./Login";
import Logout from "./Logout";
import {selectUser} from "./userSlice"


// import ParentComponent from "./ParentComponent";

function App() {
  const user=useSelector(selectUser);
  return (
    <div className="Life">
      {user ? <Logout/> : <Login/>}
      {/* <Logout/> */}
    </div>
  );
}

export default App;
