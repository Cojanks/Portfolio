import ItemList from 'components/ItemList/ItemList';
import React from 'react';

import { listData } from 'data/ItemListData';

import './ExamplesSection.css';

function ExamplesSection() {
  return (
    <div className="examplesSection">
      <div className="ui one column centered grid responsiveGridContainer">
        <div className="ui fifteen wide column">
          <div className="examplesHeader">
            {' '}
            <div
              className="card--header"
              style={{ fontSize: '24px', lineHeight: '1' }}
            >
              Practical Examples
            </div>
            <div
              className="card--subheader"
              style={{ fontSize: '18px', marginBottom: '15px' }}
            >
              Chekhov's '
              <a
                href="https://en.wikipedia.org/wiki/Show,_don%27t_tell"
                target="_blank"
                rel="noreferrer"
              >
                Show, don't Tell
              </a>
              '
            </div>
            <p style={{ marginBottom: '15px' }}>
              Below you can find a list of practical things that I have built,
              able to be filtered by React features, skills, system design
              methodologies, or{' '}
              <a
                href="https://fs.blog/chestertons-fence/"
                target="_blank"
                rel="noreferrer"
              >
                relevant life lessons
              </a>
            </p>
          </div>

          <ItemList
            tags={listData.tags}
            items={listData.items}
            initTagsActive={['typescript']}
          ></ItemList>
        </div>
      </div>
    </div>
  );
}

export default ExamplesSection;
