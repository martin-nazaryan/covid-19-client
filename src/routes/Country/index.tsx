import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Divider, Image, Skeleton } from 'antd';

import { useAppDispatch } from '@/store/hooks/useAppDispatch.ts';
import { countrySlice, fetchCountryThunk, selectCountry, selectCountryLoading } from '@/store/slices/country';
import { useAppSelector } from '@/store/hooks/useAppSelector.ts';
import StatisticsInfo from '@/components/StatisticsInfo';
import { StoreLoadingEnum } from '@/store/types.ts';

import './styles.scss';

const Country: FC = () => {
  const params = useParams();
  const dispatch = useAppDispatch();

  const country = useAppSelector(selectCountry);
  const countryLoading = useAppSelector(selectCountryLoading);

  useEffect(() => {
    if (params.country) {
      dispatch(fetchCountryThunk({ country: params.country }));
    }

    return () => {
      dispatch(countrySlice.actions.reset());
    };
  }, [params.country, dispatch]);

  return (
    <main>
      {countryLoading === StoreLoadingEnum.Pending ? (
        <Skeleton active />
      ) : (
        <>
          <div className="container">
            <h1>{country?.country}</h1>

            <Image preview={false} alt={country?.countryInfo.iso2} src={country?.countryInfo.flag}></Image>
          </div>

          <Divider />

          <StatisticsInfo
            cases={country?.cases || 0}
            deaths={country?.deaths || 0}
            recovered={country?.recovered || 0}
          />
        </>
      )}
    </main>
  );
};

export default Country;
