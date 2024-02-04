// eslint-disable-next-line no-unused-vars
import React from "react";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About.jsx"
import Product from "./Product.jsx"
import Contact from "./Contact.jsx"
import SingleProduct from "./SingleProduct.jsx"


function Navbar(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/product" element={<Product/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/singleproduct:id" element={<SingleProduct/>} />
                <Route path="/cart" element={<Cart/>} />
            </Routes>
        </Router>
    )
}

export default Navbar