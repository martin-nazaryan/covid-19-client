import { FC } from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

const { Content } = Layout;

const AppContent: FC = () => (
  <Content>
    <Outlet />
  </Content>
);

export default AppContent;
