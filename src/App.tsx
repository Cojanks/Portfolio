import React from 'react';
import AboutMeSection from 'views/AboutMeSection/AboutMeSection';
import ExamplesSection from 'views/ExamplesSection';
import IntroductionSection from 'views/IntroductionSection';

function App() {
  console.log('H4X0r m41nFr4m3...');
  console.log('Accessing personal email...');
  console.log("Setting default to 'Reply All'...");
  console.log('Ordering entire Nicolas Cage filmography to home address...');
  console.log('-----------------------------------------------------------');
  console.log(
    "Ok, I have hidden things all over this page & it's code, some obvious, some not. Good luck, adventurer! "
  );
  return (
    <>
      <IntroductionSection></IntroductionSection>
      <AboutMeSection></AboutMeSection>
      <ExamplesSection></ExamplesSection>
    </>
  );
}

export default App;
