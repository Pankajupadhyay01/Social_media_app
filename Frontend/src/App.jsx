import { BrowserRouter, Link, Routes, Route, Navigate, useSearchParams } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Login from "./Component/Login";
import { useSelector } from "react-redux";
import Home from "./Component/Home";

const App = () => {
  const user = useSelector((state) => state.user)
  const Requireauth = ({ children }) => {
    return user.user ? children : <Navigate to="/login" />
  }
  return (
    <>
      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App