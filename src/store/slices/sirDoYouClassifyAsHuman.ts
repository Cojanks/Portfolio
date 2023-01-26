import { createSlice } from '@reduxjs/toolkit';

export type InitialStateProps = {
  IWonderHowManyWillFindThisState: string;
  areYouAMeatBag: boolean;
  lifeform: string;
};

const isHuman = !!localStorage.getItem('isHuman');
console.log('Sir, do you classify as human?: ' + isHuman);

const initActiveTab = !!localStorage.getItem('activeAboutMeTab')
  ? +localStorage.getItem('activeAboutMeTab')!
  : undefined;

const initialState: InitialStateProps = {
  IWonderHowManyWillFindThisState: 'Well, you did! (Seriously though, hire me)',
  areYouAMeatBag: false,
  lifeform: '',
};

export const sirDoYouClassifyAsHumanSlice = createSlice({
  name: 'lifeform',
  initialState,
  reducers: {
    confirmMeatbagHuman: (state) => {
      state.areYouAMeatBag = true;
      console.log(
        'You have passed the Turing Test and are now considered H U M A N.... Now you owe Taxes, enjoy your bad knees, and I hope you read some good books. Nice meeting you!'
      );
      localStorage.setItem('isHuman', 'I suppose so...');
    },
    unconfirmMeatbagHuman: (state) => {
      state.areYouAMeatBag = false;
      localStorage.removeItem('isHuman');
      console.log("Removing 'H U M A N' Classification...");
    },
    setMeatbagClassification: (state, action) => {
      state = { ...state, lifeform: action.payload.classification };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  confirmMeatbagHuman,
  unconfirmMeatbagHuman,
  setMeatbagClassification,
} = sirDoYouClassifyAsHumanSlice.actions;

export const sirDoYouClassifyAsHumanReducer =
  sirDoYouClassifyAsHumanSlice.reducer;
