import { FC, useEffect } from 'react';
import { Col, Row } from 'antd';

import CountriesTable from '@/components/CountriesTable';
import StatisticsInfo from '@/components/StatisticsInfo';
import { useAppDispatch } from '@/store/hooks/useAppDispatch.ts';
import { useAppSelector } from '@/store/hooks/useAppSelector.ts';
import { fetchInfoThunk, selectInfo } from '@/store/slices/info';

const Dashboard: FC = () => {
  const dispatch = useAppDispatch();
  const info = useAppSelector(selectInfo);

  useEffect(() => {
    dispatch(fetchInfoThunk({}));
  }, [dispatch]);

  return (
    <main>
      <h1>COVID-19 World Statistics</h1>

      <Row gutter={[16, 16]}>
        <Col span={24}>
          <h2>Global info</h2>
          <StatisticsInfo cases={info?.cases || 0} recovered={info?.recovered || 0} deaths={info?.deaths || 0} />
        </Col>

        <Col span={24}>
          <h2>Countries info</h2>
          <CountriesTable />
        </Col>
      </Row>
    </main>
  );
};

export default Dashboard;
