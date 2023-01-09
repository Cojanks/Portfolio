import React from 'react';

export const pages = [
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

export const profileCardList = [
  {
    icon: 'check',
    iconColor: 'teal',
    content: <div className="typography-grey">Verified Human</div>,
  },
  {
    icon: 'text width',
    iconColor: 'teal',
    content: (
      <a
        href="https://motionographer.com/"
        target="_blank"
        rel="noreferrer"
        className="typography-grey"
      >
        Typography & Motion Graphics Enthusiast
      </a>
    ),
  },
  {
    icon: 'camera retro',
    iconColor: 'teal',
    content: (
      <div className="typography-grey">
        Artist by education, Engineer by passion
      </div>
    ),
  },
  {
    icon: 'bicycle',
    iconColor: 'teal',
    content: <div className="typography-grey">Bike Commuter</div>,
  },
];
