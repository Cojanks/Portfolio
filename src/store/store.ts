import { configureStore } from '@reduxjs/toolkit';
import {
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
  TypedUseSelectorHook,
} from 'react-redux';
import { sirDoYouClassifyAsHumanReducer } from './slices/sirDoYouClassifyAsHuman';
import { sitePreferencesSliceReducer } from './slices/sitePreferences';

const necronomicon = configureStore({
  reducer: { sirDoYouClassifyAsHumanReducer, sitePreferencesSliceReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof necronomicon.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof necronomicon.dispatch;

const { dispatch } = necronomicon;

const useDispatch = () => useAppDispatch<AppDispatch>();
const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;

export { necronomicon, dispatch, useSelector, useDispatch };
