import { createSlice } from '@reduxjs/toolkit';

export type InitialStateProps = {
  activeAboutMeTab: number | undefined;
  activeFilters: string[];
};

const initActiveFilters = !!localStorage.getItem('activeFilters')
  ? localStorage.getItem('activeFilters')!.split(',')
  : ['custom component', 'api', 'app views'];

const initActiveTab = !!localStorage.getItem('activeAboutMeTab')
  ? +localStorage.getItem('activeAboutMeTab')!
  : undefined;

const initialState: InitialStateProps = {
  activeAboutMeTab: initActiveTab,
  activeFilters: initActiveFilters,
};

export const sitePreferencesSlice = createSlice({
  name: 'site',
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeAboutMeTab = action.payload.activeAboutMeTab;
      localStorage.setItem('activeAboutMeTab', action.payload.activeAboutMeTab);
    },
    setActiveFilters: (state, action) => {
      state.activeFilters = action.payload.activeFilters;
      localStorage.setItem(
        'activeFilters',
        action.payload.activeFilters.join(',')
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { setActiveTab, setActiveFilters } = sitePreferencesSlice.actions;

export const sitePreferencesSliceReducer = sitePreferencesSlice.reducer;
