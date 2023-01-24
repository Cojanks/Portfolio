import { createSlice } from '@reduxjs/toolkit';

export type InitialStateProps = {
  IWonderHowManyWillFindThisState: string;
  areYouAMeatBag: boolean;
  lifeform: string;
  whatsHisName: string;
};

const isHuman = !!localStorage.getItem('isHuman');
console.log('Detecting if Human: ' + isHuman);

const initialState: InitialStateProps = {
  IWonderHowManyWillFindThisState: 'Well, you did! (Seriously though, hire me)',
  areYouAMeatBag: isHuman,
  lifeform: '',
  whatsHisName: 'Dade Murphy',
};

export const sirDoYouClassifyAsHumanSlice = createSlice({
  name: 'lifeform',
  initialState,
  reducers: {
    confirmMeatbagHuman: (state) => {
      state = { ...state, areYouAMeatBag: true };
    },
    setMeatbagClassification: (state, action) => {
      state = { ...state, lifeform: action.payload.classification };
    },
  },
});

// Action creators are generated for each case reducer function
export const { confirmMeatbagHuman, setMeatbagClassification } =
  sirDoYouClassifyAsHumanSlice.actions;

export const sirDoYouClassifyAsHumanReducer =
  sirDoYouClassifyAsHumanSlice.reducer;
