import List from 'components/List/List';
import Timeline from 'components/Timeline/Timeline';
import React from 'react';

import './ExperienceView.css';
import { data } from '../../components/Timeline/timelineData';

function ExperienceView() {
  // TODO add in API call to live json file in github pages with good loading message
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

      <Timeline title={data.title} items={data.items}></Timeline>
    </div>
  );
}

export default ExperienceView;
