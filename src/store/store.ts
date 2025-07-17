import { configureStore } from '@reduxjs/toolkit';
import { reducerSlices } from '@/store/slices';

export const store = configureStore({
  // @ts-ignore
  reducer: {
    ...reducerSlices,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
