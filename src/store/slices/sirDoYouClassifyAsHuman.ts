import { createSlice } from '@reduxjs/toolkit';

export type InitialStateProps = {
  areYouAMeatBag: boolean;
  lifeform: string;
};

const isHuman = !!localStorage.getItem('isHuman');
console.log('isHuman: ' + isHuman);

const initialState: InitialStateProps = {
  areYouAMeatBag: isHuman,
  lifeform: '',
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
