import React, { FC } from 'react';
import { CompPropsWithChildrenAndStyles } from 'types';
import './ErrorMessage.css';

type ErrorType = {} & CompPropsWithChildrenAndStyles;
const ErrorMessage: FC<ErrorType> = ({ children, styles }) => {
  return (
    <div className="message--error" style={styles}>
      {children}
    </div>
  );
};

export default ErrorMessage;
