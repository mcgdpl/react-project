import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "../containers/Layout";
import Home from "../containers/Home";
import Contact from "../containers/Contact";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Users from "../containers/Users";

/**
 * Main App
 */
function App() {
    return(
        <BrowserRouter>
            <Header />
            <div>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="users" element={<Users />} />
                    <Route path='contact' element={<Contact />} />
                    {/* <Route path="/" element={<Layout />}> */}
                    {/* </Route> */}
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    );
}

export default App;