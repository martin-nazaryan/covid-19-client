import { Country, QueryParams } from '../../types.ts';

export interface CountryRequestDto {
  country?: string;
  yesterday?: QueryParams;
  twoDaysAgo?: QueryParams;
  strict?: QueryParams;
  allowNull?: QueryParams;
}

export type CountryResponseDto = Country;
