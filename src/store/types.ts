import { store } from '@/store';

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export enum StoreLoadingEnum {
  Idle = 'IDLE',
  Pending = 'PENDING',
  Succeeded = 'SUCCEEDED',
  Failed = 'FAILED',
}

export enum QueryParams {
  True = 'true',
  False = 'False',
  Zero = '0',
  One = '1',
}

export interface Country {
  updated: number;
  country: string;
  countryInfo: CountryInfo;
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  todayRecovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  population: number;
  continent: number;
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
  activePerOneMillion: number;
  recoveredPerOneMillion: number;
  criticalPerOneMillion: number;
}

export interface CountryInfo {
  _id: number;
  iso2: string;
  iso3: string;
  lat: number;
  long: number;
  flag: string;
}
