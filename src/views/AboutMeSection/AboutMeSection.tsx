import React from 'react';
import Tab from 'components/Tab/Tab';
import ProfileCard from 'components/ProfileCard/ProfileCard';
import { profileCardList } from 'data/data';

import ExperienceView from 'views/AboutMeSection/ExperienceView';
import QualificationsView from './QualificationsView';

import './AboutMeSection.css';
import List from 'components/List/List';

function AboutMeSection() {
  return (
    <section className="aboutMeSection">
      <div className="ui two tablet column stackable centered grid responsiveGridContainer">
        <div className="five wide column">
          <div className="cardContainer">
            <ProfileCard
              image={process.env.PUBLIC_URL + '/assets/profilePicture.jpeg'}
              header={'Corey Jenkins'}
              subheader={'Font End Engineer'}
              description={
                'Corey is a Front-End / UX Engineer based in Austin, TX'
              }
              clickableDrawer
            >
              <List items={profileCardList}></List>
            </ProfileCard>
          </div>
        </div>
        <div className="ten wide column">
          <div style={{ width: '100%' }}>
            <div className="card--header" style={{ fontSize: '24px' }}>
              Stats:
            </div>
            <div
              className="card--subheader"
              style={{ fontSize: '18px', marginBottom: '15px' }}
            >
              Internet Bard: Front End Developer [Lvl 5] - Chaotic Pragmatic
            </div>
            <Tab
              panes={[
                {
                  tabTitle: 'Qualifications & Skills',
                  tabContent: {
                    tabKey: 'quals',
                    content: <QualificationsView></QualificationsView>,
                  },
                },
                {
                  tabTitle: 'Experience',
                  tabContent: {
                    tabKey: 'exp',
                    content: <ExperienceView></ExperienceView>,
                  },
                },
              ]}
            ></Tab>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMeSection;
