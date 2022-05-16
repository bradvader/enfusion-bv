/* This example requires Tailwind CSS v2.0+ */
export default function Awards() {
  return (

    <div className="w-full py-16 sm:py-24">
      <div className="mx-auto flex flex-col lg:flex-row max-w-[1120px] mb-14 px-6 xl:px-0 gap-4  justify-between">
        <div className="flex flex-col gap-4 lg:gap-5">
        <div className="uppercase tracking-[2.5px] leading-[22px] text-[14px] text-[#7D5FFF] font-semibold">Recent Awards</div>
        <div className="tracking-[-0.5px] leading-[38px] lg:leading-[56px] text-[30px] lg:text-[48px] text-[#1e1a34]">Earning the respect of our peers.</div>
        </div>
        <div className="hidden md:flex flex-col justify-end">
        <div className="flex flex-row w-[158px] h-[32px] mr-[30px]">
          <div className="fcta1 w-[152px] h-[32px] leading-[32px] text-[#1e1a34] font-semibold">See All Awards</div>
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
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px] max-w-[1120px] sm:flex-row justify-between mb-14 px-6 xl:px-0 transition-all animate-fade-in-up">

        <div className="award-1 flex flex-col justify-start gap-3 border-t border-[rgba(30,26,52,0.2)] pt-3">
          <div className="flex flex-row justify-start gap-2">
            <div className="flex">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 19.5C19.9706 19.5 24 15.4706 24 10.5C24 5.52944 19.9706 1.5 15 1.5C10.0294 1.5 6 5.52944 6 10.5C6 15.4706 10.0294 19.5 15 19.5Z" stroke="#7D5FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15.0029 19.5049L20.1029 28.3383L22.5 23.4903L27.8972 23.8383L22.7972 15.0049" stroke="#7D5FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7.20276 15.0049L2.10276 23.8383L7.49987 23.4903L9.89699 28.3383L14.997 19.5049" stroke="#7D5FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex text-[#7d5fff] text-[12px] leading-[18px] tracking-[0.25px] self-center font-semibold">Award Category</div></div>
          <div className="flex text-[#1e1a34] text-[18px] leading-[26px] tracking-[0.2px] w-[256px] font-semibold">Award Name Lorem Ipsum Dolor Seder Etalumon</div>
          <div className="flex row justify-start gap-2 text-[12px] text-[#1e1a34] leading-[18px] tracking-[0.25px]"><div className="">Organizational Title</div><div className="award-slash text-[rgba(30,26,2,0.5)]">&#47;</div>
            <div className="award-year text-[rgba(30,26,2,0.5)]">2021</div></div>
        </div>

        <div className="award-2 flex flex-col justify-start gap-3 border-t border-[rgba(30,26,52,0.2)] pt-3">
          <div className="frame-122 flex flex-row justify-start"><div className="awards-ribbon">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 19.5C19.9706 19.5 24 15.4706 24 10.5C24 5.52944 19.9706 1.5 15 1.5C10.0294 1.5 6 5.52944 6 10.5C6 15.4706 10.0294 19.5 15 19.5Z" stroke="#7D5FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15.0029 19.5049L20.1029 28.3383L22.5 23.4903L27.8972 23.8383L22.7972 15.0049" stroke="#7D5FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7.20276 15.0049L2.10276 23.8383L7.49987 23.4903L9.89699 28.3383L14.997 19.5049" stroke="#7D5FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
            <div className="text-[#7d5fff] text-[12px] leading-[18px] tracking-[0.25px] self-center ml-2 font-semibold">Portfolio Management</div></div>
          <div className="text-[#1e1a34] text-[18px] leading-[26px] tracking-[0.2px] w-[256px] font-semibold">Best Asset<br />Management System</div><div className="flex row justify-start gap-2 text-[12px] text-[#1e1a34] leading-[18px] tracking-[0.25px]"><div className="">Organizational Title</div><div className="award-slash text-[rgba(30,26,2,0.5)]">&#47;</div>
            <div className="award-year text-[rgba(30,26,2,0.5)]">2021</div></div></div>

        <div className="award-3 flex flex-col justify-start gap-3 border-t border-[rgba(30,26,52,0.2)] pt-3">
          <div className="frame-122 flex flex-row justify-start"><div className="awards-ribbon">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 19.5C19.9706 19.5 24 15.4706 24 10.5C24 5.52944 19.9706 1.5 15 1.5C10.0294 1.5 6 5.52944 6 10.5C6 15.4706 10.0294 19.5 15 19.5Z" stroke="#7D5FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15.0029 19.5049L20.1029 28.3383L22.5 23.4903L27.8972 23.8383L22.7972 15.0049" stroke="#7D5FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7.20276 15.0049L2.10276 23.8383L7.49987 23.4903L9.89699 28.3383L14.997 19.5049" stroke="#7D5FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
            <div className="text-[#7d5fff] text-[12px] leading-[18px] tracking-[0.25px] self-center ml-2 font-semibold">Employer</div></div><div className="text-[#1e1a34] text-[18px] leading-[26px] tracking-[0.2px] w-[256px] font-semibold">100 Ultimate Fintech Workplaces</div><div className="flex row justify-start gap-2 text-[12px] text-[#1e1a34] leading-[18px] tracking-[0.25px]"><div className="">Organizational Title</div><div className="award-slash text-[rgba(30,26,2,0.5)]">&#47;</div>
            <div className="award-year text-[rgba(30,26,2,0.5)]">2021</div></div></div>

        <div className="award-4 flex flex-col justify-start gap-3 border-t border-[rgba(30,26,52,0.2)] pt-3">
          <div className="frame-122 flex flex-row justify-start"><div className="awards-ribbon">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 19.5C19.9706 19.5 24 15.4706 24 10.5C24 5.52944 19.9706 1.5 15 1.5C10.0294 1.5 6 5.52944 6 10.5C6 15.4706 10.0294 19.5 15 19.5Z" stroke="#7D5FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15.0029 19.5049L20.1029 28.3383L22.5 23.4903L27.8972 23.8383L22.7972 15.0049" stroke="#7D5FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7.20276 15.0049L2.10276 23.8383L7.49987 23.4903L9.89699 28.3383L14.997 19.5049" stroke="#7D5FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
            <div className="text-[#7d5fff] text-[12px] leading-[18px] tracking-[0.25px] self-center ml-2 font-semibold">Employer</div></div><div className="text-[#1e1a34] text-[18px] leading-[26px] tracking-[0.2px] w-[256px] font-semibold">Best Places to Work in Chicago Selection</div><div className="flex row justify-start gap-2 text-[12px] text-[#1e1a34] leading-[18px] tracking-[0.25px]"><div className="">Organizational Title</div><div className="award-slash text-[rgba(30,26,2,0.5)]">&#47;</div>
            <div className="award-year text-[rgba(30,26,2,0.5)]">2021</div></div></div>

        <div className="award-5 flex flex-col justify-start gap-3 border-t border-[rgba(30,26,52,0.2)] pt-3">
          <div className="frame-122 flex flex-row justify-start"><div className="awards-ribbon">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 19.5C19.9706 19.5 24 15.4706 24 10.5C24 5.52944 19.9706 1.5 15 1.5C10.0294 1.5 6 5.52944 6 10.5C6 15.4706 10.0294 19.5 15 19.5Z" stroke="#7D5FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15.0029 19.5049L20.1029 28.3383L22.5 23.4903L27.8972 23.8383L22.7972 15.0049" stroke="#7D5FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7.20276 15.0049L2.10276 23.8383L7.49987 23.4903L9.89699 28.3383L14.997 19.5049" stroke="#7D5FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
            <div className="text-[#7d5fff] text-[12px] leading-[18px] tracking-[0.25px] self-center ml-2 font-semibold">Services</div></div><div className="text-[#1e1a34] text-[18px] leading-[26px] tracking-[0.2px] w-[256px] font-semibold">Best Managed Service Provider in Eurpean Services Awards</div><div className="flex row justify-start gap-2 text-[12px] text-[#1e1a34] leading-[18px] tracking-[0.25px]"><div className="">Organizational Title</div><div className="award-slash text-[rgba(30,26,2,0.5)]">&#47;</div>
            <div className="award-year text-[rgba(30,26,2,0.5)]">2021</div></div></div>

        <div className="award-6 flex flex-col justify-start gap-3 border-t border-[rgba(30,26,52,0.2)] pt-3">
          <div className="frame-122 flex flex-row justify-start"><div className="awards-ribbon">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 19.5C19.9706 19.5 24 15.4706 24 10.5C24 5.52944 19.9706 1.5 15 1.5C10.0294 1.5 6 5.52944 6 10.5C6 15.4706 10.0294 19.5 15 19.5Z" stroke="#7D5FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15.0029 19.5049L20.1029 28.3383L22.5 23.4903L27.8972 23.8383L22.7972 15.0049" stroke="#7D5FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7.20276 15.0049L2.10276 23.8383L7.49987 23.4903L9.89699 28.3383L14.997 19.5049" stroke="#7D5FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
            <div className="text-[#7d5fff] text-[12px] leading-[18px] tracking-[0.25px] self-center ml-2 font-semibold">Technology</div></div><div className="text-[#1e1a34] text-[18px] leading-[26px] tracking-[0.2px] w-[256px] font-semibold">Best Risk Management Technology in Technology and WSL Awards</div><div className="flex row justify-start gap-2 text-[12px] text-[#1e1a34] leading-[18px] tracking-[0.25px]"><div className="">Organizational Title</div><div className="award-slash text-[rgba(30,26,2,0.5)]">&#47;</div>
            <div className="award-year text-[rgba(30,26,2,0.5)]">2021</div></div></div>

        <div className="award-7 flex flex-col justify-start gap-3 border-t border-[rgba(30,26,52,0.2)] pt-3">
          <div className="frame-122 flex flex-row justify-start"><div className="awards-ribbon">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 19.5C19.9706 19.5 24 15.4706 24 10.5C24 5.52944 19.9706 1.5 15 1.5C10.0294 1.5 6 5.52944 6 10.5C6 15.4706 10.0294 19.5 15 19.5Z" stroke="#7D5FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15.0029 19.5049L20.1029 28.3383L22.5 23.4903L27.8972 23.8383L22.7972 15.0049" stroke="#7D5FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7.20276 15.0049L2.10276 23.8383L7.49987 23.4903L9.89699 28.3383L14.997 19.5049" stroke="#7D5FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
            <div className="text-[#7d5fff] text-[12px] leading-[18px] tracking-[0.25px] self-center ml-2 font-semibold">Services</div></div><div className="text-[#1e1a34] text-[18px] leading-[26px] tracking-[0.2px] w-[256px] font-semibold">Shortlisted as a Finalist in Four Operations and Services Awards Categories</div><div className="flex row justify-start gap-2 text-[12px] text-[#1e1a34] leading-[18px] tracking-[0.25px]"><div className="">Organizational Title</div><div className="award-slash text-[rgba(30,26,2,0.5)]">&#47;</div>
            <div className="award-year text-[rgba(30,26,2,0.5)]">2021</div></div></div>

        <div className="award-8 flex flex-col justify-start gap-3 border-t border-[rgba(30,26,52,0.2)] pt-3">
          <div className="frame-122 flex flex-row justify-start"><div className="awards-ribbon">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 19.5C19.9706 19.5 24 15.4706 24 10.5C24 5.52944 19.9706 1.5 15 1.5C10.0294 1.5 6 5.52944 6 10.5C6 15.4706 10.0294 19.5 15 19.5Z" stroke="#7D5FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15.0029 19.5049L20.1029 28.3383L22.5 23.4903L27.8972 23.8383L22.7972 15.0049" stroke="#7D5FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7.20276 15.0049L2.10276 23.8383L7.49987 23.4903L9.89699 28.3383L14.997 19.5049" stroke="#7D5FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
            <div className="text-[#7d5fff] text-[12px] leading-[18px] tracking-[0.25px] self-center ml-2 font-semibold">Employer</div></div><div className="text-[#1e1a34] text-[18px] leading-[26px] tracking-[0.2px] w-[256px] font-semibold">Best Places to Work in Chicago Finalist</div><div className="flex row justify-start gap-2 text-[12px] text-[#1e1a34] leading-[18px] tracking-[0.25px]"><div className="">Organizational Title</div><div className="award-slash text-[rgba(30,26,2,0.5)]">&#47;</div>
            <div className="award-year text-[rgba(30,26,2,0.5)]">2021</div></div>
        </div>


      </div>
      <div className="md:hidden flex flex-row w-[158px] h-[32px] ml-5">
          <div className="fcta1 w-[152px] h-[32px] leading-[32px] text-[#1e1a34] font-semibold">See All Awards</div>
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
  )
}