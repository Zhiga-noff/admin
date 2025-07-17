import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';

interface Request {
  key: string;
  title: string;
  queuePath: string;
}

const initialState: Request = {
  key: 'transcribation',
  title: 'Транскрибация',
  queuePath: '/api/transcribation/projects/transcribation/queue/',
};

export const requestSlice = createSlice({
  name: 'requestSlice',
  initialState,
  reducers: {
    setDataForPage: (state, { payload }: PayloadAction<Request>) => {
      state.key = payload.key;
      state.title = payload.title;
      state.queuePath = payload.queuePath;
    },
  },
});

export const getRequestSlice = (store: RootState) => store.requestSlice;
export const { setDataForPage } = requestSlice.actions;
