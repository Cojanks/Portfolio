import { createSlice } from '@reduxjs/toolkit';

export type InitialStateProps = {
  activeAboutMeTab: number | undefined;
  activeFilters: string[];
};

const initActiveTab = !!localStorage.getItem('activeAboutMeTab')
  ? +localStorage.getItem('activeAboutMeTab')!
  : undefined;

const initialState: InitialStateProps = {
  activeAboutMeTab: initActiveTab,
  activeFilters: [],
};

export const sitePreferencesSlice = createSlice({
  name: 'site',
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state = { ...state, activeAboutMeTab: action.payload.activeAboutMeTab };
      localStorage.setItem('activeAboutMeTab', action.payload.activeAboutMeTab);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setActiveTab } = sitePreferencesSlice.actions;

export const sitePreferencesSliceReducer = sitePreferencesSlice.reducer;
