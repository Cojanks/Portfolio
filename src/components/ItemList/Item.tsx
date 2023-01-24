import Pill from 'components/Pill/Pill';
import React, { FC } from 'react';

import './Item.css';
import { ItemType } from './Types';

const Item: FC<ItemType> = ({
  name,
  description,
  tags,
  externalLinks,
  activeTags,
  tagProps,
  itemCustomHeader,
}) => {
  let tagObj: { [key: string]: string } = {};

  const createTagObj = () => {
    tagProps.map((tag) => {
      let name = tag.name.toLowerCase();
      tagObj[name] = tag.color!;
    });
  };

  createTagObj();

  return (
    <div className="item--container">
      <div className="item--main-section">
        <div className="item--img-container"></div>
        <div className="item--info">
          {itemCustomHeader ? itemCustomHeader : <h4>{name}</h4>}
          <p>{description}</p>
        </div>
        <div className="item--extras"></div>
      </div>
      <div className="item--footer">
        <div className="item--footer-links">
          {externalLinks &&
            externalLinks.map((linkItem) => {
              if (linkItem.url) {
                return (
                  <a
                    key={linkItem.name}
                    href={linkItem.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ cursor: 'pointer', marginRight: '7px' }}
                  >
                    {' '}
                    <Pill
                      label={linkItem.name}
                      variant="outlined"
                      color="#828282"
                      shape="square"
                    >
                      {linkItem.name}
                    </Pill>
                  </a>
                );
              } else {
                return <></>;
              }
            })}
        </div>
        <div className="item--footer-tags">
          {' '}
          <span style={{ marginRight: '5px' }}>Features: </span>
          {tags.map((tag) => {
            let name = tag.toLowerCase();
            return (
              <Pill
                key={name}
                label={name}
                variant={activeTags[name] ? 'filled' : 'outlined'}
                color={tagObj[name]}
                noHover
              >
                {name}
              </Pill>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Item;
