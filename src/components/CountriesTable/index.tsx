import { FC, useEffect } from 'react';
import { Skeleton, Table } from 'antd';

import { columns } from './constants/columns.tsx';

import { useAppDispatch } from '@/store/hooks/useAppDispatch.ts';
import { useAppSelector } from '@/store/hooks/useAppSelector.ts';
import { fetchCountriesThunk, selectCountries, selectCountriesLoading } from '@/store/slices/countries';
import { StoreLoadingEnum } from '@/store/types.ts';

const CountriesTable: FC = () => {
  const dispatch = useAppDispatch();
  const countries = useAppSelector(selectCountries);
  const countriesLoading = useAppSelector(selectCountriesLoading);

  useEffect(() => {
    dispatch(fetchCountriesThunk({}));
  }, [dispatch]);

  return countriesLoading === StoreLoadingEnum.Pending ? (
    <Skeleton paragraph={{ rows: 10 }} />
  ) : (
    <Table scroll={{ scrollToFirstRowOnChange: false }} rowKey="country" dataSource={countries} columns={columns} />
  );
};

export default CountriesTable;
