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
  pictureHoverText?: string;
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
  pictureHoverText,
}) => {
  const [isExtrasOpen, setisExtrasOpen] = useState(false);
  const [isPictureHovered, setisPictureHovered] = useState(false);

  const handleDrawerOpen = () => {
    setisExtrasOpen(!isExtrasOpen);
  };

  const handleHoverChange = (e: any) => {
    if (pictureHoverText) {
      e.preventDefault();
      const newSt = !isPictureHovered;
      setisPictureHovered(newSt);
    }
  };

  return (
    <div className="card--container" style={styles}>
      <div
        className="card--image"
        onMouseEnter={(e) => handleHoverChange(e)}
        onMouseLeave={(e) => handleHoverChange(e)}
      >
        {pictureHoverText && (
          <div
            className={
              isPictureHovered
                ? 'card--image-overlay visible'
                : 'card--image-overlay'
            }
          >
            <span>{pictureHoverText}</span>
          </div>
        )}

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
