/* This example requires Tailwind CSS v2.0+ */
export default function Statistics() {
    return (

      <div className="w-full bg-[url('/images/mobile-2.png')] md:bg-[url('/images/stats-bg.png')] bg-cover py-16 h-auto lg:h-[530px]">
      <div className="mx-auto flex flex-col gap-12 max-w-[1120px] justify-start h-auto lg:h-[530px] px-6 lg:px-0  box-border">
          <div className="flex flex-col gap-6">
            <div className="text-[#99B0F6] text-[14px] uppercase leading-[22px] tracking-[2.5px] font-semibold">Statistics</div>
            <div className="text-white text-[30px] lg:text-[48px] leading-[56px] tracking-[-0.5px]">Strength in numbers.</div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-32">

          <div className="flex flex-col gap-6 justify-start">
            <div className="text-[88px] text-white tracking-[-1px] leading-[88px] semi-light pb-6 border-b border-[rgba(255,255,255,0.3)]">9</div>
           
            <div className="flex flex-col gap-3 justify-start">
            <div className="text-[#99B0F6] text-[12px] uppercase leading-[22px] tracking-[2.5px] font-semibold">Offices across four continents</div>
            <div className="text-[rgba(255,255,255,0.7)] text-[15px] leading-[22px] tracking-[0.2px]">Our global footprint allows for 24/6, follow-the-sun support.</div>
            </div>
          </div>

          <div className="flex flex-col gap-6 justify-start">
          <div className="text-[88px] text-white tracking-[-1px] leading-[88px] semi-light pb-6 border-b border-[rgba(255,255,255,0.3)]">15</div>
        
          <div className="flex flex-col gap-3 justify-start">
            <div className="text-[#99B0F6] text-[12px] uppercase leading-[22px] tracking-[2.5px] font-semibold">Years of cloud-native saas</div>
            <div className="text-[rgba(255,255,255,0.7)] text-[15px] leading-[22px] tracking-[0.2px]">The architecture of our platform pre-dates the rise of SaaS for the industry.</div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
          <div className="text-[88px] text-white tracking-[-1px] leading-[88px] semi-light pb-6 border-b border-[rgba(255,255,255,0.3)]">450+</div>
   
          <div className="flex flex-col gap-3">
            <div className="text-[#99B0F6] text-[12px] uppercase leading-[22px] tracking-[2.5px] font-semibold">Implementations</div>
              <div className="text-[rgba(255,255,255,0.7)] text-[15px] leading-[22px] tracking-[0.2px]">Hundreds of funds trust Enfusion technology for their operations.</div>
            </div>
          </div>
          </div>
        </div>
      </div>
    )
  }