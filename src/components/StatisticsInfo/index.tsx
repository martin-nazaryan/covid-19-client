import { FC } from 'react';
import { Card, Col, Row, Statistic } from 'antd';
import CountUp from 'react-countup';

const formatter = (value: number) => <CountUp end={value} separator="," />;

interface Props {
  cases: number;
  deaths: number;
  recovered: number;
}

const StatisticsInfo: FC<Props> = ({ cases = 0, deaths = 0, recovered = 0 }) => (
  <Row gutter={16}>
    <Col span={8}>
      <Card>
        <Statistic title="Coronavirus Cases" value={cases} formatter={() => formatter(cases)} />
      </Card>
    </Col>

    <Col span={8}>
      <Card>
        <Statistic
          title="Deaths"
          value={deaths}
          valueStyle={{ color: '#cf1322' }}
          precision={deaths}
          formatter={() => formatter(deaths)}
        />
      </Card>
    </Col>

    <Col span={8}>
      <Card>
        <Statistic
          title="Recovered"
          valueStyle={{ color: '#3f8600' }}
          value={recovered}
          precision={recovered}
          formatter={() => formatter(recovered)}
        />
      </Card>
    </Col>
  </Row>
);

export default StatisticsInfo;
