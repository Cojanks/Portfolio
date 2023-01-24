import React from 'react';
import AboutMeSection from 'views/AboutMeSection/AboutMeSection';
import ExamplesSection from 'views/ExamplesSection';
import IntroductionSection from 'views/IntroductionSection';

function App() {
  console.log('H4X0r m41nFr4m3...');
  console.log('Accessing personal email...');
  console.log("Setting default to 'Reply All'...");
  console.log('Ordering entire Nicolas Cage filmography to home address...');
  return (
    <div>
      <IntroductionSection></IntroductionSection>
      <AboutMeSection></AboutMeSection>
      <ExamplesSection></ExamplesSection>
    </div>
  );
}

export default App;
