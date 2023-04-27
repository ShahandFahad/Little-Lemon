import React from "react";
import './Main.css';
import Specials from "./Specials/Specials";
import Testimonials from './Testimonials/Testimonials';
import About from  './About/About';
import Header from "../Header/Header";
export default function Main() {
    const headerData = {
        cafeTitle: "Little Lemon",
        cafeLocation: "Chicago",
        cafeDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab tempora deleniti eum repellat explicabo ratione quisquam fugiat quidem. Tempora eius deserunt corrupti esse nemo earum, a doloremque minus molestias! Quia.",
        cafeButtonName: "Reserve a Table",
    }
    return (
    <>
    <Header />
    <main>
        <Specials />
        <Testimonials />
        <About />
    </main>
    </>
    );
}