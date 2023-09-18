import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch } from '@/store/hooks/useAppDispatch.ts';
import { countrySlice, fetchCountryThunk, selectCountry } from '@/store/slices/country';
import { useAppSelector } from '@/store/hooks/useAppSelector.ts';
import StatisticsInfo from '@/components/StatisticsInfo';

const Country: FC = () => {
  const params = useParams();
  const dispatch = useAppDispatch();

  const country = useAppSelector(selectCountry);

  useEffect(
    () => () => {
      countrySlice.actions.reset();
    },
    [],
  );

  useEffect(() => {
    if (params.country) {
      dispatch(fetchCountryThunk({ country: params.country }));
    }

    return () => {
      countrySlice.actions.reset();
    };
  }, [params.country, dispatch]);

  return (
    <>
      <h1>{country?.country}</h1>

      <StatisticsInfo cases={country?.cases || 0} deaths={country?.deaths || 0} recovered={country?.recovered || 0} />
    </>
  );
};

export default Country;
