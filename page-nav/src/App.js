import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { useState } from "react";

function App() {
  const [status, setStatus] = useState(false);

  const authenticate = ()=>{
    setStatus(true)
  }

  const logout = ()=>{
    setStatus(false)
  }

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login auth={authenticate}/>} />
        <Route path="/home" element={<Home logout={logout} status={status}/>} />
      </Routes>
    </div>
  );
}

export default App;
