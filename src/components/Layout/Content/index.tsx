import { FC } from 'react';
import { Layout, theme } from 'antd';
import { Outlet } from 'react-router-dom';

import './styles.scss';

const { Content } = Layout;

const AppContent: FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Content className="content" color={colorBgContainer}>
      <Outlet />
    </Content>
  );
};

export default AppContent;
