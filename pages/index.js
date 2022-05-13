import Head from 'next/head';

import Layout from "../layouts/Layout";

//import NumberModule from "../components/NumberModule";


import CTAModule from "../components/CTAModule";

export default function Home() {
  return (
    <Layout>

      <main className="bg-white p-0">

        <div id="hero-img-1">
          {/* <div id="rectangle-5"></div> */}
          <div id="hero-1-inner">

          </div>
        </div>
        {/* <div id="rectangle-3"></div> */}
        <div id="bv-solution-block">

        </div>
        <div id="frame-99-outer">
          <div id="frame-99">
            <div className="frame-99-text1">Meet Enfusion</div>
            <div className="frame-99-text2">See clearly. Act confidently.</div>
            <div className="frame-99-text3">Enfusion radically simplifies the investment management process by uniting front-, middle-, and back- office functions and services under a single, cloud-native platform built on a shared ‘golden data set’—giving you the freedom to focus on performance.</div>
          </div>
        </div>

        <div id="bv-header"></div>

        <div id="devices"></div>

        <div id="benny-container">
          <div id="benny-table">
            <div className="line-24"></div>
            <div id="frame-100">
              <div className="icon"></div>
              <div className="line-13"></div>
              <div className="ben-copy-1">Seam-free, front-to-back <br />Software-as-a-Service</div>
              <div className="line-21"></div>
              <div className="ben-copy-2">All modules use the same background data model, eliminating the need to harmonize code streams and protocols.</div>
            </div>
            <div className="line-19"></div>
            <div id="frame-101">
              <div className="icon"></div>
              <div className="line-13"></div>
              <div className="ben-copy-1">Single source of truth <br />for all users</div>
              <div className="line-21"></div>
              <div className="ben-copy-2">Portfolio managers, risk and accounting continuously see exactly what the trading desks see, from market open to close.</div>
            </div>
            <div className="line-26"></div>
            <div id="frame-102">
              <div className="icon"></div>
              <div className="line-13"></div>
              <div className="ben-copy-1">API-powered, open platform</div>
              <div className="line-21"></div>
              <div className="ben-copy-2">Enfusion’s modules are built for plug-and-play integrations with other solutions, allowing you to connect with ease. </div>
            </div>
            <div className="line-27"></div>
            <div id="frame-103">
              <div className="icon"></div>
              <div className="line-13"></div>
              <div className="ben-copy-1">Weekly upgrades, <br />with zero disruptions</div>
              <div className="line-21"></div>
              <div className="ben-copy-2">Our multi-tenant architecture allows new features to be added weekly, such that every client benefits from their peers’ ideas.</div>
            </div>
            <div className="line-28"></div>
            <div id="frame-104">
              <div className="icon"></div>
              <div className="line-13"></div>
              <div className="ben-copy-1">Managed services for <br />middle and back office</div>
              <div className="line-21"></div>
              <div className="ben-copy-2">Our expert users work in the same operating environment as our clients, ensuring both efficiency and total oversight.</div>
            </div>
            <div className="line-25"></div>
          </div>
        </div>
        <div id="personas-container"><div id="pers-rect"></div>
          <div id="personas-block">
            {/* <div id="rectangle-7"></div> */}
            <div id="frame-92">
              <div className="pers-icon">
                {/* <div id="92-vector1"></div>
                <div id="92-vector2"></div>
                <div id="92-vector3"></div>
                <div id="92-vector4"></div> */}
              </div>
              <div className="pers-title">For CFOs and Accounting</div>
              <div className="pers-copy">Ensure faster time to launch, higher organizational efficiency, and a dramatic reduction in technical complexity—all of which reduces costs across your firm.</div>
              <div className="pers-cta">
                <div className="pers-lm">Learn More</div>
                <div className="pers-arrow">

                </div>
              </div>
            </div>

            <div id="frame-93">
              <div className="pers-icon">
                <div id="93-vector1"></div>
                <div id="93-vector2"></div>
                <div id="93-vector3"></div>
                <div id="93-vector4"></div>
              </div>
              <div className="pers-title">For Portfolio Managers<br />and CIOs</div>
              <div className="pers-copy">Enter new markets and deploy new strategies without disrupting your workflows with an integrated PMS/OEMS that supports a wide range of alternative assets.</div>
              <div className="pers-cta">
                <div className="pers-lm">Learn More</div>
                <div className="pers-arrow">

                </div>
              </div>
            </div>

            <div id="frame-94">
              <div className="pers-icon">
                <div id="94-vector1"></div>
                <div id="94-vector2"></div>
                <div id="94-vector3"></div>
                <div id="94-vector4"></div>
              </div>
              <div className="pers-title">For Traders</div>
              <div className="pers-copy">Get the tools you need to stage and execute even the most complex orders with total confidence: pre-trade compliance, customizable trade blotters, and more.  </div>
              <div className="pers-cta">
                <div className="pers-lm">Learn More</div>
                <div className="pers-arrow">

                </div>
              </div>
            </div>

            <div id="frame-91">
              <div className="pers-icon">
                <div id="91-vector1"></div>
                <div id="91-vector2"></div>
                <div id="91-vector3"></div>
                <div id="91-vector4"></div>
              </div>
              <div className="pers-title">For COOs and<br />Operational Leadership</div>
              <div className="pers-copy">Drive accuracy and transparency in trade and cash settlements by allowing your entire organization to work from one synchronized dataset.</div>
              <div className="pers-cta">
                <div className="pers-lm">Learn More</div>
                <div className="pers-arrow">

                </div>
              </div>
            </div>

            <div id="frame-98">
              <div className="pers-icon">
                <div id="98-vector1"></div>
                <div id="98-vector2"></div>
                <div id="98-vector3"></div>
                <div id="98-vector4"></div>
              </div>
              <div className="pers-title">For Compliance and Risk</div>
              <div className="pers-copy">Keep your compliance posture strong and risk exposures highly transparent across regions, asset types and strategies with 1000s of pre- and post-trade tools.</div>
              <div className="pers-cta">
                <div className="pers-lm">Learn More</div>
                <div className="pers-arrow">

                </div>
              </div>
            </div>

            <div id="frame-100b">
              <div className="pers-icon">
                <div id="100b-vector1"></div>
                <div id="100b-vector2"></div>
                <div id="100b-vector3"></div>
                <div id="100b-vector4"></div>
              </div>
              <div className="pers-title">For IT Systems Technologists</div>
              <div className="pers-copy">Eliminate the costs of managing and maintaining on-premises technology through Enfusion’s cloud-native, multi-tenant architecture.</div>
              <div className="pers-cta">
                <div className="pers-lm">Learn More</div>
                <div className="pers-arrow">

                </div>
              </div>
            </div>



            <div id="ftb">Front-to-back Platform</div>
            <div id="wisest">The wisest investment you’ll ever make.</div>
            <div id="persona-blurb">Enfusion unlocks the full potential of the Cloud across front-, middle- and back-office investment processes.</div>

          </div>

        </div>

        <div id="insights-block">
          <div id="group-5">
            <div id="insights">Insights</div>
            <div id="persp">All things in perspective.</div>
          </div>

        </div>
        <div id="stats-container">
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
        </div>

        <div id="awards-container">
          <div id="bv-awards-block">
            <div id="award-1"><div className="award-line"></div><div className="frame-122"><div className="awards-ribbon"></div><div className="awards-category">Award Category</div></div><div className="award-name">Award Name Lorem Ipsum Dolor Seder Etalumon</div><div className="frame-137"><div className="award-org">Organizational Title</div><div className="award-slash">&#47;</div><div className="award-year">2021</div></div></div>

            <div id="award-2"><div className="award-line"></div><div className="frame-122"><div className="awards-ribbon"></div><div className="awards-category">Portfolio Management</div></div><div className="award-name">Best Asset<br />Management System</div><div className="frame-137"><div className="award-org">Organizational Title</div><div className="award-slash">&#47;</div><div className="award-year">2021</div></div></div>

            <div id="award-3"><div className="award-line"></div><div className="frame-122"><div className="awards-ribbon"></div><div className="awards-category">Employer</div></div><div className="award-name">100 Ultimate Fintech Workplaces</div><div className="frame-137"><div className="award-org">Organizational Title</div><div className="award-slash">&#47;</div><div className="award-year">2021</div></div></div>

            <div id="award-4"><div className="award-line"></div><div className="frame-122"><div className="awards-ribbon"></div><div className="awards-category">Employer</div></div><div className="award-name">Best Places to Work in Chicago Selection</div><div className="frame-137"><div className="award-org">Organizational Title</div><div className="award-slash">&#47;</div><div className="award-year">2021</div></div></div>

            <div id="award-5"><div className="award-line"></div><div className="frame-122"><div className="awards-ribbon"></div><div className="awards-category">Services</div></div><div className="award-name">Best Managed Service Provider in Eurpean Services Awards</div><div className="frame-137"><div className="award-org">Organizational Title</div><div className="award-slash">&#47;</div><div className="award-year">2021</div></div></div>

            <div id="award-6"><div className="award-line"></div><div className="frame-122"><div className="awards-ribbon"></div><div className="awards-category">Technology</div></div><div className="award-name">Best Risk Management Technology in Technology and WSL Awards</div><div className="frame-137"><div className="award-org">Organizational Title</div><div className="award-slash">&#47;</div><div className="award-year">2021</div></div></div>

            <div id="award-7"><div className="award-line"></div><div className="frame-122"><div className="awards-ribbon"></div><div className="awards-category">Services</div></div><div className="award-name">Shortlisted as a Finalist in Four Operations and Services Awards Categories</div><div className="frame-137"><div className="award-org">Organizational Title</div><div className="award-slash">&#47;</div><div className="award-year">2021</div></div></div>

            <div id="award-8"><div className="award-line"></div><div className="frame-122"><div className="awards-ribbon"></div><div className="awards-category">Employer</div></div><div className="award-name">Best Places to Work in Chicago Finalist</div><div className="frame-137"><div className="award-org">Organizational Title</div><div className="award-slash">&#47;</div><div className="award-year">2021</div></div></div>

            <div id="awards-head">
              <div id="awards-title">Recent Awards</div>
              <div id="awards-headline">Earning the respect of our peers.</div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden relative" id="bv-cta-block">
          <div className="cta-container">
            <div id="block-A">
              Gain a clear advantage.
            </div>
            <div id="block-button">
              <div id="ttu">Talk to Us</div>
            </div>
          </div>
        </div>

        <div id="rectangle-77"></div>

        <div id="solution-container">
          <div id="solution-inner">
            <div id="frame-85">
              <div id="solution-heading">Find a Solution</div>
              <div id="solution-title">Cloud-native. <br />For blue-sky plans.</div>
              <div id="solution-copy">Founded by developers from the world’s most successful hedge funds, Enfusion was purpose-built to remove key operational and technological barriers faced by all types of asset managers.</div>
            </div>
          </div>
        </div>



        <div className="" id="bv-footer-block">
          <div className="foot-line"></div>
          <div className="footer-inner">


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
              <div className="foot-social">
                <div id="soc-in"></div>
                <div id="soc-tw"></div>
                <div id="soc-fb"></div>

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
            <div className="footer-cta1">
              <div className="fcta1">Clients</div>
              <div className="fcta2"></div>
            </div>
            <div className="footer-priv">Privacy Policy&nbsp;&nbsp;&nbsp;&nbsp;Trust</div>
            <div className="footer-copyright">©2022 Enfusion. All rights reserved.</div>
            <div className="foot-logo">
              <div className="logo-word"></div>
              <div className="logo-brand"></div>
            </div>

          </div>
        </div>
        <div id="subtract"></div>



        <div id="frame-113-container">
          <div id="frame-113">
            <div id="text-1">Why Enfusion</div>
            <div id="text-2">Born in the cloud.
              Built for outperformance.</div>
            <div id="text-3">Enfusion gets technology out of your way so you can see, perform and grow at the height of your talents.</div>
          </div></div>





      </main>
    </Layout>
  );
}
