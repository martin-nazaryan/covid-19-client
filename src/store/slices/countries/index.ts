import { createAsyncThunk, createSlice, SerializedError } from '@reduxjs/toolkit';

import { RootState, StoreLoadingEnum } from '../../types';

import { CountriesRequestDto, CountriesResponseDto } from './types.ts';
import { countriesApi } from './api.ts';

import { createApiError } from '@/services/api/helpers.ts';

interface CountriesState {
  entities: CountriesResponseDto;
  loading: StoreLoadingEnum;
  error: SerializedError | null;
}

const initialState: CountriesState = {
  entities: [],
  loading: StoreLoadingEnum.Idle,
  error: null,
};

export const fetchCountriesThunk = createAsyncThunk<CountriesResponseDto, CountriesRequestDto>(
  'countries/fetch',
  async (params, thunkAPI) => {
    try {
      const response = await countriesApi.fetchAll(params);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(createApiError(e));
    }
  },
);

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountriesThunk.fulfilled, (state, { payload }) => {
        state.loading = StoreLoadingEnum.Succeeded;
        state.entities = payload;
      })
      .addCase(fetchCountriesThunk.pending, (state) => {
        state.loading = StoreLoadingEnum.Pending;
      })
      .addCase(fetchCountriesThunk.rejected, (state, { error }) => {
        state.loading = StoreLoadingEnum.Failed;
        state.error = error;
      });
  },
});

export const selectCountries = (state: RootState) => state.countries.entities || [];
export const selectCountriesLoading = (state: RootState) => state.countries.loading;
