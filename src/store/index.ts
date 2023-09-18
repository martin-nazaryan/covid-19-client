import { configureStore, isRejectedWithValue } from '@reduxjs/toolkit';

import { countriesSlice } from './slices/countries';
import { infoSlice } from './slices/info';
import { countrySlice } from './slices/country';

import { router } from '@/routes';

export const store = configureStore({
  reducer: {
    info: infoSlice.reducer,
    countries: countriesSlice.reducer,
    country: countrySlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(() => (next) => async (action) => {
      if (isRejectedWithValue(action)) {
        router.navigate('/error');
      }

      return next(action);
    }),
});
