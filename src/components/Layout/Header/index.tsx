import { FC } from 'react';
import { Layout } from 'antd';

import './styles.scss';

const { Header } = Layout;

const AppHeader: FC = () => (
  <Header className="app-header">
    <strong className="app-logo">COVID-19 Statistics</strong>
  </Header>
);

export default AppHeader;
