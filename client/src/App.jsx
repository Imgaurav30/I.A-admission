import { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import AdmissionPortal from "./pages/AdmissionPortal";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Form from "./pages/Form";
// import 'bootstrap/dist/css/bootstrap.min.css';
{
  /* The following line can be included in your src/index.js or App.js file */
}
//
import Example from "./components/Example";

function App() {
  return (
    <>
      <div className="w-[100%] min-h-screen bg-richblack-800 flex flex-col font-inter">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apply" element={<AdmissionPortal />} />
          <Route path="/login" element={<Login />} />
          <Route path="apply/form" element={<Form />} />
          <Route path="apply/example" element={<Example />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
