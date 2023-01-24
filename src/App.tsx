import React from 'react';
import AboutMeSection from 'views/AboutMeSection/AboutMeSection';
import ExamplesSection from 'views/ExamplesSection';
import IntroductionSection from 'views/IntroductionSection';

function App() {
  return (
    <div>
      <IntroductionSection></IntroductionSection>
      <AboutMeSection></AboutMeSection>
      <ExamplesSection></ExamplesSection>
    </div>
  );
}

export default App;
