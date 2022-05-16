import Head from 'next/head';

import Layout from "../layouts/Layout";
import NavBar from "../components/NavBar";
// import NavBar from "../components/Navbar";

import Solution from '../components/Solution';
import Personas from "../components/Personas";
import Car from "../components/Carousel"
import Insights from "../components/Insights";
import Statistics from "../components/Statistics";
import Awards from "../components/Awards";
import CTA2 from "../components/CTA2";
import Why from "../components/Why";
import Footer from "../components/Footer";
import Modal from "../components/Modal"
//import NumberModule from "../components/NumberModule";
import Slidey from "../components/Slidey";




export default function Home() {
  return (
    <Layout>
     <Modal />
     <NavBar />
      
     <Slidey />
      <Why />
        <Solution />

        <Personas />
        <Insights />
        <Car />
        <Statistics />
        <Awards />
        <CTA2 />
       <Footer />
    </Layout>
  );
}
