import React, { FC } from 'react';
import { CompPropsWithChildrenAndStyles } from 'types';

type ArrowProps = {
  direction: 'left' | 'right';
  rotateVal: string;
  color: string;
} & CompPropsWithChildrenAndStyles;

const Arrow: FC<ArrowProps> = ({
  direction = 'right',
  rotateVal = '0',
  color,
}) => {
  const getTransformVals = () => {
    let TVal = 'rotate(' + rotateVal + ')'; // Default foir right side direction

    if (direction === 'left') {
      TVal += ' scale(-1 1)';
    }

    return TVal;
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="120pt"
      height="100pt"
      version="1.1"
      viewBox="0 0 120 100"
      transform={getTransformVals()}
    >
      <g>
        <path
          transform="scale(0.2) translate(-80 -80)"
          fill={color}
          d="m591.73 222.12c-60.602-42.43-123.39-81.066-188.57-116.04-20.598-11.047-44.09 16.391-25.762 33.395 18.883 17.516 38.512 33.93 58.828 49.379-91.477-3.5859-190.3 24.23-257.48 76.137-37.5 28.977-68.797 71.152-77.77 118.48-5.1445 27.172-7.5273 68.711 26.941 72.945 7.8242 0.96484 9.5977-10.426 3.793-13.996-32.324-19.852 26.711-106.2 40.758-121.23 27.977-29.941 64.098-50.113 102.47-63.684 79.992-28.285 173.2-39.727 253.61-8.8984 0.96484 0.37109 1.8828 0.54688 2.8047 0.76172-28.59 22.77-53.406 49.672-72.531 81.559-13.926 23.23 20.492 42.129 35.695 20.867 27.234-38.098 57.02-68.488 97.211-92.961 14.418-8.7656 12.957-27.633 0.003907-36.707z"
        />
      </g>
    </svg>
  );
};

export default Arrow;
