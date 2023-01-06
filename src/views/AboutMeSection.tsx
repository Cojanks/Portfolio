import ProfileCard from 'components/ProfileCard/ProfileCard';
import Tab from 'components/Tab/Tab';
import React from 'react';
import { Icon, List } from 'semantic-ui-react';
import './AboutMeSection.css';

const pages = [
  {
    tabTitle: 'First!',
    tabContent: {
      tabKey: 'tab1',
      content: <div>derp</div>,
    },
  },
  {
    tabTitle: 'Second!',
    tabContent: {
      tabKey: 'tab2',
      content: <div>second</div>,
    },
  },
];

function AboutMeSection() {
  return (
    <section className="aboutMeSection">
      {/* <ProfileCard
        image={process.env.PUBLIC_URL + '/assets/profilePic.png'}
        header={'Corey Jenkins'}
        subheader={'Design Technologist'}
        description={'Corey is a Front End Developer based in Austin, TX'}
        clickableDrawer
      >
        <List>
          <List.Item>
            <Icon name="check" color="teal"></Icon>
            <List.Content>
              <div className="typography-grey">Verified Human</div>
            </List.Content>
          </List.Item>
          <List.Item>
            <Icon name="text width" color="teal"></Icon>
            <List.Content>
              <a
                href="https://motionographer.com/"
                target="_blank"
                rel="noreferrer"
                className="typography-grey"
              >
                Typography & Motion Graphics Enthusiast
              </a>
            </List.Content>
          </List.Item>
          <List.Item>
            <Icon name="camera retro" color="teal"></Icon>
            <List.Content>
              <div className="typography-grey">
                Artist by education, Engineer by passion
              </div>
            </List.Content>
          </List.Item>
          <List.Item>
            <Icon name="bicycle" color="teal"></Icon>
            <List.Content>
              <div className="typography-grey">Bike Commuter</div>
            </List.Content>
          </List.Item>
        </List>
      </ProfileCard> */}

      <Tab panes={pages}></Tab>
    </section>
  );
}

export default AboutMeSection;
