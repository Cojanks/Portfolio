import React, { FC } from 'react';
import { CompPropsWithChildrenAndStyles, CompPropsWithOnClick } from 'types';

import './Pill.css';

type PillProps = {
  label?: string;
  color?: string;
  textColor?: string;
  clickable?: boolean;
  variant?: 'outlined' | 'filled';
} & CompPropsWithChildrenAndStyles &
  CompPropsWithOnClick;

const Pill: FC<PillProps> = ({
  children,
  variant = 'outlined',
  color,
  textColor,
  clickable = false,
  onClick,
}) => {
  const getClasses = () => {
    let classes = 'pill--container';

    if (variant === 'filled') {
      classes += ' pill--container__outlined';
    }

    if (clickable) {
      classes += ' pill--container__clickable';
    }

    return classes;
  };

  const getStyles = () => {
    let styles: any = {};

    if (variant === 'filled') {
      styles.backgroundColor = color;
      styles.borderColor = color;

      textColor === undefined || textColor === 'undefined'
        ? (styles.color = 'white')
        : (styles.color = textColor);
    } else {
      styles.backgroundColor = 'white';
      styles.color = color;
      styles.borderColor = color;
    }
    return styles;
  };

  return (
    <div className={getClasses()} style={getStyles()} onClick={onClick}>
      {children}
    </div>
  );
};

export default Pill;
