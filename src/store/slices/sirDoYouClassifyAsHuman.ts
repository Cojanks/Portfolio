import { createSlice } from '@reduxjs/toolkit';

export type InitialStateProps = {
  IWonderHowManyWillFindThisState: string;
  areYouAMeatBag: boolean;
  lifeform: string;
  whatsHisName: string;
  activeAboutMeTab: number | undefined;
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
  whatsHisName: 'Dade Murphy',
  activeAboutMeTab: initActiveTab,
};

export const sirDoYouClassifyAsHumanSlice = createSlice({
  name: 'lifeform',
  initialState,
  reducers: {
    confirmMeatbagHuman: (state) => {
      state.areYouAMeatBag = true;
      console.log(
        'You have passed the Turing Test and are now considered H U M A N.... Now you owe Taxes, Nioce meeting you!'
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
    setActiveTab: (state, action) => {
      state = { ...state, activeAboutMeTab: action.payload.activeAboutMeTab };
      localStorage.setItem('activeAboutMeTab', action.payload.activeAboutMeTab);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  confirmMeatbagHuman,
  unconfirmMeatbagHuman,
  setMeatbagClassification,
  setActiveTab,
} = sirDoYouClassifyAsHumanSlice.actions;

export const sirDoYouClassifyAsHumanReducer =
  sirDoYouClassifyAsHumanSlice.reducer;
