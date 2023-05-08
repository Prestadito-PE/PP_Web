import { configureStore } from '@reduxjs/toolkit';
import { sessionSlice } from './slices';


export const store = configureStore({
  reducer: {
    sessionReducer: sessionSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
