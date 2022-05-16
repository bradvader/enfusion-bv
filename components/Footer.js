/* This example requires Tailwind CSS v2.0+ */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import the icons you need
import {
  faLinkedin,
  faFacebook,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";


export default function Footer() {
  return (
    <div className="w-full bg-[url('/images/footer-bg.png')] bg-cover py-12 sm:py-24">
      <div className="mx-auto max-w-[1120px] flex flex-col sm:flex-row mb-14 px-6 xl:px-0 lg:justify-between">
        <div className="foot-logo flex-start sm:w-[163px] sm:h-[56px] w-[116.43px] h-[40px]">
          <div className="logo-word"></div>
          <div className="logo-brand"></div>
        </div>

        <div className="footer-cta1 flex flex-end flex-row w-[118px] h-[32px] mt-12 md:mt-0 mr-[36px] self-start lg:self-end">
          <div className="fcta1 w-[52px] h-[32px] leading-[32px]">Clients</div>
          <div className="fcta2 w-[50px] h-[32px]"><div className="cta-arrow w-[37px] h-[12px] my-[9px] ml-[17px] absolute">
            <svg className="w-[36px] h-[14px]" viewBox="0 0 39 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32 13L38 6.9993M38 6.9993L32 1M38 6.9993H1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
            <div className="cta-circle w-[32px] h-[32px] ml-[32px] absolute">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31 16C31 24.2843 24.2843 31 16 31C7.71573 31 1 24.2843 1 16C1 7.71573 7.71573 1 16 1C24.2843 1 31 7.71573 31 16Z" stroke="#7D5FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg></div></div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-6 xl:px-0 mx-auto max-w-[1120px]" id="bv-footer-block">
        <div className="frame-37 flex flex-col justify-start gap-y-3 animate-fade-in-up">
          <div className="text-white uppercase tracking-[2.5px] text-[14px] foot-head">Platform</div>
          <div className="text-[rgba(255,255,255,0.7)] tracking-[0.2px] text-[15px] leading-[22px] font-normal">Platform Overview</div>
          <div className="text-[rgba(255,255,255,0.7)] tracking-[0.2px] text-[15px] leading-[22px]">Order and Execution Management</div>
          <div className="text-[rgba(255,255,255,0.7)] tracking-[0.2px] text-[15px] leading-[22px]">Portfolio Management</div>
          <div className="text-[rgba(255,255,255,0.7)] tracking-[0.2px] text-[15px] leading-[22px]">Accounting</div>
          <div className="text-[rgba(255,255,255,0.7)] tracking-[0.2px] text-[15px] leading-[22px]">Analytics</div>
          <div className="text-[rgba(255,255,255,0.7)] tracking-[0.2px] text-[15px] leading-[22px]">Connectivity, Data, APIs</div>
          <div className="text-[rgba(255,255,255,0.7)] tracking-[0.2px] text-[15px] leading-[22px]">Account Managment <br />and Client Support</div>
        </div>
        <div className="frame-42 flex flex-col justify-start gap-y-3 animate-fade-in-up">
          <div className="text-white uppercase tracking-[2.5px] text-[14px] foot-head">Solutions</div>
          <div className="text-[rgba(255,255,255,0.7)] tracking-[0.2px] text-[15px] leading-[22px]">Solutions Overview</div>
          <div className="text-[rgba(255,255,255,0.7)] tracking-[0.2px] text-[15px] leading-[22px]">New Fund Launches</div>
          <div className="text-[rgba(255,255,255,0.7)] tracking-[0.2px] text-[15px] leading-[22px]">Funds Outgrowing Their Systems</div>
          <div className="text-[rgba(255,255,255,0.7)] tracking-[0.2px] text-[15px] leading-[22px]">Hedge Funds</div>
          <div className="text-[rgba(255,255,255,0.7)] tracking-[0.2px] text-[15px] leading-[22px]">Institutional Asset Managers</div>
          <div className="text-[rgba(255,255,255,0.7)] tracking-[0.2px] text-[15px] leading-[22px]">Family Offices</div>
          <div className="text-[rgba(255,255,255,0.7)] tracking-[0.2px] text-[15px] leading-[22px]">Portfolio Managers</div>
          <div className="text-[rgba(255,255,255,0.7)] tracking-[0.2px] text-[15px] leading-[22px]">Traders</div>
          <div className="text-[rgba(255,255,255,0.7)] tracking-[0.2px] text-[15px] leading-[22px]">CFOs and Accountants</div>
          <div className="text-[rgba(255,255,255,0.7)] tracking-[0.2px] text-[15px] leading-[22px]">COOs and Operational Leadership</div>
          <div className="text-[rgba(255,255,255,0.7)] tracking-[0.2px] text-[15px] leading-[22px]">Compliance and Risk</div>
          <div className="text-[rgba(255,255,255,0.7)] tracking-[0.2px] text-[15px] leading-[22px]">CTOs and IT Systems</div>
        </div>


        <div className="frame-139">
          <div className="frame-38 flex flex-col justify-start gap-y-3 animate-fade-in-up">
            <div className="text-white uppercase tracking-[2.5px] text-[14px] foot-head">Strategic Services</div>
            <div className="text-[rgba(255,255,255,0.7)] tracking-[0.2px] text-[15px] leading-[22px]">Strategic Services Overview</div>
            <div className="text-[rgba(255,255,255,0.7)] tracking-[0.2px] text-[15px] leading-[22px]">Middle Office Managed Services</div>
            <div className="text-[rgba(255,255,255,0.7)] tracking-[0.2px] text-[15px] leading-[22px]">Back Office Managed Services</div>
          </div>
          <div className="frame-41 flex flex-col justify-start gap-y-3 animate-fade-in-up">
            <div className="text-white mt-12 uppercase tracking-[2.5px] text-[14px] foot-head">Insights</div>
            <div className="text-[rgba(255,255,255,0.7)] tracking-[0.2px] text-[15px] leading-[22px]">Latest Insights</div>
            <div className="text-[rgba(255,255,255,0.7)] tracking-[0.2px] text-[15px] leading-[22px]">Fund Launches</div>
            <div className="text-[rgba(255,255,255,0.7)] tracking-[0.2px] text-[15px] leading-[22px]">Scaling operations</div>
          </div>

        </div>
        <div className="frame-140 pl-0 lg:pl-14 xl:pl-24 sm:border-l border-l-0 border-[rgba(255,255,255,0.3)] flex flex-col">
          <div className="frame-40 flex flex-col justify-start gap-y-3 animate-fade-in-up">
            <div className="text-white uppercase tracking-[2.5px] text-[14px] foot-head">Careers</div>
            <div className="text-[rgba(255,255,255,0.7)] tracking-[0.2px] text-[15px] leading-[22px]">Careers Overview</div>
            <div className="text-[rgba(255,255,255,0.7)] tracking-[0.2px] text-[15px] leading-[22px]">Open Positions</div>

          </div>
          <div className="frame-39 flex flex-col justify-start gap-y-3 animate-fade-in-up">
            <div className="text-white mt-12 uppercase tracking-[2.5px] text-[14px] foot-head">Company</div>
            <div className="text-[rgba(255,255,255,0.7)] tracking-[0.2px] text-[15px] leading-[22px]">Company Overview</div>
            <div className="text-[rgba(255,255,255,0.7)] tracking-[0.2px] text-[15px] leading-[22px]">Awards</div>
            <div className="text-[rgba(255,255,255,0.7)] tracking-[0.2px] text-[15px] leading-[22px]">In the News</div>
            <div className="text-[rgba(255,255,255,0.7)] tracking-[0.2px] text-[15px] leading-[22px]">Upcoming Events</div>
            <div className="text-[rgba(255,255,255,0.7)] tracking-[0.2px] text-[15px] leading-[22px]">Partnerships</div>
            <div className="text-[rgba(255,255,255,0.7)] tracking-[0.2px] text-[15px] leading-[22px]">Contact</div>
          </div>
          <div className="foot-social flex flex-row flex-start justify-between mt-[46px]">
            <div id="soc-in"><FontAwesomeIcon
            className="text-white sm:text-[rgba(255,255,255,0.7)]"
              icon={faLinkedinIn}
              style={{ fontSize: 20 }}
            />
            </div>
            <div id="soc-tw">
              <FontAwesomeIcon
               className="text-white sm:text-[rgba(255,255,255,0.7)]"
                icon={faTwitter}
                style={{ fontSize: 20 }}
              /></div>
            <div id="soc-fb">
              <FontAwesomeIcon
               className="text-white sm:text-[rgba(255,255,255,0.7)]"
                icon={faFacebook}
                style={{ fontSize: 20 }}
              />
            </div>

          </div>

        </div>




      </div>
      <div className="mx-auto max-w-[1120px] flex sm:flex-row flex-col mt-[88px] mb-0 px-6 xl:px-0 sm:justify-between justify-start">
        <div className="text-white text-[15px] mb-10 sm:hidden">A 文  English&nbsp;&nbsp;<FontAwesomeIcon className="w-[16px]"
                icon={faChevronDown}
                style={{ fontSize: 10, color: "white" }}
              /></div>
        <div className="footer-copyright flex-start text-[rgba(255,255,255,0.7)]">©2022 Enfusion. All rights reserved.</div>
        <div className="footer-priv flex-end text-[rgba(255,255,255,0.7)] mt-4 sm:mt-0">Privacy Policy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Trust</div>

      </div>

    </div>
  )
}