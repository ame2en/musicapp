import { configureStore, getDefaultMiddleware  } from '@reduxjs/toolkit';
import { ShazamCoreApi } from './services/shazamCore';
import playerReducer from './features/playerSlice';

export const store = configureStore({
  reducer: {
    [ShazamCoreApi.reducerPath]: ShazamCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware)=>{return getDefaultMiddleware().concat(ShazamCoreApi.middleware)}
});
