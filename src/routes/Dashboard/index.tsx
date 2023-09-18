import { FC, useEffect } from 'react';
import { Col, Row, Skeleton } from 'antd';

import CountriesTable from '@/components/CountriesTable';
import StatisticsInfo from '@/components/StatisticsInfo';
import { useAppDispatch } from '@/store/hooks/useAppDispatch.ts';
import { useAppSelector } from '@/store/hooks/useAppSelector.ts';
import { fetchInfoThunk, selectInfo, selectInfoLoading } from '@/store/slices/info';
import { StoreLoadingEnum } from '@/store/types.ts';

const Dashboard: FC = () => {
  const dispatch = useAppDispatch();
  const info = useAppSelector(selectInfo);
  const infoLoading = useAppSelector(selectInfoLoading);

  useEffect(() => {
    dispatch(fetchInfoThunk({}));
  }, [dispatch]);

  return (
    <main>
      <h1>COVID-19 World Statistics</h1>

      <Row gutter={[16, 16]}>
        <Col span={24}>
          <h2>Global info</h2>
          {infoLoading === StoreLoadingEnum.Pending ? (
            <Skeleton active paragraph={{ rows: 2 }} />
          ) : (
            <StatisticsInfo
              cases={info?.cases || 0}
              recovered={info?.recovered || 0}
              deaths={info?.deaths || 0}
              todayDeaths={info?.todayDeaths || 0}
            />
          )}
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
