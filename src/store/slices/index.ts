import { requestSlice } from './pages-request.slices';

export const reducerSlices = {
  [requestSlice.name]: requestSlice.reducer,
};
