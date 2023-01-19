import React, { FC } from 'react';

import './Timeline.css';

import { CompPropsWithChildrenAndStyles } from 'types';

type TimelineType = {} & CompPropsWithChildrenAndStyles;

const Timeline: FC<TimelineType> = ({}) => {
  return (
    <div className="timeline--container">
      <div className="timeline--line-visual"></div>
      <div className="timeline--content-container">
        <ul className="timeline--item-timeframe-list">
          <li className="timeline--item-block current">
            <span className="timeline--item-timeframe">2020 - Jan</span>
            <div className="timeline--item-content">Hiired at Vertebrae</div>
          </li>
          <li className="timeline--item-block">
            <span className="timeline--item-timeframe">2019 - Dec</span>
            <div className="timeline--item-content">Left Charles Schwab</div>
            <div className="timeline--item-content-additional">
              <ul className="timeline--item-content-additional-list">
                <li>derp</li>
                <li>merp</li>
              </ul>
            </div>
            <div className="timeline--item-extra-item">
              <span className="timeline--item-timeframe">2019 - Jun</span>
              <div className="timeline--item-content">
                Hired at Charles Schwab
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Timeline;
