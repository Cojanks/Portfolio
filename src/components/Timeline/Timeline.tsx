import React, { FC } from 'react';

import './Timeline.css';

import { CompPropsWithChildrenAndStyles } from 'types';

type TimelineType = {
  title: string | React.ReactNode | JSX.Element;
  items: TimelineItem[];
} & CompPropsWithChildrenAndStyles;

interface TimelineItem {
  date: string | React.ReactNode | JSX.Element;
  isCurrent?: boolean;
  eventType?: string;
  content: string;
  contentExtras?: TimelineItemExtras;
  additionalTimeframeEvents?: TimelineAdditionalItem[];
}
type TimelineAdditionalItem = {
  date: string;
  content: string;
  contentExtras?: TimelineItemExtras;
};

// The 'type' below would have the options like 'list' | 'image' | etc... and that would determine how the component would have displayed the things but for the sake of time, I left it open as a string
type TimelineItemExtras = {
  type: string;
  list: string[];
};

const Timeline: FC<TimelineType> = ({ title, items }) => {
  console.log(items);
  return (
    <div className="timeline--container">
      <div className="timeline--line-visual"></div>
      <div className="timeline--content-container">
        <ul className="timeline--item-timeframe-list">
          {items.map((item, i) => {
            return (
              <li
                key={i}
                className={
                  item.isCurrent
                    ? 'timeline--item-block current'
                    : 'timeline--item-block'
                }
              >
                <span className="timeline--item-block-arrow"></span>
                <span className="timeline--item-timeframe">{item.date}</span>
                <div className="timeline--item-content">{item.content}</div>
                {item.contentExtras && (
                  <div className="timeline--item-content-additional">
                    <ul className="timeline--item-content-additional-list">
                      {item.contentExtras.list.map((extraContent) => {
                        return <li>{extraContent}</li>;
                      })}
                    </ul>
                  </div>
                )}

                {item.additionalTimeframeEvents &&
                  item.additionalTimeframeEvents.map((extraEvent) => {
                    return (
                      <div className="timeline--item-extra-item">
                        <span className="timeline--item-block-arrow"> </span>
                        <span className="timeline--item-timeframe">
                          {extraEvent.date}
                        </span>
                        <div className="timeline--item-content">
                          {extraEvent.content}
                        </div>
                      </div>
                    );
                  })}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Timeline;
