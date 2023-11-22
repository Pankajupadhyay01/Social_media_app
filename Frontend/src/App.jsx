import { BrowserRouter, Link, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Component/Navbar";

const App = () => {
  return (
    <>
      <BrowserRouter >
        <Navbar />

      </BrowserRouter >
    </>
  )
}

export default App