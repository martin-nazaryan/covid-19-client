import { Link } from 'react-router-dom';
import { Image, Space, TableColumnProps, Tag } from 'antd';

import { Country } from '@/store/slices/countries/types.ts';

export const columns: TableColumnProps<Country>[] = [
  {
    title: 'Country',
    dataIndex: 'country',
    key: 'country',
    render: (value, record) => (
      <Link to={`/countries/${record.countryInfo.iso2}`}>
        <Space>
          <Tag>
            {/* I aim to display flags sourced from corona.lmao.ninja; however, the corona.lmao.ninja API delivers flag URLs through disease.sh. Therefore, I am substituting the domain to present them. */}
            <Image
              preview={false}
              width={14}
              alt={record.countryInfo.iso2}
              src={record.countryInfo.flag.replace('disease.sh', 'corona.lmao.ninja')}
            />
          </Tag>

          {value}
        </Space>
      </Link>
    ),
  },
  {
    title: 'Cases',
    dataIndex: 'cases',
    key: 'cases',
  },
  {
    title: 'Today Cases',
    dataIndex: 'todayCases',
    key: 'todayCases',
  },
  {
    title: 'Deaths',
    dataIndex: 'deaths',
    key: 'deaths',
  },
  {
    title: 'Today Deaths',
    dataIndex: 'todayDeaths',
    key: 'todayDeaths',
  },
  {
    title: 'Recovered',
    dataIndex: 'recovered',
    key: 'recovered',
  },
];
