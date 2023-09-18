import { configureStore } from '@reduxjs/toolkit';

import { countriesSlice } from './slices/countries';
import { infoSlice } from './slices/info';
import { countrySlice } from './slices/country';

export const store = configureStore({
  reducer: {
    info: infoSlice.reducer,
    countries: countriesSlice.reducer,
    country: countrySlice.reducer,
  },
});
