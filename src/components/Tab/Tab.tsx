import React, { FC, useState } from 'react';
import { CompPropsWithChildrenAndStyles } from 'types';
import './Tab.css';

type TabProps = {
  panes: TabPaneTypes[];
} & CompPropsWithChildrenAndStyles;

type TabPaneTypes = {
  tabTitle: string;
  tabContent: TabPaneContentTypes;
};

type TabPaneContentTypes = {
  tabKey: string;
  content: string | React.ReactNode | JSX.Element;
};

const Tab: FC<TabProps> = ({ panes }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

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
                setActiveTabIndex(ind);
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
