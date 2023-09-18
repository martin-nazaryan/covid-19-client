import { createAsyncThunk, createSlice, SerializedError } from '@reduxjs/toolkit';

import { CountryRequestDto, CountryResponseDto } from './types.ts';
import { countryApi } from './api.ts';

import { RootState, StoreLoadingEnum } from '@/store/types';
import { createApiError } from '@/services/api/helpers.ts';

interface CountryState {
  entity: CountryResponseDto | null;
  loading: StoreLoadingEnum;
  error: SerializedError | null;
}

const initialState: CountryState = {
  entity: null,
  loading: StoreLoadingEnum.Idle,
  error: null,
};

export const fetchCountryThunk = createAsyncThunk<CountryResponseDto, CountryRequestDto>(
  'country/fetch',
  async (params, thunkAPI) => {
    try {
      const response = await countryApi.fetchCountry(params);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(createApiError(e));
    }
  },
);

export const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    reset(state) {
      console.log('OKOKOKOKOKOK');
      state.entity = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountryThunk.fulfilled, (state, { payload }) => {
        state.loading = StoreLoadingEnum.Succeeded;
        state.entity = payload;
      })
      .addCase(fetchCountryThunk.pending, (state) => {
        state.loading = StoreLoadingEnum.Pending;
      })
      .addCase(fetchCountryThunk.rejected, (state, { error }) => {
        state.loading = StoreLoadingEnum.Failed;
        state.error = error;
      });
  },
});

export const selectCountry = (state: RootState) => state.country.entity;
