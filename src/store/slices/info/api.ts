import { AxiosResponse } from 'axios';

import apiService from '@/services/api';
import { InfoRequestDto, InfoResponseDto } from '@/store/slices/info/types.ts';

export const infoApi = {
  async fetchAll(params: InfoRequestDto): Promise<AxiosResponse<InfoResponseDto>> {
    return apiService.get('/info', {
      params,
    });
  },
};
