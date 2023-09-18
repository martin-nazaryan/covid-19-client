import { FC } from 'react';
import { Layout } from 'antd';

import './styles.scss';

import AppHeader from '@/components/Layout/Header';
import AppContent from '@/components/Layout/Content';
import AppFooter from '@/components/Layout/Footer';

const AppLayout: FC = () => (
  <Layout className="layout">
    <AppHeader />
    <AppContent />
    <AppFooter />
  </Layout>
);

export default AppLayout;
