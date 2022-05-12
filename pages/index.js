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

    <div className="" id="bv-footer-block">
      <div className="footer-inner">
        <div className="foot-line"></div>
      <div className="foot-logo">
        <div className="logo-word"></div>
        <div className="logo-brand"></div>
      </div>
      <div className="frame-140">
  <div className="frame-40">
  <div className="footer-heading">Careers</div>
  <div className="foot-item">Careers Overview</div>
  <div className="foot-item">Open Positions</div>
 
  </div>
  <div className="frame-39">
  <div className="footer-heading">Company</div>
  <div className="foot-item">Company Overview</div>
  <div className="foot-item">Awards</div>
  <div className="foot-item">In the News</div>
  <div className="foot-item">Upcoming Events</div>
  <div className="foot-item">Partnerships</div>
  <div className="foot-item">Contact</div>
  </div>
  
</div>
<div className="frame-37">
  <div className="footer-heading">Platform</div>
  <div className="foot-item">Platform Overview</div>
  <div className="foot-item">Order and Execution Management</div>
  <div className="foot-item">Portfolio Management</div>
  <div className="foot-item">Accounting</div>
  <div className="foot-item">Analytics</div>
  <div className="foot-item">Connectivity, Data, APIs</div>
  <div className="foot-item">Account Managment and Client Support</div>
</div>
<div className="frame-42">
  <div className="footer-heading">Solutions</div>
  <div className="foot-item">Solutions Overview</div>
  <div className="foot-item">New Fund Launches</div>
  <div className="foot-item">Funds Outgrowing Their Systems</div>
  <div className="foot-item">Hedge Funds</div>
  <div className="foot-item">Institutional Asset Managers</div>
  <div className="foot-item">Family Offices</div>
  <div className="foot-item">Portfolio Managers</div>
  <div className="foot-item">Traders</div>
  <div className="foot-item">CFOs and Accountants</div>
  <div className="foot-item">COOs and Operational Leadership</div>
  <div className="foot-item">Compliance and Risk</div>
  <div className="foot-item">CTOs and IT Systems</div>
</div>
<div className="frame-139">
  <div className="frame-38">
  <div className="footer-heading">Strategic Services</div>
  <div className="foot-item">Strategic Services Overview</div>
  <div className="foot-item">Middle Office Managed Services</div>
  <div className="foot-item">Back Office Managed Services</div>
  </div>
  <div className="frame-41">
  <div className="footer-heading">Insights</div>
  <div className="foot-item">Latest Insights</div>
  <div className="foot-item">Fund Launches</div>
  <div className="foot-item">Scaling operations</div>
  </div>
  
</div>
</div>
    </div>




    {/* <img src="/images/GettyImages-1036208856-1.png" class="absolute h-full max-w-1/2 hidden lg:block right-0 top-0"/> */}



      </main>
    </Layout>
  );
}
