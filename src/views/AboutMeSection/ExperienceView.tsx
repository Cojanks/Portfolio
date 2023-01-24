import List from 'components/List/List';
import Timeline from 'components/Timeline/Timeline';
import React, { useEffect, useState } from 'react';

import './ExperienceView.css';
import { TimelineType } from 'components/Timeline/Types';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

function ExperienceView() {
  // TODO add in API call to live json file in github pages with good loading message
  const [timeLineData, settimeLineData] = useState<TimelineType>();
  const [hasError, sethasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://cojanks.github.io/portfolio/vq9n5qemq45yf98d/tm.json'
      );

      if (!response.ok) {
        sethasError(true);
      } else {
        const data = await response.json();
        settimeLineData(data);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="experienceView">
      <div className="experienceSocials">
        You can view my full experience history on my
        <a
          href="https://www.linkedin.com/in/cojanks/"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          LinkedIn
        </a>
      </div>

      {timeLineData && (
        <Timeline
          title={timeLineData.title}
          items={timeLineData.items}
        ></Timeline>
      )}
      {hasError && (
        <ErrorMessage>
          <p>
            Huh, I think the rats got into my wires... Check back in a little
            bit!
          </p>
          <img
            src="https://media.giphy.com/media/PQX1rxXfDBR5bEQl96/giphy.gif"
            alt="Absolute Dumpster fire"
            style={{ margin: '10px auto', display: 'block', width: '50%' }}
          />
        </ErrorMessage>
      )}
    </div>
  );
}

export default ExperienceView;
