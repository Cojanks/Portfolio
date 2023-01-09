import List from 'components/List/List';
import ProfileCard from 'components/ProfileCard/ProfileCard';
import Tab from 'components/Tab/Tab';
import { pages, profileCardList } from 'data/data';
import React from 'react';
import './AboutMeSection.css';

function AboutMeSection() {
  return (
    <section className="aboutMeSection">
      <ProfileCard
        image={process.env.PUBLIC_URL + '/assets/profilePic.png'}
        header={'Corey Jenkins'}
        subheader={'Design Technologist'}
        description={'Corey is a Front End Developer based in Austin, TX'}
        clickableDrawer
      >
        <List items={profileCardList}></List>
      </ProfileCard>

      <Tab panes={pages}></Tab>
    </section>
  );
}

export default AboutMeSection;
