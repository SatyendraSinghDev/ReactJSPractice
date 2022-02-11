import { configureStore } from '@reduxjs/toolkit';
import myCounterReducer from '../features/mycounter/mycounterSlice';
import myThemeReducer from '../features/mytheme/mythemeSlice';

export const store = configureStore({
  reducer: {
    myCounter: myCounterReducer,
    myTheme: myThemeReducer,
  },
});
