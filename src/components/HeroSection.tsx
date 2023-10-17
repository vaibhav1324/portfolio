import { FC } from 'react';

import ContactMe from './ContactMe';

import vaibhav from '../assets/vaibhav-profile.jpg';

const HeroSection: FC = () => {
  return (
    <div className="flex flex-1 flex-wrap items-center gap-10 relative">
      <div className="max-w-max md:max-w-min">
        <h1 className="heading whitespace-pre leading-tight font-semibold text-center">
          Software Engineer
        </h1>
        <p className="sub-heading mt-4 text-center md:text-left">
          I channel my critical thinking skills into crafting seamless digital
          experiences that not only look good but function flawlessly.
        </p>
        <div className="w-full grid place-items-center md:place-items-start">
          <ContactMe />
        </div>
      </div>
      <div
        className={`bg-[#3ABFF860] absolute top-0 left-[10%] w-[5vw] h-[5vw] rounded blur-xl z-[-1]`}
      />
      <div
        className={`bg-[#db277760] absolute top-[85%] w-[10vw] h-[10vw] rounded-full blur-2xl z-[-1]`}
      />
      <div
        className={`bg-[#875FFA50] absolute top-0 left-[45%] w-[20vw] h-[20vw] rounded-full blur-2xl z-[-1]`}
      />

      <div className="flex flex-1 justify-center items-center">
        <div className="w-[180px] md:w-[300px] h-[180px] md:h-[300px] rounded-full bg-white overflow-hidden">
          <img src={vaibhav} alt="vaibhav" className="rounded object-cover" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
