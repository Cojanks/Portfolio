import React, { FC, useState } from 'react';
import { Icon } from 'semantic-ui-react';
import { CompPropsWithChildrenAndStyles } from 'types';
import './ProfileCard.css';

type ProfileCardProps = {
  image: string;
  imageAlt?: string;
  header: string;
  subheader?: string;
  description?: string;
  clickableDrawer?: boolean;
} & CompPropsWithChildrenAndStyles;

const ProfileCard: FC<ProfileCardProps> = ({
  clickableDrawer = false,
  image,
  imageAlt = 'Profile Image',
  header,
  subheader,
  description,
  children,
  styles,
}) => {
  const [isExtrasOpen, setisExtrasOpen] = useState(false);

  const handleDrawerOpen = () => {
    setisExtrasOpen(!isExtrasOpen);
  };

  return (
    <div className="card--container" style={styles}>
      <div className="card--image">
        <img src={image} alt={imageAlt}></img>
      </div>
      <div className="card--descriptionSection">
        <div className="card--header">{header}</div>
        {subheader && <div className="card--subheader">{subheader}</div>}
        {description && <div className="card--description">{description}</div>}
      </div>
      {children && (
        <div className="card--extras">
          <div
            className={
              clickableDrawer && !isExtrasOpen
                ? `card--extrasInfo card--extrasClosed`
                : `card--extrasInfo`
            }
          >
            {children}
          </div>
          {clickableDrawer && (
            <div className="card--extrasExpand" onClick={handleDrawerOpen}>
              {isExtrasOpen ? (
                <Icon name="angle double up"></Icon>
              ) : (
                <Icon name="angle double down"></Icon>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
