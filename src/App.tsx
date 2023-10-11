import React from 'react';

import { HeroSection, Navbar, SkillSetCarousel } from 'components';

function App() {
  return (
    <div className="h-full w-full">
      <Navbar />
      <HeroSection />
      <SkillSetCarousel />
    </div>
  );
}

export default App;
