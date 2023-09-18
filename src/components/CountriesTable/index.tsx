import { FC, useEffect } from 'react';
import { Table } from 'antd';

import { columns } from './constants/columns.tsx';

import { useAppDispatch } from '@/store/hooks/useAppDispatch.ts';
import { useAppSelector } from '@/store/hooks/useAppSelector.ts';
import { fetchCountriesThunk, selectCountries } from '@/store/slices/countries';

const CountriesTable: FC = () => {
  const dispatch = useAppDispatch();
  const countries = useAppSelector(selectCountries);

  useEffect(() => {
    dispatch(fetchCountriesThunk({}));
  }, [dispatch]);

  return (
    <Table scroll={{ scrollToFirstRowOnChange: false }} rowKey="country" dataSource={countries} columns={columns} />
  );
};

export default CountriesTable;
