import { configureStore } from '@reduxjs/toolkit';
import { reducerSlices } from './slices';

export const store = configureStore({
  reducer: {
    ...reducerSlices,
  },
});

export type RootState = ReturnType<typeof store.getState>;
