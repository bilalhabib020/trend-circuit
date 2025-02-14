import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import Slider from "../components/Slider";
import About from "../components/About";
import Contact from "../components/Contact";
import Spinner from "../components/Spinner";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import ShowProductsCard from "../components/ShowProductsCard";

function Home() {


  return (
    <div className="container">
        <Slider />
        <Features />
        <ShowProductsCard />
        <Testimonials />
    </div>
  );
}

export default Home;