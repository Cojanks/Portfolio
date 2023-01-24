import Pill from 'components/Pill/Pill';
import React, { FC, useState } from 'react';
import { Icon } from 'semantic-ui-react';
import Item from './Item';

import './ItemList.css';
import { ItemListProps } from './Types';

const ItemList: FC<ItemListProps> = ({
  header,
  tags,
  items,
  initTagsActive = [],
}) => {
  const [isFilterOpen, setisFilterOpen] = useState(true);

  const setInitActiveTags = () => {
    let stateObj: { [key: string]: boolean } = {};

    tags.forEach((tag) => {
      let name = tag.name.toLowerCase();
      stateObj[name] = initTagsActive.includes(name);
    });

    return stateObj;
  };

  const [activeTags, setactiveTags] = useState(setInitActiveTags);

  const handleFilterClick = () => {
    const initFilterOpen = isFilterOpen;
    setisFilterOpen(!initFilterOpen);
  };

  return (
    <div className="itemList--container">
      <div className="itemList--header-container" style={header.styles}>
        <h3 className="itemList--header">{header.headerText}</h3>
        {header.headerSubtext && (
          <p className="itemList--sub-header">{header.headerSubtext}</p>
        )}
      </div>
      <div className="itemList--filter-container">
        <div
          className={
            isFilterOpen
              ? 'itemList--filter-pills-container'
              : 'itemList--filter-pills-container closed'
          }
        >
          <span style={{ marginRight: '5px' }}>Filtered by: </span>
          {tags.map((tag) => {
            let tagName =
              tag.name.toLowerCase() === 'typescript'
                ? 'Typescript (all items)'
                : tag.name;
            return (
              <Pill
                key={tag.name}
                label={tagName}
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
                {tagName}
              </Pill>
            );
          })}
        </div>

        <div className="itemList--filter-expand" onClick={handleFilterClick}>
          {isFilterOpen ? (
            <>
              <span>Close Filters </span>
              <Icon name="angle double up"></Icon>
            </>
          ) : (
            <>
              <span>Filters </span>
              <Icon name="angle double down"></Icon>
            </>
          )}
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
              <Item
                id={item.id}
                key={item.id}
                name={item.name}
                description={item.description}
                tags={item.tags}
                externalLinks={item.externalLinks}
                activeTags={activeTags}
                tagProps={tags}
                itemCustomHeader={item.itemCustomHeader}
                secret={item.secret}
              ></Item>
            );
          })}
      </div>
    </div>
  );
};

export default ItemList;