import { AxiosResponse } from 'axios';

import { CountryRequestDto, CountryResponseDto } from '../country/types.ts';

import apiService from '@/services/api';

export const countryApi = {
  async fetchCountry({ country, ...params }: CountryRequestDto): Promise<AxiosResponse<CountryResponseDto>> {
    return apiService.get(`/countries/${country}`, {
      params,
    });
  },
};
