import React, { FC } from 'react';
import { CompPropsWithChildrenAndStyles, CompPropsWithOnClick } from 'types';

import './Pill.css';

type PillProps = {
  label?: string;
  color?: string;
  textColor?: string;
  clickable?: boolean;
  variant?: 'outlined' | 'filled';
  shape?: 'rounded' | 'square';
  noHover?: boolean;
} & CompPropsWithChildrenAndStyles &
  CompPropsWithOnClick;

const Pill: FC<PillProps> = ({
  children,
  variant = 'outlined',
  shape = 'rounded',
  color,
  textColor,
  clickable = false,
  noHover = false,
  onClick,
  styles,
}) => {
  const getClasses = () => {
    let classes = 'pill--container';

    if (variant === 'filled') {
      classes += ' pill--container__outlined';
    }

    if (clickable) {
      classes += ' pill--container__clickable';
    }

    if (noHover) {
      classes += ' pill--container__noHover';
    }

    if (shape === 'square') {
      classes += ' pill--container__square';
    }

    return classes;
  };

  const getStyles = () => {
    let stylesObj: any = styles ? styles : {};

    if (variant === 'filled') {
      stylesObj.backgroundColor = color;
      stylesObj.borderColor = color;

      textColor === undefined || textColor === 'undefined'
        ? (stylesObj.color = 'white')
        : (stylesObj.color = textColor);
    } else {
      stylesObj.backgroundColor = 'white';
      stylesObj.color = color;
      stylesObj.borderColor = color;
    }
    return stylesObj;
  };

  return (
    <div className={getClasses()} style={getStyles()} onClick={onClick}>
      {children}
    </div>
  );
};

export default Pill;
