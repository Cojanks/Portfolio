import List from 'components/List/List';
import React from 'react';

import './ExperienceView.css';

const expList = [
  {
    icon: 'wrench',
    content: (
      <div className="doubleHeader">
        <h4 className="ui header">
          <div className="content">
            Front End Engineer - Your company
            <div className="sub header">
              Invitation Sent, awiating confirmation
            </div>
          </div>
        </h4>
      </div>
    ),
  },
  {
    icon: 'wrench',
    content: (
      <div className="doubleHeader">
        <h4 className="ui header">
          <div className="content">
            Front End Engineer - Snap Inc (Formally Vertebrae, acquired Aug
            '21')
            <div className="sub header">
              Last activity, Sept 2022 (Account created: Dec 2019) - Austin, TX
            </div>
          </div>
        </h4>
      </div>
    ),
  },
  {
    icon: 'wrench',
    content: (
      <div className="doubleHeader">
        <h4 className="ui header">
          <div className="content">
            UX Engineer / Design Technologist - Charles Schwab
            <div className="sub header">
              Last activity, Dec 2019 (Account created: May 2017) - Austin, TX
            </div>
          </div>
        </h4>
      </div>
    ),
  },
];

function ExperienceView() {
  return (
    <div className="experienceView">
      <div className="experienceSocials">
        You can view my full experience history on my
        <a href="https://www.linkedin.com/in/cojanks/"> LinkedIn</a>
      </div>
      <List items={expList} defaultIconSize="big"></List>
    </div>
  );
}

export default ExperienceView;
