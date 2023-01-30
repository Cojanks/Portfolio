import Arrow from 'components/Arrow/Arrow';
import Pill from 'components/Pill/Pill';
import React, { FC, useState } from 'react';
import './ProveYourHumanity.css';

import { dispatch } from 'store/store';
import {
  confirmMeatbagHuman,
  unconfirmMeatbagHuman,
} from 'store/slices/sirDoYouClassifyAsHuman';

type HumanityProps = {};

const ProveYourHumanity: FC<HumanityProps> = () => {
  const [turingTestClosed, setturingTestClosed] = useState(false);

  return (
    <>
      {' '}
      <div
        className={
          !turingTestClosed
            ? 'turning-test--container'
            : 'turning-test--container hidden'
        }
      >
        <div className="request">
          Hey there! In this age of sleuthing internet bots, Can you just
          confirm that you are a human?
          <span style={{ display: 'block' }}>
            (Confirming this will simply add more exact detail to some of the
            information below. Identity theft and all that...)
          </span>
        </div>
        <Pill
          label="Negative, I am a meat popscle"
          variant="filled"
          color="#b41176"
          shape="square"
          clickable
          onClick={() => {
            dispatch(confirmMeatbagHuman());
          }}
        >
          Yes, I classify as a meat popscle
        </Pill>
        <Pill
          label="Beep Boop, I am a Boy"
          variant="filled"
          color="rgb(222, 149, 66)"
          shape="square"
          clickable
          onClick={() => {
            dispatch(unconfirmMeatbagHuman());
          }}
        >
          Beep Boop, I am a bot
        </Pill>

        {/* <div className="arrow">
        <Arrow direction={'right'} rotateVal={'0'} color="#b41176"></Arrow>
        <Arrow direction={'left'} rotateVal={'0'} color="#b41176"></Arrow>
      </div> */}
        <div className="turning-test--container-mini"></div>
      </div>
    </>
  );
};

export default ProveYourHumanity;
