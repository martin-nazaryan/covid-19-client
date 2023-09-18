import { createBrowserRouter } from 'react-router-dom';

import Error from '@/routes/Error';
import Country from '@/routes/Country';
import AppLayout from '@/components/Layout';
import NoMatch from '@/routes/NoMatch';
import Dashboard from '@/routes/Dashboard';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/countries/:country',
        element: <Country />,
      },
      {
        path: '/error',
        element: <Error />,
      },
      {
        path: '*',
        element: <NoMatch />,
      },
    ],
  },
]);
