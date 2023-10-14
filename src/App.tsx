import React, { FC } from 'react';

import {
  Navbar,
  AboutMe,
  Projects,
  Articles,
  HeroSection,
  Recommendations,
  SkillSetCarousel,
} from 'components';

const App: FC = () => {
  return (
    <div className="h-full w-full">
      <section className="p-5 md:p-20 h-[92vh] flex gap-10 flex-wrap">
        <Navbar />
        <HeroSection />
        <SkillSetCarousel />
      </section>

      <section className="p-5 md:p-20 bg-primary flex justify-center">
        <AboutMe />
      </section>

      <section className="min-h-[100vh] py-20 relative overflow-hidden">
        <p className="text-center heading-2">Check out my work</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 relative">
          <Articles />
          <Projects />
        </div>

        <div
          className={`bg-[#875FFA70] absolute top-[5%] left-[15%] w-[10vw] h-[10vw] rounded-full blur-3xl z-[-1]`}
        />
        <div
          className={`bg-[#db277760] absolute top-[10%] right-[-5%] w-[20vw] h-[20vw] rounded-full blur-3xl z-[-1]`}
        />
        <div
          className={`bg-[#1FB2A580] absolute top-[55%] right-[20%] w-[15vw] h-[15vw] rounded-full blur-3xl z-[-1]`}
        />
      </section>
      <section className="min-h-full md:min-h-screen p-5 md:p-20 py-[100px] flex flex-col gap-5 items-center justify-center relative">
        <Recommendations />
      </section>
    </div>
  );
};

export default App;
