import React, { FC } from 'react';

import './Timeline.css';
import { Icon } from 'semantic-ui-react';

import { TimelineType } from './Types';

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
