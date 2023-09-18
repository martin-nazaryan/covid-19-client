import { FC } from 'react';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';

import './styles.scss';

const { Header } = Layout;

const AppHeader: FC = () => (
  <Header className="app-header">
    <Link to="/">
      <strong className="app-logo">COVID-19 Statistics</strong>
    </Link>
  </Header>
);

export default AppHeader;
