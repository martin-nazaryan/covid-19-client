import { AxiosResponse } from 'axios';

import apiService from '@/services/api';
import { CountriesRequestDto, CountriesResponseDto } from '@/store/slices/countries/types.ts';

export const countriesApi = {
  async fetchAll(params: CountriesRequestDto): Promise<AxiosResponse<CountriesResponseDto>> {
    return apiService.get('/countries', {
      params,
    });
  },
};
