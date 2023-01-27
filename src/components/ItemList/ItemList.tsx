import Pill from 'components/Pill/Pill';
import React, { FC, useEffect, useState } from 'react';
import { Icon } from 'semantic-ui-react';
import Item from './Item';

import './ItemList.css';
import { ItemListProps } from './Types';

const ItemList: FC<ItemListProps> = ({
  header,
  tags,
  items,
  initTagsActive = [],
  onFilterChange,
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

  const handleFilterOpen = () => {
    const initFilterOpen = isFilterOpen;
    setisFilterOpen(!initFilterOpen);
  };

  const handleFilterChange = (tag: any) => {
    const name = tag.name.toLowerCase();
    const newVal = !activeTags[name];
    setactiveTags({
      ...activeTags,
      [name as string]: newVal,
    });
  };

  useEffect(() => {
    const setData = () => {
      if (onFilterChange) {
        let activeTagsArr: string[] = [];

        for (const tag in activeTags) {
          if (activeTags[tag]) {
            activeTagsArr.push(tag);
          }
        }
        onFilterChange(activeTagsArr);
      }
    };
    setData();
  }, [activeTags]);

  return (
    <div className="itemList--container">
      <div className="itemList--header-container" style={header.styles}>
        <h3 className="itemList--header">{header.headerText}</h3>
        {header.headerSubtext && (
          <p className="itemList--sub-header">
            {header.headerSubtext}{' '}
            <div style={{ marginTop: '5px' }}>
              The filters are additive, so if any item has at least one tag
              active, it will be shown. - (Select 'Typescript' to see the entire
              list.)
            </div>
            <div style={{ marginTop: '5px' }}>
              <b>
                [ NOTE: Some of these tags do not have items yet, I am working
                to get them in as soon as I can! ]
              </b>
            </div>
          </p>
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
                  handleFilterChange(tag);
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

        <div className="itemList--filter-expand" onClick={handleFilterOpen}>
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
