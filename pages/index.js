import Head from 'next/head';

import Layout from "../layouts/Layout";

//import NumberModule from "../components/NumberModule";


import CTAModule from "../components/CTAModule";
//import CBIA from "../components/ContentBlockImageAside";
//import ITCB from "../components/IconTableContentBlock";
//import FISB from "../components/FindASolutionBlock";
// export default function Home() {
//   return (
//     <div>
//       <Head>
//         <title>ENFUSION | BRAD</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className="min-h-screen flex flex-col justify-center">
        
//         <h1 className="mx-auto text-4xl font-bold">
//         Test
//         </h1>
//       </main>

//     </div>
//   )
// }
export default function Home() {
  return (
    <Layout>
     
      <main className="bg-white p-0">
      <div className="" id="bv-stats-block">
        <div id="stats-head">
<div id="stats-title">Statistics</div>
<div id="stats-headline">Strength in numbers.</div>
</div>
      <div className="stats" id="stats-1">
        <div id="stats-num-1" className="stats-num">9</div>
        <div className="stats-line"></div> 
        <div id="stats-copy-1">
<div className="stats-subhead-1 sh">Offices across four continents</div>
<div className="stats-subcopy-1 sc">Our global footprint allows for 24/6, follow-the-sun support.</div>     
        </div>
        </div>
      <div className="stats" id="stats-2">
        <div id="stats-num-2" className="stats-num">15</div>
        <div className="stats-line"></div> 
        <div id="stats-copy-2">
<div className="stats-subhead-2 sh">Years of cloud-native saas</div>
<div className="stats-subcopy-2 sc">The architecture of our platform pre-dates the rise of SaaS for the industry.</div>     
        </div>
        </div>
      <div className="stats" id="stats-3"><div id="stats-num-3" className="stats-num">450+</div>
      <div className="stats-line"></div>
      <div id="stats-copy-3">
<div className="stats-subhead-3 sh">Implementations</div>
<div className="stats-subcopy-3 sc">Hundreds of funds trust Enfusion technology for their operations.</div>     
        </div>
       </div>
</div>     
        <div className="bg-white overflow-hidden relative" id="bv-cta-block">
          
        
            <div id="block-A">
                Gain a clear advantage.
            </div>
       
        
            <div id="block-button">
               
                   <div id="ttu">Talk to Us</div>
               
            </div>
        
    </div>




    {/* <img src="/images/GettyImages-1036208856-1.png" class="absolute h-full max-w-1/2 hidden lg:block right-0 top-0"/> */}



      </main>
    </Layout>
  );
}
