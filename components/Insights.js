/* This example requires Tailwind CSS v2.0+ */
export default function Insights() {
    return (


<div className="mx-auto flex flex-col md:flex-row max-w-[1120px] mb-14 px-6 xl:px-0 gap-3 justify-between mt-32 ">
<div className="flex flex-col">
<div className="uppercase tracking-[2.5px] leading-[22px] text-[14px] text-[#7D5FFF]">Insights</div>
<div className="tracking-[-0.5px] leading-[56px] text-[48px] text-[#1e1a34]">All things in perspective</div>
</div>
<div className="flex flex-col justify-end">
<div className="flex flex-row w-[158px] h-[32px] mr-[30px]">
  <div className="fcta1 w-[152px] h-[32px] leading-[32px] text-[#1e1a34] font-semibold">See All Insights</div>
  <div className="fcta2 w-[50px] h-[32px]"><div className="cta-arrow w-[40px] h-[14px] my-[9px] ml-[14px] absolute">
    <svg className="w-[40px] h-[14px]" viewBox="0 0 40 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 13L38 6.9993M38 6.9993L32 1M38 6.9993H1" stroke="#1e1a34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
    <div className="cta-circle w-[32px] h-[32px] ml-[32px] absolute">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M31 16C31 24.2843 24.2843 31 16 31C7.71573 31 1 24.2843 1 16C1 7.71573 7.71573 1 16 1C24.2843 1 31 7.71573 31 16Z" stroke="#7D5FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg></div></div>
</div>
</div>
</div>

      



    )
  }