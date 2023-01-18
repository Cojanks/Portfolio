import Pill from 'components/Pill/Pill';
import React, { FC } from 'react';
import { CompPropsWithChildrenAndStyles, CompPropsWithOnClick } from 'types';

import './Item.css';
import { TagTypes } from './ItemList';

type ItemType = {
  name: string;
  description?: string;
  tags: string[];
  activeTags: { [key: string]: boolean };
  tagProps: TagTypes[];
  externalLinks?: ItemLinkTypes[];
} & CompPropsWithChildrenAndStyles &
  CompPropsWithOnClick;

type ItemLinkTypes = {
  name: string;
  url: string;
};

const Item: FC<ItemType> = ({
  name,
  description,
  tags,
  externalLinks,
  activeTags,
  tagProps,
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
          <h4>{name}</h4>
          <p>{description}</p>
        </div>
        <div className="item--extras"></div>
      </div>
      <div className="item--footer">
        {tags.map((tag) => {
          let name = tag.toLowerCase();
          return (
            <Pill
              key={name}
              label={name}
              variant={activeTags[name] ? 'filled' : 'outlined'}
              color={tagObj[name]}
            >
              {name}
            </Pill>
          );
        })}
      </div>
    </div>
  );
};

export default Item;
