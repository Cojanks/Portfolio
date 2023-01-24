import React, { FC } from 'react';

import './Timeline.css';

import { CompPropsWithChildrenAndStyles } from 'types';
import { Icon, SemanticICONS } from 'semantic-ui-react';

type TimelineType = {
  title: string;
  items: TimelineItem[];
} & CompPropsWithChildrenAndStyles;

interface TimelineItem {
  date: string;
  isCurrent?: boolean;
  eventType?: string;
  content: string;
  contentExtras?: TimelineItemExtras;
  additionalTimeframeEvents?: TimelineAdditionalItem[];
}
// The 'type' propertiess in the next two types below would have the options like 'list' | 'image' | etc... and that would determine how the component would have displayed the things but for the sake of time, I left it open as a string
type TimelineAdditionalItem = {
  date: string;
  content?: string;
  type?: string;
  contentExtras?: TimelineItemExtras;
};

type TimelineItemExtras = {
  type: string;
  list?: string[];
  iconList?: IconListType[];
};

type IconListType = {
  icon: SemanticICONS | any;
  content: string;
};

const Timeline: FC<TimelineType> = ({ title, items }) => {
  const getExtraItemClasses = (itemType: string | undefined) => {
    let classes = 'timeline--item-extra-item';

    if (itemType && itemType === 'event') {
      classes += ' event';
    }

    return classes;
  };
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
                    <ul
                      className={
                        !!item.contentExtras.iconList
                          ? 'timeline--item-content-additional-list timeline--item-content-additional-icon-list'
                          : 'timeline--item-content-additional-list'
                      }
                    >
                      {item.contentExtras.iconList &&
                        item.contentExtras.iconList.map((iconItem, i) => {
                          return (
                            <li key={i}>
                              <Icon
                                name={
                                  iconItem.icon === ''
                                    ? 'angle right'
                                    : iconItem.icon
                                }
                              ></Icon>{' '}
                              {iconItem.content}
                            </li>
                          );
                        })}
                      {item.contentExtras.list &&
                        item.contentExtras.list.map((extraContent) => {
                          return <li>{extraContent}</li>;
                        })}
                    </ul>
                  </div>
                )}

                {item.additionalTimeframeEvents &&
                  item.additionalTimeframeEvents.map((extraEvent, i) => {
                    return (
                      <div
                        className={getExtraItemClasses(extraEvent.type)}
                        key={i}
                      >
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
