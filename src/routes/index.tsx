import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AppLayout from '@/components/Layout';
import Dashboard from '@/routes/Dashboard';
import Countries from '@/routes/Coutries';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="countries/*" element={<Countries />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
