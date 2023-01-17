import Pill from 'components/Pill/Pill';
import React, { FC, useEffect, useState } from 'react';
import { CompPropsWithChildrenAndStyles } from 'types';

import './ItemList.css';

type ItemListbProps = {
  tags: TagTypes[];
  initTagsActive?: string[];
  items: ItemTypes[];
  key?: string;
} & CompPropsWithChildrenAndStyles;

export type TagTypes = {
  name: string;
  color?: string;
  textColor?: string;
};

type ItemTypes = {
  name: string;
  description: string;
  tags: string[];
  externalLinks: ExternalLinkTypes[];
};

type ExternalLinkTypes = {
  name: string;
  url: string;
};

const ItemList: FC<ItemListbProps> = ({ tags, items, initTagsActive = [] }) => {
  const setInitActiveTags = () => {
    let stateObj: { [key: string]: boolean } = {};

    tags.map((tag) => {
      let name = tag.name.toLowerCase();
      stateObj[name] = initTagsActive.includes(name);
    });

    return stateObj;
  };

  const [activeTags, setactiveTags] = useState(setInitActiveTags);

  console.log(activeTags);

  return (
    <div className="itemList--container">
      <div className="itemList--filter-container">
        <div className="itemList--filter-header">Filter By:</div>
        <div className="itemList--filter-pills-container">
          {tags.map((tag) => {
            return (
              <Pill
                key={tag.name}
                color={tag.color}
                clickable
                onClick={() => {
                  const name = tag.name.toLowerCase();
                  const newVal = !activeTags[name];
                  setactiveTags({
                    ...activeTags,
                    [name as string]: newVal,
                  });
                }}
                variant={
                  activeTags[tag.name.toLowerCase()] ? 'filled' : 'outlined'
                }
              >
                {tag.name}
              </Pill>
            );
          })}
        </div>
      </div>
      <div className="itemList--content-container">
        {items
          .filter((item) => {
            return item.tags.some((tag) => {
              return activeTags[tag.toLowerCase()];
            });
          })
          .map((item) => {
            return (
              <div key={item.name} className="">
                {item.name}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ItemList;
