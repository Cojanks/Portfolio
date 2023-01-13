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
      <div className="ui two column centered grid">
        <div className="five wide column">
          <ProfileCard
            image={process.env.PUBLIC_URL + '/assets/profilePic.png'}
            header={'Corey Jenkins'}
            subheader={'Design Technologist'}
            description={'Corey is a Front End Developer based in Austin, TX'}
            clickableDrawer
            styles={{ marginTop: '60px' }}
          >
            <List items={profileCardList}></List>
          </ProfileCard>
        </div>
        <div className="ten wide column">
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
    </section>
  );
}

export default AboutMeSection;
