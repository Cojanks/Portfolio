import Modal from 'components/Modal/Modal';
import Pill from 'components/Pill/Pill';
import React, { useState, FC } from 'react';

import './Item.css';
import { ItemType } from './Types';

const Item: FC<ItemType> = ({
  id,
  name,
  description,
  tags,
  externalLinks,
  activeTags = {},
  tagProps = [],
  itemCustomHeader,
  secret,
}) => {
  const [isModalOpen, setisModalOpen] = useState(false);
  let tagObj: { [key: string]: string } = {};

  const createTagObj = () => {
    tagProps.forEach((tag) => {
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
          <div className="item--info-content">
            {itemCustomHeader ? (
              <h4>
                {itemCustomHeader.subHeader}{' '}
                <span
                  style={{
                    color: '#a6a6a6',
                    fontSize: '16px',
                    marginLeft: '5px',
                  }}
                >
                  by {itemCustomHeader.subHeader}
                </span>
              </h4>
            ) : (
              <h4>{name}</h4>
            )}
            <p>{description}</p>
          </div>
          <div className="item--info-cta"></div>
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
          <span style={{ marginRight: '5px' }}>
            {secret ? 'Found a secret? This is tagged:' : 'Features:'}{' '}
          </span>
          {tags.map((tag) => {
            let name = tag.toLowerCase();
            return (
              <Pill
                key={name}
                label={name}
                variant={activeTags[name] ? 'filled' : 'outlined'}
                color={secret ? '#666' : tagObj[name]}
                noHover
              >
                {name}
              </Pill>
            );
          })}
        </div>
      </div>
      {isModalOpen && <Modal></Modal>}
    </div>
  );
};

export default Item;
