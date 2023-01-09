import React, { FC } from 'react';
import { Icon, SemanticICONS, SemanticCOLORS } from 'semantic-ui-react';
import { CompPropsWithChildrenAndStyles } from 'types';
import './List.css';

type ListProps = {
  items: ListItemTypes[];
} & CompPropsWithChildrenAndStyles;

type ListItemTypes = {
  icon?: SemanticICONS | any;
  iconColor?: SemanticCOLORS | any;
  content: string | React.ReactNode | JSX.Element;
};

const List: FC<ListProps> = ({ items }) => {
  return (
    <ul className="list--ul">
      {items.map((item, i) => {
        return (
          <li
            className={item.icon ? 'list--li list--li-icon' : 'list--li'}
            key={i}
          >
            {item.icon && <Icon name={item.icon} color={item.iconColor}></Icon>}
            {item.content}
          </li>
        );
      })}
    </ul>
  );
};

export default List;
