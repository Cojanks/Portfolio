import React, { FC } from 'react';
import { Icon, SemanticICONS, SemanticCOLORS } from 'semantic-ui-react';
import { IconSizeProp } from 'semantic-ui-react/dist/commonjs/elements/Icon/Icon';
import { CompPropsWithChildrenAndStyles } from 'types';
import './List.css';

type ListProps = {
  items: ListItemTypes[];
  defaultIcon?: SemanticICONS | any;
  defaultIconColor?: SemanticCOLORS | any;
  defaultIconSize?: IconSizeProp;
} & CompPropsWithChildrenAndStyles;

type ListItemTypes = {
  icon?: SemanticICONS | any;
  iconColor?: SemanticCOLORS | any;
  content: string | React.ReactNode | JSX.Element;
};

const List: FC<ListProps> = ({
  items,
  defaultIcon,
  defaultIconColor,
  defaultIconSize,
  styles,
}) => {
  return (
    <ul className="list--ul" style={styles}>
      {items.map((item, i) => {
        return (
          <li
            className={
              defaultIcon || item.icon ? 'list--li list--li-icon' : 'list--li'
            }
            key={i}
          >
            {(defaultIcon || item.icon) && (
              <Icon
                name={item.icon ? item.icon : defaultIcon}
                color={item.iconColor ? item.iconColor : defaultIconColor}
                size={defaultIconSize}
              ></Icon>
            )}
            {item.content}
          </li>
        );
      })}
    </ul>
  );
};

export default List;
