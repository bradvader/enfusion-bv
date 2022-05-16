import Head from 'next/head';

import Layout from "../layouts/Layout";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import HeroCarousel from "../components/HeroCarousel";
import HeroSlider from "../components/HeroSlider";
import CTA1 from "../components/CTA";
// import NavBar from "../components/Navbar";

import Solution from '../components/Solution';
import Personas from "../components/Personas";
// import Car from "../components/Carousel"
import Insights from "../components/Insights";
import Statistics from "../components/Statistics";
import Awards from "../components/Awards";
import CTA2 from "../components/CTA2";
import Why from "../components/Why";
import Footer from "../components/Footer";
import Modal from "../components/Modal"
//import NumberModule from "../components/NumberModule";
import Slidey from "../components/Slidey";

import CTAModule from "../components/CTAModule";



export default function Home() {
  return (
    <Layout>
     <Modal />
     <NavBar />
      
     <Slidey />
      <Why />
      

        {/* <div id="hero-img-1">
        <div id="rectangle-5"></div>
          <div id="hero-1-inner">

          </div>
        </div>
        <div id="rectangle-3"></div>
        <div id="bv-solution-block">

        </div>


        <div id="bv-headder"></div>

        <div id="devices"></div> */}

        {/* <Benefits /> */}
        <Solution />

        <Personas />
        <Insights />
        {/* <Car /> */}
        <Statistics />
        <Awards />





        <CTA2 />

       <Footer />
        {/* <div id="subtract"></div> */}

    </Layout>
  );
}
