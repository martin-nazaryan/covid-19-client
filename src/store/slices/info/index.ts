import { createAsyncThunk, createSlice, SerializedError } from '@reduxjs/toolkit';

import { RootState, StoreLoadingEnum } from '../../types';

import { infoApi } from './api.ts';
import { InfoRequestDto, InfoResponseDto } from './types.ts';

import { createApiError } from '@/services/api/helpers.ts';

interface InfoState {
  entity: InfoResponseDto | null;
  loading: StoreLoadingEnum;
  error: SerializedError | null;
}

const initialState: InfoState = {
  entity: null,
  loading: StoreLoadingEnum.Idle,
  error: null,
};

export const fetchInfoThunk = createAsyncThunk<InfoResponseDto, InfoRequestDto>(
  'info/fetch',
  async (params, thunkAPI) => {
    try {
      const response = await infoApi.fetchAll(params);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(createApiError(e));
    }
  },
);

export const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInfoThunk.fulfilled, (state, { payload }) => {
        state.loading = StoreLoadingEnum.Succeeded;
        state.entity = payload;
      })
      .addCase(fetchInfoThunk.pending, (state) => {
        state.loading = StoreLoadingEnum.Pending;
      })
      .addCase(fetchInfoThunk.rejected, (state, { error }) => {
        state.loading = StoreLoadingEnum.Failed;
        state.error = error;
      });
  },
});

export const selectInfo = (state: RootState) => state.info.entity;
export const selectInfoLoading = (state: RootState) => state.info.loading;
