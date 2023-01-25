import Arrow from 'components/Arrow/Arrow';
import Pill from 'components/Pill/Pill';
import React, { FC } from 'react';
import './ProveYourHumanity.css';

import { useDispatch } from 'react-redux';
import {
  confirmMeatbagHuman,
  unconfirmMeatbagHuman,
} from 'store/slices/sirDoYouClassifyAsHuman';

type HumanityProps = {};

const ProveYourHumanity: FC<HumanityProps> = () => {
  const dispatch = useDispatch();

  return (
    <div className="turning-test--container">
      <div className="request">
        Hey there! In this age of sleuthing internet bots, Can you just confirm
        that you are a human?
        <div>
          (Clicking the above will just add more detail to some of the
          information below)
        </div>
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
    </div>
  );
};

export default ProveYourHumanity;
