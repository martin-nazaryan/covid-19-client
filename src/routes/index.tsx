import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AppLayout from '@/components/Layout';
import Dashboard from '@/routes/Dashboard';
import Country from '@/routes/Country';
import NoMatch from '@/routes/NoMatch';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<AppLayout />} errorElement={<h1>Error</h1>}>
        <Route path="/" element={<Dashboard />} />
        <Route path="countries/:country" element={<Country />} />

        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
