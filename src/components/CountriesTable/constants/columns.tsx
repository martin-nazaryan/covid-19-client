import { Link } from 'react-router-dom';
import { Image, TableColumnProps, Tag } from 'antd';

import { Country } from '@/store/slices/countries/types.ts';

export const columns: TableColumnProps<Country>[] = [
  {
    title: 'Country',
    dataIndex: 'country',
    key: 'country',
    render: (value, record) => (
      <Link to={`/countries/${record.countryInfo.iso2.toLowerCase()}`}>
        {value}{' '}
        <Tag>
          <Image preview={false} width={16} alt={record.countryInfo.iso2} src={record.countryInfo.flag} />
        </Tag>
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
