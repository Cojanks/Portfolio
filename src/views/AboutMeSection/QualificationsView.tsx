import List from 'components/List/List';
import React from 'react';

import './QualificationsView.css';

const qualList = [
  {
    icon: 'wrench',
    content: (
      <>
        <div className="doubleHeader">
          <h4 className="ui header">
            <div className="content">
              Javascript & Front End Technologies
              <div className="sub header">The buzzwords of the year</div>
            </div>
          </h4>
        </div>

        <List
          items={[
            { content: 'React + Typescript' },
            { content: 'React Hooks, Redux + RTK' },
            { content: 'Storybook / unit testing' },
            { content: 'RESTful APIs' },
            { content: 'Optimizely & other A/B testing harnesses' },
          ]}
          defaultIcon="code"
          styles={{ marginLeft: '40px', marginTop: '10px' }}
        ></List>
      </>
    ),
  },
  {
    icon: 'sitemap',
    content: (
      <>
        <div className="doubleHeader">
          <h4 className="ui header">
            <div className="content">
              UX & other multidisciplinary proficiencies
              <a
                href="https://davidepstein.com/the-range/"
                target="_blank"
                rel="noreferrer"
                className="sub header subHeaderLink"
              >
                Being a leader means leveraging experience from many different
                areas
              </a>
            </div>
          </h4>
        </div>

        <List
          items={[
            { content: 'Design System thinking & architecture' },
            {
              content:
                'Re-usable, scalable, & flexible component creation to ease use by UX teams, business stakeholders, & developers alike',
            },
            {
              content:
                'Art/design education + the mind of an engineer (Combining the best of both worlds)',
            },
          ]}
          defaultIcon="code"
          styles={{ marginLeft: '40px', marginTop: '10px' }}
        ></List>
      </>
    ),
  },
  {
    icon: 'wrench',
    content: (
      <>
        <div className="doubleHeader">
          <h4 className="ui header">
            <div className="content">
              Bonus
              <div className="sub header">
                The creative outlets which fuse practicality with creation
              </div>
            </div>
          </h4>
        </div>

        <List
          items={[
            { content: 'Touchdesigner for interactive installations' },
            {
              content:
                'Arduino IDE (I build LED sculptures & design 3D printed wearables with interactability)',
            },
            { content: 'P5.js & other generative IDEs' },
          ]}
          defaultIcon="code"
          styles={{ marginLeft: '40px', marginTop: '10px' }}
        ></List>
      </>
    ),
  },
];

function QualificationsView() {
  return (
    <div className="qualificationsView">
      {/* TODO: turn this into component that adds popup when hovered */}
      {/* <div className="">
        <p>INT: BUSY TECH OFFICE - DAY</p>
        <p>
          Corey sits across from you, behind an ornate darkwood desk, sunglasses
          obscuring his eyes.
        </p>
        <p>Corey</p>
        <p>(MOBSTER VOICE)</p>
        <p>
          A certain resume URL says you were looking for some Qualifications.
        </p>
        <p>Corey takes a sip from his coffee cup</p>
        <p>Corey</p>
        <p>Let's make a deal.</p>
      </div> */}
      <List items={qualList} defaultIconSize="big"></List>
    </div>
  );
}

export default QualificationsView;
