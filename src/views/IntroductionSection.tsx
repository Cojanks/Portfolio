import React, { useEffect, useState } from 'react';
import './IntroductionSection.css';

import 'semantic-ui-css/semantic.min.css';
import { Icon, Progress } from 'semantic-ui-react';

function IntroductionSection() {
  const [progressState, setprogressState] = useState(0);

  useEffect(() => {
    if (progressState < 100) {
      let rngTime = Math.floor(Math.random() * 400) + 1;
      let rngProgressAmount = Math.floor(Math.random() * 10) + 1;
      const interval = setTimeout(() => {
        let newStateVale = progressState;
        setprogressState(newStateVale + rngProgressAmount);
      }, rngTime);

      return () => clearTimeout(interval);
    }
  }, [progressState]);

  return (
    <section className="ui inverted vertical masthead center aligned segment introductionSection">
      <div className="ui text container introductionText">
        <h1 className="introductionH1">
          Hello. I'm <span className="colorEmphasis">Corey Jenkins</span>.
          <span style={{ display: 'block' }}>
            &lt;&gt; I build delightful Front End experiences. &lt;/&gt;
          </span>
        </h1>

        <div style={{ marginTop: '60px', marginBottom: '10px' }}>
          Hold on, getting some Tacos for us ( Austin has the best, hands down
          )...
        </div>
        <Progress
          percent={progressState}
          indicating
          progress
          inverted
          success={progressState >= 100}
        >
          {progressState >= 100 && (
            <div>
              <div>Ok, I am back.</div>
              <div>
                ( This progress bar was really just RNG. Enjoy finding the other
                easter eggs below! )
              </div>
              <div>
                <Icon name="angle double down"></Icon>
              </div>
            </div>
          )}
        </Progress>
      </div>
    </section>
  );
}

export default IntroductionSection;
