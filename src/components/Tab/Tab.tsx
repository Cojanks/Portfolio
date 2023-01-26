import React, { FC, useState } from 'react';
import { CompPropsWithChildrenAndStyles } from 'types';
import './Tab.css';

type TabProps = {
  panes: TabPaneTypes[];
  initTabActive: number;
  onTabChange?: (index: number) => void | undefined;
} & CompPropsWithChildrenAndStyles;

type TabPaneTypes = {
  tabTitle: string;
  tabContent: TabPaneContentTypes;
};

type TabPaneContentTypes = {
  tabKey: string;
  content: string | React.ReactNode | JSX.Element;
};

const Tab: FC<TabProps> = ({ panes, initTabActive, onTabChange }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(initTabActive || 0);

  const tabChange = (ind: number) => {
    setActiveTabIndex(ind);

    if (onTabChange) {
      onTabChange(ind);
    }
  };

  return (
    <div className="tab--container">
      <div className="tab--header-container">
        {panes.map((header, ind) => {
          return (
            <div
              key={header.tabContent.tabKey}
              className={
                ind === activeTabIndex
                  ? 'tab--header tab--header-active'
                  : 'tab--header'
              }
              onClick={() => {
                tabChange(ind);
              }}
            >
              {header.tabTitle}
            </div>
          );
        })}
      </div>
      <div className="tab--content">
        {panes[activeTabIndex].tabContent.content}
      </div>
    </div>
  );
};

export default Tab;
