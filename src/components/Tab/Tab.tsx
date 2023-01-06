import React, { FC } from 'react';
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
  console.log(panes);
  return (
    <div className="tab--container">
      <div className="tab--header"></div>
      <div className="tab--content"></div>
    </div>
  );
};

export default Tab;
